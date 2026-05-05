// Variable global para almacenar todos los pedidos
let pedidosGlobal = [];
let isDragging = false;
let timersArchivado = {}; // Almacenar timers de archivado automático
let usuarioRol = null; // Variable para el rol del usuario

// Hacer funciones globales para que sean accesibles desde onclick
window.mostrarModal = mostrarModal;
window.cerrarModal = cerrarModal;
window.editarPedido = editarPedido;
window.archivarPedido = archivarPedido;

// Cargar pedidos al iniciar
document.addEventListener("DOMContentLoaded", async function() {
  // Primero obtener el rol del usuario
  await obtenerRolUsuario();
  
  // Luego cargar los pedidos
  cargarPedidos();
});

// Función para obtener el rol del usuario actual
async function obtenerRolUsuario() {
  try {
    const response = await fetch('php/obtenerUsuario.php');
    const data = await response.json();
    if (data.logged_in && data.user) {
      usuarioRol = data.user.rol;
      console.log('Rol del usuario:', usuarioRol);
    }
  } catch (error) {
    console.error('Error al obtener rol:', error);
  }
}

// Verificar si el usuario puede editar (Admin o Supervisor)
function puedeEditar() {
  return usuarioRol === 'administrador' || usuarioRol === 'supervisor';
}

// Función principal para cargar pedidos
async function cargarPedidos() {
  try {
    const response = await fetch("php/obtenerPedidos.php");
    const pedidos = await response.json();

    console.log("Pedidos recibidos:", pedidos);

    // Guardar en variable global
    pedidosGlobal = pedidos;

    // Limpiar las columnas
    document.querySelectorAll(".kanban-cards").forEach(col => col.innerHTML = "");

    pedidos.forEach(pedido => {
      crearTarjetaPedido(pedido);
    });

    // Configurar zonas de drop
    configurarDropZones();

  } catch (error) {
    console.error("Error al obtener los pedidos:", error);
    alert("Error al cargar los pedidos. Verifica la consola.");
  }
}

// Función para crear una tarjeta de pedido
function crearTarjetaPedido(pedido) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("draggable", "true");
  card.setAttribute("data-id", pedido.id);

  // Contenido base de la tarjeta
  let contenidoHTML = `
    <button class="btn-ver-detalles" onclick="event.stopPropagation(); mostrarModal(${pedido.id});">👁️ Ver</button>
    <h4>${pedido.id_pedido}</h4>
    <p><strong>Cliente:</strong> ${pedido.cliente}</p>
    <p><strong>Dirección:</strong> ${truncarTexto(pedido.direccion, 35)}</p>
    <p><strong>Material:</strong> ${pedido.material || 'No especificado'}</p>
    <p><strong>Prioridad:</strong> <span class="badge badge-${pedido.prioridad.toLowerCase()}">${pedido.prioridad}</span></p>
  `;
  
  // Mostrar trabajador según el estado
  if (pedido.estado === 'Recibido' || pedido.estado === 'Preparado') {
    if (pedido.nombre_almacen) {
      contenidoHTML += `<hr><p><strong>🏭 Almacén:</strong> ${pedido.nombre_almacen}</p>`;
    }
  } else if (pedido.estado === 'En ruta' || pedido.estado === 'Completado' || pedido.estado === 'Problemas') {
    if (pedido.nombre_repartidor) {
      contenidoHTML += `<hr><p><strong>🚚 Repartidor:</strong> ${pedido.nombre_repartidor}</p>`;
    }
  }

  // Campos dinámicos según el estado
  if (pedido.estado === "En ruta") {
    contenidoHTML += `
      <hr>
      <p><strong>🕐 Tiempo:</strong> ${pedido.tiempo_estimado || "—"}</p>
      <p><strong>📍 Distancia:</strong> ${pedido.distancia || "—"}</p>
    `;
  } else if (pedido.estado === "Completado") {
    contenidoHTML += `
      <hr>
      <p><strong>✅ Entregado</strong></p>
      <p><strong>⏱️ Tiempo:</strong> ${pedido.tiempo_total || "—"}</p>
    `;
  } else if (pedido.estado === "Problemas") {
    contenidoHTML += `
      <hr>
      <p class="alerta">⚠️ ${truncarTexto(pedido.incidencia || "Problema reportado", 30)}</p>
    `;
  }

  card.innerHTML = contenidoHTML;

  // Eventos drag and drop
  card.addEventListener("dragstart", handleDragStart);
  card.addEventListener("dragend", handleDragEnd);

  // Insertar en la columna según estado
  let contenedor = obtenerContenedorPorEstado(pedido.estado);
  if (contenedor) {
    contenedor.appendChild(card);
  }
}

