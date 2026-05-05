let archivadosGlobal = [];

document.addEventListener('DOMContentLoaded', function() {
  cargarArchivados();
  
  // Configurar filtros
  document.getElementById('buscar').addEventListener('input', filtrarArchivados);
  document.getElementById('filtro-fecha').addEventListener('change', filtrarArchivados);
});

async function cargarArchivados() {
  try {
    const response = await fetch('php/obtenerArchivados.php');
    const archivados = await response.json();
    
    console.log('Archivados recibidos:', archivados);
    
    archivadosGlobal = archivados;
    
    // Actualizar estadísticas
    actualizarEstadisticas(archivados);
    
    // Mostrar archivados
    mostrarArchivados(archivados);
    
  } catch (error) {
    console.error('Error al cargar archivados:', error);
    document.getElementById('lista-archivados').innerHTML = 
      '<p class="no-data">Error al cargar los archivados</p>';
  }
}

function mostrarArchivados(archivados) {
  const container = document.getElementById('lista-archivados');
  
  if (archivados.length === 0) {
    container.innerHTML = '<p class="no-data">No hay pedidos archivados aún</p>';
    return;
  }
  
  container.innerHTML = '';
  
  archivados.forEach(pedido => {
    const card = document.createElement('div');
    card.classList.add('pedido-archivado');
    
    const fechaArchivado = formatearFecha(pedido.fecha_archivado);
    
    card.innerHTML = `
      <div class="pedido-header">
        <span class="pedido-id">${pedido.id_pedido}</span>
        <div class="fecha-archivado">
          📁 ${fechaArchivado}<br>
          <small>por ${pedido.archivado_por || 'Sistema'}</small>
        </div>
      </div>
      
      <div class="pedido-info">
        <div class="info-row">
          <span class="info-label">Cliente:</span>
          <span class="info-value">${pedido.cliente}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Dirección:</span>
          <span class="info-value">${truncarTexto(pedido.direccion, 40)}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Categoría:</span>
          <span class="info-value">${pedido.categoria}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Estado Final:</span>
          <span class="badge-completado">${pedido.estado_final}</span>
        </div>
        ${pedido.tiempo_total ? `
        <div class="info-row">
          <span class="info-label">Tiempo Total:</span>
          <span class="info-value">${pedido.tiempo_total}</span>
        </div>
        ` : ''}
        ${pedido.firma ? `
        <div class="info-row">
          <span class="info-label">Firma:</span>
          <span class="info-value">${pedido.firma}</span>
        </div>
        ` : ''}
      </div>
    `;
    
    container.appendChild(card);
  });
}

function actualizarEstadisticas(archivados) {
  const totalArchivados = archivados.length;
  
  // Contar archivados de hoy
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  
  const archivadosHoy = archivados.filter(p => {
    const fechaArchivado = new Date(p.fecha_archivado);
    fechaArchivado.setHours(0, 0, 0, 0);
    return fechaArchivado.getTime() === hoy.getTime();
  }).length;
  
  document.getElementById('total-archivados').textContent = totalArchivados;
  document.getElementById('total-hoy').textContent = archivadosHoy;
}

function filtrarArchivados() {
  const busqueda = document.getElementById('buscar').value.toLowerCase();
  const filtroFecha = document.getElementById('filtro-fecha').value;
  
  let archivadosFiltrados = archivadosGlobal;
  
  // Filtrar por búsqueda
  if (busqueda) {
    archivadosFiltrados = archivadosFiltrados.filter(p => 
      p.id_pedido.toLowerCase().includes(busqueda) ||
      p.cliente.toLowerCase().includes(busqueda) ||
      p.direccion.toLowerCase().includes(busqueda)
    );
  }
  
  // Filtrar por fecha
  if (filtroFecha !== 'todos') {
    const ahora = new Date();
    archivadosFiltrados = archivadosFiltrados.filter(p => {
      const fechaArchivado = new Date(p.fecha_archivado);
      
      switch(filtroFecha) {
        case 'hoy':
          return fechaArchivado.toDateString() === ahora.toDateString();
        case 'semana':
          const semanaAtras = new Date(ahora.getTime() - 7 * 24 * 60 * 60 * 1000);
          return fechaArchivado >= semanaAtras;
        case 'mes':
          const mesAtras = new Date(ahora.getTime() - 30 * 24 * 60 * 60 * 1000);
          return fechaArchivado >= mesAtras;
        default:
          return true;
      }
    });
  }
  
  mostrarArchivados(archivadosFiltrados);
}

function formatearFecha(fechaStr) {
  const fecha = new Date(fechaStr);
  const opciones = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return fecha.toLocaleDateString('es-MX', opciones);
}

function truncarTexto(texto, maxLength) {
  if (!texto) return '';
  return texto.length > maxLength ? texto.substring(0, maxLength) + '...' : texto;
}