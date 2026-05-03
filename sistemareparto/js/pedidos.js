document.addEventListener("DOMContentLoaded", async function() {
  // Primero cargar trabajadores
  await cargarTrabajadores();
  
  // Verificar si estamos en modo edición
  const urlParams = new URLSearchParams(window.location.search);
  const pedidoId = urlParams.get('editar');
  
  if (pedidoId) {
    await cargarDatosParaEditar(pedidoId);
  }
  
  // Configurar eventos del formulario
  configurarFormulario();
});

// Función para cargar datos del pedido a editar
async function cargarDatosParaEditar(pedidoId) {
  try {
    const response = await fetch(`php/obtenerPedidos.php?id=${pedidoId}`);
    const data = await response.json();
    
    console.log('Datos recibidos para editar:', data);
    
    if (!data || data.length === 0) {
      alert('❌ No se encontró el pedido');
      window.location.href = 'index.html';
      return;
    }
    
    const pedido = Array.isArray(data) ? data[0] : data;
    
    console.log('Pedido a editar completo:', pedido);
    
    // Cambiar título del formulario
    const titulo = document.querySelector('h1');
    if (titulo) {
      titulo.textContent = `✏️ Editar Pedido ${pedido.id_pedido}`;
    }
    
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
      subtitle.textContent = 'Modifica los datos del pedido y guarda los cambios.';
    }
    
    // Rellenar campos del formulario
    const campoIdPedido = document.querySelector('input[name="id_pedido"]');
    if (campoIdPedido) campoIdPedido.value = pedido.id_pedido || '';
    
    const campoCliente = document.querySelector('input[name="cliente"]');
    if (campoCliente) campoCliente.value = pedido.cliente || '';
    
    const campoDireccion = document.querySelector('input[name="direccion"]');
    if (campoDireccion) campoDireccion.value = pedido.direccion || '';
    
    const campoTelefono = document.querySelector('input[name="telefono"]');
    if (campoTelefono) campoTelefono.value = pedido.telefono || '';
    
    const campoCategoria = document.querySelector('input[name="categoria"]');
    if (campoCategoria) campoCategoria.value = pedido.categoria || '';
    
    const campoMaterial = document.querySelector('select[name="material"]');
    if (campoMaterial) campoMaterial.value = pedido.material || '';
    
    const campoPeso = document.querySelector('input[name="peso"]');
    if (campoPeso) campoPeso.value = pedido.peso || '';
    
    const campoPaquetes = document.querySelector('input[name="paquetes"]');
    if (campoPaquetes) campoPaquetes.value = pedido.paquetes || '';
    
    const campoDistancia = document.querySelector('input[name="distancia"]');
    if (campoDistancia) campoDistancia.value = pedido.distancia || '';
    
    const campoPrioridad = document.querySelector('select[name="prioridad"]');
    if (campoPrioridad) campoPrioridad.value = pedido.prioridad || 'Normal';
    
    const campoEstado = document.querySelector('select[name="estado"]');
    if (campoEstado) campoEstado.value = pedido.estado || 'Recibido';
    
    // Notas
    const campoNotas = document.querySelector('textarea[name="notas"]');
    if (campoNotas) campoNotas.value = pedido.notas || '';
    
    // Trabajadores asignados - Usar el ID correcto de la tabla pedidos
    console.log('ID Almacén a asignar:', pedido.id_almacen);
    console.log('ID Repartidor a asignar:', pedido.id_repartidor);
    
    if (pedido.id_almacen) {
      const selectAlmacen = document.getElementById('select_almacen');
      if (selectAlmacen) {
        selectAlmacen.value = pedido.id_almacen;
        console.log('✅ Almacén seleccionado:', selectAlmacen.value);
      }
    }
    
    if (pedido.id_repartidor) {
      const selectRepartidor = document.getElementById('select_repartidor');
      if (selectRepartidor) {
        selectRepartidor.value = pedido.id_repartidor;
        console.log('✅ Repartidor seleccionado:', selectRepartidor.value);
      }
    }
    
    // Agregar campo oculto con el ID para actualizar
    let inputId = document.getElementById('pedido_id_hidden');
    if (!inputId) {
      inputId = document.createElement('input');
      inputId.type = 'hidden';
      inputId.name = 'id';
      inputId.id = 'pedido_id_hidden';
      const form = document.getElementById('pedidoForm');
      if (form) {
        form.appendChild(inputId);
      }
    }
    inputId.value = pedido.id;
    
    // Cambiar acción del formulario a actualizar
    const form = document.getElementById('pedidoForm');
    if (form) {
      form.action = 'php/actualizarPedido.php';
    }
    
    // Cambiar texto del botón
    const btnSubmit = document.querySelector('button[type="submit"]');
    if (btnSubmit) {
      btnSubmit.innerHTML = '💾 Actualizar Pedido';
      btnSubmit.classList.remove('btn-registrar');
      btnSubmit.classList.add('btn-actualizar');
    }
    
    // Mostrar campos dinámicos según el estado actual
    const estado = document.getElementById('estado');
    if (estado) {
      estado.dispatchEvent(new Event('change'));
    }
    
    console.log('✅ Datos del pedido cargados para edición');
    
  } catch (error) {
    console.error('Error al cargar pedido:', error);
    alert('❌ Error al cargar los datos del pedido');
    window.location.href = 'index.html';
  }
}