// Funciones de drag and drop
function handleDragStart(e) {
  isDragging = true;
  this.classList.add("dragging");
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragEnd(e) {
  this.classList.remove("dragging");
  setTimeout(() => {
    isDragging = false;
  }, 100);
}

// Configurar zonas de drop
function configurarDropZones() {
  document.querySelectorAll(".kanban-cards").forEach(zona => {
    zona.addEventListener("dragover", function(e) {
      e.preventDefault();
      this.style.background = "#f0f0f0";
    });

    zona.addEventListener("dragleave", function() {
      this.style.background = "";
    });

    zona.addEventListener("drop", function(e) {
      e.preventDefault();
      this.style.background = "";
      
      const cardDragging = document.querySelector(".dragging");
      if (cardDragging) {
        this.appendChild(cardDragging);
        
        // Obtener nuevo estado
        const nuevoEstado = obtenerEstadoPorColumna(this.closest(".kanban-column").id);
        const pedidoId = cardDragging.getAttribute("data-id");
        
        console.log(`Pedido ${pedidoId} movido a: ${nuevoEstado}`);
        
        // Actualizar en la base de datos
        actualizarEstadoPedido(pedidoId, nuevoEstado, cardDragging);
      }
    });
  });
}

// Función para actualizar el estado del pedido en la BD
async function actualizarEstadoPedido(pedidoId, nuevoEstado, cardElement) {
  try {
    const loadingIndicator = document.createElement("div");
    loadingIndicator.classList.add("loading-indicator");
    loadingIndicator.innerHTML = "⏳ Actualizando...";
    cardElement.appendChild(loadingIndicator);
    
    const response = await fetch("php/actualizarEstado.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        pedido_id: pedidoId,
        estado: nuevoEstado
      })
    });
    
    const responseText = await response.text();
    console.log("Respuesta del servidor:", responseText);
    
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Error al parsear JSON:", parseError);
      throw new Error("El servidor no devolvió JSON válido.");
    }
    
    if (loadingIndicator.parentElement) {
      loadingIndicator.remove();
    }
    
    if (result.success) {
      const pedidoIndex = pedidosGlobal.findIndex(p => p.id == pedidoId);
      if (pedidoIndex !== -1) {
        pedidosGlobal[pedidoIndex].estado = nuevoEstado;
        
        if (result.datos_calculados) {
          if (result.datos_calculados.tiempo_estimado) {
            pedidosGlobal[pedidoIndex].tiempo_estimado = result.datos_calculados.tiempo_estimado;
          }
          if (result.datos_calculados.tiempo_total) {
            pedidosGlobal[pedidoIndex].tiempo_total = result.datos_calculados.tiempo_total;
          }
          if (result.datos_calculados.firma) {
            pedidosGlobal[pedidoIndex].firma = result.datos_calculados.firma;
          }
        }
        
        actualizarTarjetaVisual(pedidoId, pedidosGlobal[pedidoIndex]);
        
        if (nuevoEstado === 'Completado') {
          iniciarTimerArchivado(pedidoId);
        }
      }

        // 🆕 RECARGAR NOTIFICACIONES INMEDIATAMENTE
        if (typeof cargarNotificaciones === 'function') {
          setTimeout(() => {
            cargarNotificaciones();
          console.log('✅ Notificaciones actualizadas después de cambio de estado');
          }, 500);
        }
      
      let mensaje = `✅ Pedido actualizado a: ${nuevoEstado}`;
      mostrarNotificacion(mensaje, "success");
    } else {
      mostrarNotificacion(`❌ Error: ${result.message}`, "error");
      cargarPedidos();
    }
  } catch (error) {
    console.error("Error en la actualización:", error);
    mostrarNotificacion("❌ Error de conexión: " + error.message, "error");
    cargarPedidos();
  }
}

