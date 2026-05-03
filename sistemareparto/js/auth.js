// Sistema de autenticación y control de acceso
let usuarioActual = null;

// Verificar sesión al cargar la página
async function verificarSesion() {
  try {
    const response = await fetch('php/obtenerUsuario.php');
    const data = await response.json();
    
    if (!data.logged_in) {
      // No hay sesión activa, redirigir al login
      window.location.href = 'login.html';
      return false;
    }
    
    usuarioActual = data.user;
    
    // Configurar interfaz según el usuario
    configurarInterfaz();
    
    return true;
  } catch (error) {
    console.error('Error al verificar sesión:', error);
    window.location.href = 'login.html';
    return false;
  }
}

// Configurar la interfaz según el rol del usuario
function configurarInterfaz() {
  if (!usuarioActual) return;
  
  // Mostrar/ocultar sección de admin
  const adminSection = document.querySelector('.sidebar-admin-section');
  if (adminSection) {
    if (usuarioActual.rol !== 'administrador') {
      adminSection.style.display = 'none';
    } else {
      adminSection.style.display = 'flex';
    }
  }
  
  // Mostrar nombre del usuario en el sidebar
  const sidebarTitle = document.querySelector('.sidebar h2');
  if (sidebarTitle) {
    sidebarTitle.innerHTML = `📦 Panel<br><small style="font-size: 9px; opacity: 0.8; font-weight: normal;">${usuarioActual.nombre_completo}</small>`;
  }
  
  // Agregar botón de cerrar sesión si no existe
  agregarBotonLogout();
}

// Agregar botón de cerrar sesión
function agregarBotonLogout() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;
  
  // Verificar si ya existe
  if (document.getElementById('btn-logout')) return;
  
  const logoutBtn = document.createElement('button');
  logoutBtn.id = 'btn-logout';
  logoutBtn.className = 'sidebar-btn logout-btn';
  logoutBtn.innerHTML = '🚪 Salir';
  logoutBtn.onclick = cerrarSesion;
  logoutBtn.style.marginTop = '10px';
  logoutBtn.style.background = 'rgba(255, 255, 255, 0.25)';
  
  // Siempre agregar al final del sidebar
  // Si hay sección de admin, agregar ahí. Si no, al final del sidebar
  const adminSection = document.querySelector('.sidebar-admin-section');
  const mainButtons = document.querySelector('.sidebar-main-buttons');
  
  if (adminSection && adminSection.style.display !== 'none') {
    // Si el usuario es admin y la sección existe
    adminSection.appendChild(logoutBtn);
  } else if (mainButtons) {
    // Para usuarios no admin, crear una sección simple al final
    let logoutContainer = document.getElementById('logout-container');
    if (!logoutContainer) {
      logoutContainer = document.createElement('div');
      logoutContainer.id = 'logout-container';
      logoutContainer.style.cssText = 'margin-top: auto; padding-top: 15px; border-top: 2px solid rgba(255, 255, 255, 0.3); width: 100%; display: flex; flex-direction: column; align-items: center;';
      sidebar.appendChild(logoutContainer);
    }
    logoutContainer.appendChild(logoutBtn);
  } else {
    sidebar.appendChild(logoutBtn);
  }
}

// Función para cerrar sesión
function cerrarSesion() {
    window.location.href = 'php/logout.php';
}

// Verificar si el usuario es administrador
function esAdministrador() {
  return usuarioActual && usuarioActual.rol === 'administrador';
}

// Proteger página de registro (solo administradores)
function protegerPaginaAdmin() {
  const paginaActual = window.location.pathname;
  
  if (paginaActual.includes('registro.html') && !esAdministrador()) {
    alert('⛔ Acceso denegado. Esta página es solo para administradores.');
    window.location.href = 'index.html';
  }
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', async function() {
  // No verificar sesión si estamos en la página de login
  const paginaActual = window.location.pathname;
  if (paginaActual.includes('login.html')) {
    return;
  }
  
  // Verificar sesión
  const sesionValida = await verificarSesion();
  
  if (sesionValida) {
    // Proteger páginas de admin
    protegerPaginaAdmin();
  }
  
});

// Hacer funciones globales
window.esAdministrador = esAdministrador;
window.cerrarSesion = cerrarSesion;