// Función para cargar trabajadores en los selects
async function cargarTrabajadores() {
  try {
    const response = await fetch('php/obtenerTrabajadoresPorRol.php');
    const data = await response.json();
    
    console.log('Respuesta de trabajadores:', data);
    
    // Llenar select de almacén
    const selectAlmacen = document.getElementById('select_almacen');
    if (selectAlmacen) {
      selectAlmacen.innerHTML = '<option value="">Sin asignar</option>';
      
      if (data.almacen && data.almacen.length > 0) {
        data.almacen.forEach(trabajador => {
          const option = document.createElement('option');
          option.value = trabajador.id;
          option.textContent = `🏭 ${trabajador.nombre} (${trabajador.id_trabajador})`;
          selectAlmacen.appendChild(option);
        });
        console.log(`✅ ${data.almacen.length} trabajadores de almacén cargados`);
      } else {
        console.warn('⚠️ No hay trabajadores de almacén registrados');
      }
    }
    
    // Llenar select de repartidores
    const selectRepartidor = document.getElementById('select_repartidor');
    if (selectRepartidor) {
      selectRepartidor.innerHTML = '<option value="">Sin asignar</option>';
      
      if (data.repartidores && data.repartidores.length > 0) {
        data.repartidores.forEach(trabajador => {
          const option = document.createElement('option');
          option.value = trabajador.id;
          option.textContent = `🚚 ${trabajador.nombre} (${trabajador.id_trabajador})`;
          selectRepartidor.appendChild(option);
        });
        console.log(`✅ ${data.repartidores.length} repartidores cargados`);
      } else {
        console.warn('⚠️ No hay repartidores registrados');
      }
    }
    
  } catch (error) {
    console.error('❌ Error al cargar trabajadores:', error);
  }
}

// Configurar eventos del formulario (SIN ocultar campos de trabajadores)
function configurarFormulario() {
  const estado = document.getElementById("estado");
  const extraCampos = document.getElementById("extraCampos");
  
  if (!estado || !extraCampos) return;
  
  function actualizarCampos() {
    const valor = estado.value;
    extraCampos.innerHTML = "";

    if (valor === "En ruta") {
      extraCampos.innerHTML = `
        <div class="extra-fields info">
          <h3>🚚 Datos de Envío</h3>
          <p style="font-size: 12px; color: #1976D2; margin-bottom: 10px;">
           
          </p>
        </div>`;
    }

    if (valor === "Completado") {
      extraCampos.innerHTML = `
        <div class="extra-fields">
          <h3>✅ Detalles de Entrega</h3>
          <p style="font-size: 12px; color: #666; margin-bottom: 10px;">

          </p>
        </div>`;
    }

    if (valor === "Problemas") {
      extraCampos.innerHTML = `
        <div class="extra-fields warning">
          <h3>⚠️ Reporte de Incidencia</h3>
          <label>Descripción del problema</label>
          <textarea name="incidencia" id="incidencia" rows="3" placeholder="Ej. Dirección incorrecta, cliente ausente..."></textarea>
        </div>`;
    }
  }
  
  estado.addEventListener("change", actualizarCampos);
  
  // Ejecutar una vez al cargar
  actualizarCampos();
}