// Función para mostrar el modal con detalles completos
function mostrarModal(pedidoId) {
  const pedido = pedidosGlobal.find(p => p.id == pedidoId);
  
  if (!pedido) {
    alert("No se encontró el pedido");
    return;
  }

  const modal = document.getElementById("modalPedido");
  const modalTitulo = document.getElementById("modalTitulo");
  const modalBody = document.getElementById("modalBody");
  
  if (!modal) {
    alert("Error: No se encontró el modal en la página");
    return;
  }

  if (modalTitulo) {
    modalTitulo.textContent = `Pedido ${pedido.id_pedido}`;
  }

  let contenido = `
    <div class="modal-section">
      <h3 class="section-title">
        <span class="section-icon">👤</span>
        Información del Cliente
      </h3>
      <div class="info-grid">
        <div class="info-item">
          <span class="info-label">Cliente:</span>
          <span class="info-value">${pedido.cliente}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Teléfono:</span>
          <span class="info-value">${pedido.telefono || "No especificado"}</span>
        </div>
        <div class="info-item full-width">
          <span class="info-label">Dirección:</span>
          <span class="info-value">${pedido.direccion}</span>
        </div>
      </div>
    </div>

    <div class="modal-section">
      <h3 class="section-title">
        <span class="section-icon">📦</span>
        Detalles del Pedido
      </h3>
      <div class="info-grid">
        <div class="info-item">
          <span class="info-label">ID Pedido:</span>
          <span class="info-value">${pedido.id_pedido}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Categoría:</span>
          <span class="info-value">${pedido.categoria}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Material:</span>
          <span class="info-value">${pedido.material || "No especificado"}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Peso:</span>
          <span class="info-value">${pedido.peso} kg</span>
        </div>
        <div class="info-item">
          <span class="info-label">Paquetes:</span>
          <span class="info-value">${pedido.paquetes}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Distancia:</span>
          <span class="info-value">${pedido.distancia || 0} km</span>
        </div>
        <div class="info-item">
          <span class="info-label">Prioridad:</span>
          <span class="badge badge-${pedido.prioridad.toLowerCase()}">${pedido.prioridad}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Estado Actual:</span>
          <span class="badge-estado badge-${pedido.estado.toLowerCase().replace(' ', '-')}">${pedido.estado}</span>
        </div>
      </div>
    </div>
    
    <div class="modal-section">
      <h3 class="section-title">
        <span class="section-icon">👷</span>
        Personal Asignado
      </h3>
      <div class="info-grid">
        ${(pedido.estado === 'Recibido' || pedido.estado === 'Preparado') ? `
        <div class="info-item">
          <span class="info-label">🏭 Almacén:</span>
          <span class="info-value">${pedido.nombre_almacen || '<span style="color:#999;">Sin asignar</span>'}</span>
        </div>
        ` : ''}
        ${(pedido.estado === 'En ruta' || pedido.estado === 'Completado' || pedido.estado === 'Problemas') ? `
        <div class="info-item">
          <span class="info-label">🚚 Repartidor:</span>
          <span class="info-value">${pedido.nombre_repartidor || '<span style="color:#999;">Sin asignar</span>'}</span>
        </div>
        ` : ''}
      </div>
    </div>
  `;

  if (pedido.estado === "En ruta") {
    contenido += `
      <div class="modal-section">
        <h3 class="section-title">
          <span class="section-icon">🚚</span>
          Información de Envío
        </h3>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Tiempo Estimado:</span>
            <span class="info-value">${pedido.tiempo_estimado || "No especificado"}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Distancia:</span>
            <span class="info-value">${pedido.distancia || "No especificado"}</span>
          </div>
        </div>
      </div>
    `;
  }

  if (pedido.estado === "Completado") {
    contenido += `
      <div class="modal-section">
        <h3 class="section-title">
          <span class="section-icon">✅</span>
          Información de Entrega
        </h3>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Firma:</span>
            <span class="info-value">${pedido.firma || "No especificado"}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Tiempo Total:</span>
            <span class="info-value">${pedido.tiempo_total || "No especificado"}</span>
          </div>
        </div>
      </div>
    `;
  }

  if (pedido.estado === "Problemas" && pedido.incidencia) {
    contenido += `
      <div class="modal-section">
        <h3 class="section-title warning">
          <span class="section-icon">⚠️</span>
          Incidencia Reportada
        </h3>
        <div class="alert-box">
          ${pedido.incidencia}
        </div>
      </div>
    `;
  }

  if (pedido.notas) {
    contenido += `
      <div class="modal-section">
        <h3 class="section-title">
          <span class="section-icon">📝</span>
          Notas Adicionales
        </h3>
        <div class="notes-box">
          ${pedido.notas}
        </div>
      </div>
    `;
  }

  modalBody.innerHTML = contenido;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  
  if (pedido.estado === 'Completado') {
    const modalFooter = modal.querySelector('.modal-footer');
    if (modalFooter) {
      const btnArchivarAnterior = document.getElementById('btn-archivar-modal');
      if (btnArchivarAnterior) {
        btnArchivarAnterior.remove();
      }
      
      const btnArchivar = document.createElement('button');
      btnArchivar.id = 'btn-archivar-modal';
      btnArchivar.className = 'btn-archivar';
      btnArchivar.innerHTML = '📁 Archivar Pedido';
      btnArchivar.onclick = function() {
        archivarPedido(pedido.id);
      };
      
      modalFooter.insertBefore(btnArchivar, modalFooter.firstElementChild.nextSibling);
    }
  }
  
  const btnEditar = modal.querySelector('.btn-primary');
  if (btnEditar) {
    if (puedeEditar()) {
      btnEditar.style.display = 'inline-block';
      btnEditar.onclick = function() {
        editarPedido(pedido.id);
      };
      btnEditar.innerHTML = '✏️ Editar Pedido';
    } else {
      btnEditar.style.display = 'none';
    }
  }
}

