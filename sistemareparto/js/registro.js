// Cargar trabajadores al iniciar
document.addEventListener('DOMContentLoaded', function() {
  cargarTrabajadores();
  
  // Auto-llenar fecha de ingreso con la fecha actual
  const fechaInput = document.getElementById('fecha_ingreso');
  if (fechaInput && !fechaInput.value) {
    const hoy = new Date().toISOString().split('T')[0];
    fechaInput.value = hoy;
  }
});

// Manejo del formulario
document.getElementById('trabajadorForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  // Limpiar errores previos
  limpiarErrores();
  
  // Validar formulario
  if (!validarFormulario()) {
    return;
  }
  
  // Recopilar datos del formulario
  const formData = new FormData(this);
  
  // Mostrar indicador de carga en el botón
  const btnSubmit = this.querySelector('button[type="submit"]');
  const textoOriginal = btnSubmit.innerHTML;
  btnSubmit.innerHTML = '⏳ Registrando...';
  btnSubmit.disabled = true;
  
  try {
    const response = await fetch('php/registrarTrabajador.php', {
      method: 'POST',
      body: formData
    });
    
    const result = await response.json();
    
    if (result.success) {
      // Mostrar notificación de éxito
      mostrarFeedbackRegistro('✅ Trabajador registrado exitosamente', 'success');
      
      // Limpiar formulario
      this.reset();
      
      // Recargar la lista
      cargarTrabajadores();
      
      // Auto-llenar fecha de ingreso nuevamente
      const fechaInput = document.getElementById('fecha_ingreso');
      const hoy = new Date().toISOString().split('T')[0];
      fechaInput.value = hoy;
      
    } else {
      mostrarFeedbackRegistro('❌ Error: ' + result.message, 'error');
    }
  } catch (error) {
    console.error('Error:', error);
    mostrarFeedbackRegistro('❌ Error al registrar el trabajador', 'error');
  } finally {
    // Restaurar botón
    btnSubmit.innerHTML = textoOriginal;
    btnSubmit.disabled = false;
  }
});

// Función para mostrar feedback temporal
function mostrarFeedbackRegistro(mensaje, tipo = 'success') {
  const feedback = document.createElement('div');
  feedback.className = 'feedback-toast-registro';
  feedback.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${tipo === 'error' ? '#f44336' : '#4CAF50'};
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 10000;
    font-size: 15px;
    font-weight: 600;
    animation: slideIn 0.3s ease;
    max-width: 400px;
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
  }, 3000);
}

// Función para validar el formulario
function validarFormulario() {
  let isValid = true;
  
  // Campos requeridos
  const camposRequeridos = [
    { id: 'nombre', nombre: 'Nombre' },
    { id: 'apellido_paterno', nombre: 'Apellido Paterno' },
    { id: 'apellido_materno', nombre: 'Apellido Materno' },
    { id: 'id_trabajador', nombre: 'ID de Trabajador' },
    { id: 'rfc', nombre: 'RFC' },
    { id: 'email', nombre: 'Correo Electrónico' },
    { id: 'rol', nombre: 'Rol' },
    { id: 'admin_password', nombre: 'Contraseña de Administrador' }
  ];
  
  camposRequeridos.forEach(campo => {
    const input = document.getElementById(campo.id);
    if (!input.value.trim()) {
      mostrarError(campo.id, `${campo.nombre} es requerido`);
      isValid = false;
    }
  });
  
  // Validar formato de email
  const emailInput = document.getElementById('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value && !emailRegex.test(emailInput.value)) {
    mostrarError('email', 'Ingrese un correo electrónico válido');
    isValid = false;
  }
  
  // Validar RFC (13 caracteres)
  const rfcInput = document.getElementById('rfc');
  if (rfcInput.value && rfcInput.value.length !== 13) {
    mostrarError('rfc', 'El RFC debe tener 13 caracteres');
    isValid = false;
  }
  
  return isValid;
}

// Función para mostrar errores
function mostrarError(campoId, mensaje) {
  const input = document.getElementById(campoId);
  const errorSpan = document.getElementById(campoId + 'Error');
  
  if (input) {
    input.classList.add('error');
  }
  
  if (errorSpan) {
    errorSpan.textContent = mensaje;
    errorSpan.classList.add('show');
  }
}

// Función para limpiar errores
function limpiarErrores() {
  document.querySelectorAll('.form-group input, .form-group select').forEach(el => {
    el.classList.remove('error');
  });
  
  document.querySelectorAll('.error-message').forEach(el => {
    el.textContent = '';
    el.classList.remove('show');
  });
}

// Función para cargar trabajadores
async function cargarTrabajadores() {
  const container = document.getElementById('listaTrabajadores');
  
  try {
    const response = await fetch('php/obtenerTrabajadores.php');
    const trabajadores = await response.json();
    
    if (trabajadores.error) {
      container.innerHTML = `<p class="no-data">Error al cargar: ${trabajadores.error}</p>`;
      return;
    }
    
    if (trabajadores.length === 0) {
      container.innerHTML = '<p class="no-data">No hay trabajadores registrados aún.</p>';
      return;
    }
    
    container.innerHTML = '';
    
    trabajadores.forEach(trabajador => {
      const iniciales = obtenerIniciales(trabajador.nombre, trabajador.apellido_paterno);
      
      const card = document.createElement('div');
      card.classList.add('trabajador-card');
      
      card.innerHTML = `
        <div class="trabajador-header">
          <div class="avatar">${iniciales}</div>
          <div class="trabajador-info">
            <h3>${trabajador.nombre} ${trabajador.apellido_paterno}</h3>
            <span class="id">${trabajador.id_trabajador}</span>
          </div>
        </div>
        <div class="trabajador-details">
          <p><strong>RFC:</strong> ${trabajador.rfc}</p>
          <p><strong>Email:</strong> ${trabajador.email}</p>
          <p><strong>Rol:</strong> <span class="rol-badge">${trabajador.rol}</span></p>
          ${trabajador.telefono ? `<p><strong>Teléfono:</strong> ${trabajador.telefono}</p>` : ''}
          ${trabajador.fecha_ingreso ? `<p><strong>Ingreso:</strong> ${formatearFecha(trabajador.fecha_ingreso)}</p>` : ''}
        </div>
      `;
      
      container.appendChild(card);
    });
    
  } catch (error) {
    console.error('Error al cargar trabajadores:', error);
    container.innerHTML = '<p class="no-data">Error al cargar los trabajadores.</p>';
  }
}

// Función para obtener iniciales
function obtenerIniciales(nombre, apellido) {
  const inicial1 = nombre ? nombre.charAt(0).toUpperCase() : '';
  const inicial2 = apellido ? apellido.charAt(0).toUpperCase() : '';
  return inicial1 + inicial2;
}

// Función para formatear fecha
function formatearFecha(fecha) {
  if (!fecha) return '';
  const opciones = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(fecha + 'T00:00:00').toLocaleDateString('es-MX', opciones);
}

// Validación en tiempo real para RFC
document.getElementById('rfc').addEventListener('input', function(e) {
  this.value = this.value.toUpperCase();
});