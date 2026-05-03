// Sistema de notificaciones
let notificacionesActivas = [];

// Función para cargar notificaciones
async function cargarNotificaciones() {
  try {
    const response = await fetch('php/obtenerNotificaciones.php?t=' + Date.now());
    const data = await response.json();
    
    console.log('Notificaciones recibidas:', data);
    
    notificacionesActivas = data.notificaciones || [];
    const noLeidas = data.no_leidas || 0;
    
    // Actualizar badge
    actualizarBadge(noLeidas);
    
    // Si el panel está abierto, actualizar el contenido
    const panel = document.getElementById('notificationsPanel');
    if (panel && panel.classList.contains('active')) {
      mostrarNotificacionesEnPanel();
    }
    
    console.log(`📬 ${noLeidas} notificaciones no leídas`);
    
  } catch (error) {
    console.error('Error al cargar notificaciones:', error);
  }
}

// Función para actualizar el badge
function actualizarBadge(noLeidas) {
  const badge = document.getElementById('notification-count');
  if (badge) {
    if (noLeidas > 0) {
      badge.textContent = noLeidas > 99 ? '99+' : noLeidas;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }
}

// Función para mostrar/ocultar panel de notificaciones
function toggleNotificaciones() {
  console.log('toggleNotificaciones llamado');
  
  const panel = document.getElementById('notificationsPanel');
  
  if (!panel) {
    console.error('❌ Panel de notificaciones no encontrado en el DOM');
    return;
  }
  
  if (panel.classList.contains('active')) {
    console.log('Cerrando panel');
    panel.classList.remove('active');
  } else {
    console.log('Abriendo panel');
    panel.classList.add('active');
    mostrarNotificacionesEnPanel();
    
    // Marcar como leídas después de 2 segundos
    setTimeout(marcarComoLeidas, 2000);
  }
}

// Función para mostrar notificaciones en el panel
function mostrarNotificacionesEnPanel() {
  const body = document.getElementById('notificationsBody');
  
  console.log('Mostrando notificaciones en panel, total:', notificacionesActivas.length);
  
  if (!body) {
    console.error('❌ notificationsBody no encontrado');
    return;
  }
  
  if (notificacionesActivas.length === 0) {
    body.innerHTML = '<div class="no-notifications">No hay notificaciones</div>';
    return;
  }
  
  body.innerHTML = '';
  
  notificacionesActivas.forEach(notif => {
    const item = document.createElement('div');
    item.classList.add('notification-item', `tipo-${notif.tipo}`);
    
    if (notif.leida == 1) {
      item.classList.add('leida');
    }
    
    const tipoTexto = notif.tipo === 'nuevo_pedido' ? '📦 Nuevo Pedido' : '🔄 Cambio de Estado';
    const fecha = formatearFecha(notif.fecha_creacion);
    
    item.innerHTML = `
      <div class="notification-tipo">${tipoTexto}</div>
      <div class="notification-mensaje">${notif.mensaje}</div>
      <div class="notification-fecha">${fecha}</div>
    `;
    
    // Click para ir al tablero
    item.onclick = function() {
      if (window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/')) {
        toggleNotificaciones();
      } else {
        window.location.href = 'index.html';
      }
    };
    
    body.appendChild(item);
  });
  
  console.log('✅ Notificaciones mostradas en el panel');
}

// Función para marcar notificaciones como leídas
async function marcarComoLeidas() {
  try {
    await fetch('php/marcarNotificacionesLeidas.php');
    setTimeout(cargarNotificaciones, 500);
  } catch (error) {
    console.error('Error al marcar como leídas:', error);
  }
}

// Función para limpiar notificaciones - SIN CONFIRMACIÓN
async function limpiarNotificaciones() {
  console.log('Limpiando notificaciones...');
  
  try {
    const response = await fetch('php/limpiarNotificaciones.php');
    const data = await response.json();
    
    if (data.success) {
      // Mostrar feedback visual temporal
      mostrarFeedback('🗑️ Notificaciones eliminadas');
      
      // Recargar notificaciones
      await cargarNotificaciones();
      mostrarNotificacionesEnPanel();
    }
  } catch (error) {
    console.error('Error al limpiar notificaciones:', error);
    mostrarFeedback('❌ Error al eliminar', 'error');
  }
}

// Función simple para mostrar feedback temporal
function mostrarFeedback(mensaje, tipo = 'success') {
  const feedback = document.createElement('div');
  feedback.className = 'feedback-toast';
  feedback.style.cssText = `
    position: fixed;
    top: 20px;
    right: 420px;
    background: ${tipo === 'error' ? '#f44336' : '#4CAF50'};
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 10000;
    font-size: 14px;
    font-weight: 600;
    animation: slideIn 0.3s ease;
  `;
  feedback.textContent = mensaje;
  
  document.body.appendChild(feedback);
  
  setTimeout(() => {
    feedback.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      if (feedback.parentElement) {
        feedback.remove();
      }
    }, 300);
  }, 2000);
}

// Función para formatear fecha
function formatearFecha(fechaStr) {
  const fecha = new Date(fechaStr);
  const ahora = new Date();
  const diff = Math.floor((ahora - fecha) / 1000);
  
  if (diff < 60) return 'Hace un momento';
  if (diff < 3600) return `Hace ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `Hace ${Math.floor(diff / 3600)} h`;
  if (diff < 172800) return 'Ayer';
  
  return fecha.toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Cerrar panel al hacer clic fuera
document.addEventListener('click', function(e) {
  const panel = document.getElementById('notificationsPanel');
  const btn = document.getElementById('btn-notificaciones');
  
  if (panel && btn && !panel.contains(e.target) && !btn.contains(e.target)) {
    panel.classList.remove('active');
  }
});

// Hacer funciones globales
window.toggleNotificaciones = toggleNotificaciones;
window.limpiarNotificaciones = limpiarNotificaciones;
window.cargarNotificaciones = cargarNotificaciones;

// Cargar notificaciones al iniciar
document.addEventListener('DOMContentLoaded', function() {
  console.log('🔔 Inicializando sistema de notificaciones...');
  cargarNotificaciones();
  
  // Actualizar cada 5 segundos
  setInterval(cargarNotificaciones, 5000);
  
  console.log('✅ Sistema de notificaciones cargado - Auto-actualización cada 5 segundos');
});

// También cargar inmediatamente si el DOM ya está listo
if (document.readyState === 'loading') {
  // Aún está cargando
} else {
  console.log('🔔 DOM listo, cargando notificaciones...');
  cargarNotificaciones();
  setInterval(cargarNotificaciones, 5000);
}

console.log('✅ Sistema de notificaciones inicializado');