function cerrarModal() {
  const modal = document.getElementById("modalPedido");
  modal.classList.remove("active");
  document.body.style.overflow = "";
  
  const btnArchivar = document.getElementById('btn-archivar-modal');
  if (btnArchivar) {
    btnArchivar.remove();
  }
}

function editarPedido(pedidoId) {
  window.location.href = `pedidos.html?editar=${pedidoId}`;
}

document.addEventListener("click", function(e) {
  const modal = document.getElementById("modalPedido");
  if (e.target === modal) {
    cerrarModal();
  }
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    cerrarModal();
  }
});

function obtenerContenedorPorEstado(estado) {
  const mapeo = {
    "Recibido": "#col-recibido .kanban-cards",
    "Preparado": "#col-preparado .kanban-cards",
    "En ruta": "#col-enruta .kanban-cards",
    "Completado": "#col-completado .kanban-cards",
    "Problemas": "#col-problemas .kanban-cards"
  };
  return document.querySelector(mapeo[estado] || mapeo["Recibido"]);
}

function obtenerEstadoPorColumna(columnId) {
  const mapeo = {
    "col-recibido": "Recibido",
    "col-preparado": "Preparado",
    "col-enruta": "En ruta",
    "col-completado": "Completado",
    "col-problemas": "Problemas"
  };
  return mapeo[columnId] || "Recibido";
}

function truncarTexto(texto, maxLength) {
  if (!texto) return "";
  return texto.length > maxLength ? texto.substring(0, maxLength) + "..." : texto;
}

function actualizarTarjetaVisual(pedidoId, pedido) {
  const card = document.querySelector(`.card[data-id="${pedidoId}"]`);
  if (!card) return;
  
  let contenidoHTML = `
    <button class="btn-ver-detalles" onclick="event.stopPropagation(); mostrarModal(${pedido.id});">👁️ Ver</button>
    <h4>${pedido.id_pedido}</h4>
    <p><strong>Cliente:</strong> ${pedido.cliente}</p>
    <p><strong>Dirección:</strong> ${truncarTexto(pedido.direccion, 35)}</p>
    <p><strong>Material:</strong> ${pedido.material || 'No especificado'}</p>
    <p><strong>Prioridad:</strong> <span class="badge badge-${pedido.prioridad.toLowerCase()}">${pedido.prioridad}</span></p>
  `;
  
  if (pedido.estado === 'Recibido' || pedido.estado === 'Preparado') {
    if (pedido.nombre_almacen) {
      contenidoHTML += `<hr><p><strong>🏭 Almacén:</strong> ${pedido.nombre_almacen}</p>`;
    }
  } else if (pedido.estado === 'En ruta' || pedido.estado === 'Completado' || pedido.estado === 'Problemas') {
    if (pedido.nombre_repartidor) {
      contenidoHTML += `<hr><p><strong>🚚 Repartidor:</strong> ${pedido.nombre_repartidor}</p>`;
    }
  }

  if (pedido.estado === "En ruta") {
    contenidoHTML += `
      <hr>
      <p><strong>🕐 Tiempo:</strong> ${pedido.tiempo_estimado || "Calculando..."}</p>
      <p><strong>📍 Distancia:</strong> ${pedido.distancia || 0} km</p>
    `;
  } else if (pedido.estado === "Completado") {
    contenidoHTML += `
      <hr>
      <p><strong>✅ Entregado</strong></p>
      <p><strong>⏱️ Tiempo:</strong> ${pedido.tiempo_total || "—"}</p>
      <p><strong>✍️ Firma:</strong> ${pedido.firma || "—"}</p>
    `;
  } else if (pedido.estado === "Problemas") {
    contenidoHTML += `
      <hr>
      <p class="alerta">⚠️ ${truncarTexto(pedido.incidencia || "Problema reportado", 30)}</p>
    `;
  }

  card.innerHTML = contenidoHTML;
  
  card.classList.add('card-updated');
  setTimeout(() => {
    card.classList.remove('card-updated');
  }, 1000);
}

function mostrarNotificacion(mensaje, tipo = "success") {
  const notificacion = document.createElement("div");
  notificacion.classList.add("notificacion", `notificacion-${tipo}`);
  notificacion.textContent = mensaje;
  
  document.body.appendChild(notificacion);
  
  setTimeout(() => {
    notificacion.classList.add("show");
  }, 10);
  
  setTimeout(() => {
    notificacion.classList.remove("show");
    setTimeout(() => {
      if (notificacion.parentElement) {
        notificacion.remove();
      }
    }, 300);
  }, 3000);
}

function iniciarTimerArchivado(pedidoId) {
  if (timersArchivado[pedidoId]) {
    clearTimeout(timersArchivado[pedidoId]);
  }
  
  console.log(`Timer de archivado iniciado para pedido ${pedidoId} (15 segundos)`);
  
  timersArchivado[pedidoId] = setTimeout(async () => {
    console.log(`Archivando automáticamente pedido ${pedidoId}`);
    await archivarPedido(pedidoId, true);
  }, 15000);
}

// Función para archivar un pedido - SIN CONFIRMACIÓN
async function archivarPedido(pedidoId, esAutomatico = false) {
  try {
    const pedido = pedidosGlobal.find(p => p.id == pedidoId);
    
    if (!pedido) {
      mostrarNotificacion("❌ No se encontró el pedido", "error");
      return;
    }
    
    const response = await fetch("php/archivarPedido.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        pedido_id: pedidoId
      })
    });
    
    const responseText = await response.text();
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      throw new Error("El servidor no devolvió JSON válido");
    }
    
    if (result.success) {
      const mensajeArchivado = esAutomatico ? 
        `📁 Pedido ${pedido.id_pedido} archivado automáticamente` :
        `📁 Pedido ${pedido.id_pedido} archivado`;
      
      mostrarNotificacion(mensajeArchivado, "success");
      
      // Cerrar modal si está abierto
      const modal = document.getElementById("modalPedido");
      if (modal && modal.classList.contains("active")) {
        cerrarModal();
      }
      
      // Eliminar el pedido de la variable global
      pedidosGlobal = pedidosGlobal.filter(p => p.id != pedidoId);
      
      // Eliminar la tarjeta del DOM con animación
      const card = document.querySelector(`.card[data-id="${pedidoId}"]`);
      if (card) {
        card.style.transition = "all 0.3s ease";
        card.style.opacity = "0";
        card.style.transform = "scale(0.8)";
        setTimeout(() => {
          if (card.parentElement) {
            card.remove();
          }
        }, 300);
      }
      
      // Limpiar timer si existe
      if (timersArchivado[pedidoId]) {
        clearTimeout(timersArchivado[pedidoId]);
        delete timersArchivado[pedidoId];
      }
    } else {
      mostrarNotificacion(`❌ Error: ${result.message}`, "error");
    }
  } catch (error) {
    console.error("Error al archivar:", error);
    mostrarNotificacion("❌ Error al archivar el pedido", "error");
  }
}