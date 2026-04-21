#################### Stack Tecnológico Completo

  ------------------ -------------------------- --------------------------
       **Capa**           **Tecnologías**          **Responsabilidad**

     **Servidor**          XAMPP (Apache)         Hosting local, servir
                                                    archivos PHP/HTML

  **Base de Datos**            MySQL               Persistencia datos:
                                                    pedidos, usuarios,
                                                      notificaciones

     **Backend**                PHP               Lógica negocio, CRUD,
                                                   autenticación, APIs

     **Frontend**      HTML5, CSS, JavaScript     UI/UX, drag-and-drop,
                                                      interactividad
  ------------------ -------------------------- --------------------------

########## Proceso de Desarrollo Paso a Paso

A continuación se detalla cada fase del desarrollo en el orden
cronológico real de implementación:

#################### Fase 1: Configuración Servidor XAMPP

**Duración:** 1 día \| **Responsable:** Luis

############################## Tareas realizadas:

1.  Instalación XAMPP Control Panel v3.3.0

2.  Configuración Apache: puerto 80, DocumentRoot en C:/xampp/htdocs

3.  Activación módulos PHP: mysqli, session, json

4.  Configuración MySQL: usuario root, creación base de datos
    \'kanban_easygo\'

5.  Prueba conectividad: phpinfo() y conexión BD exitosa

#################### Fase 2: Estructura HTML + CSS del Tablero Base

**Duración:** 2 días \| **Responsable:** Adrián

############################## Componentes creados:

- **5 columnas Kanban:** Recibido, En Preparación, En Camino, Entregado,
  Problema

- **Tarjetas cortas:** Diseño compacto con ID, cliente, estado visual

- **Barra lateral izquierda:** Logo Easy Go, navegación, perfil usuario

- **Drag-and-drop básico:** HTML5 draggable attribute

############################## Decisiones de diseño CSS:

- Paleta colores: Azul #2563EB (recibido), Amarillo #FCD34D
  (preparación), Verde #059669 (camino), Gris #6B7280 (entregado), Rojo
  #DC2626 (problema)

- Tipografía: Inter para consistencia con identidad Easy Go

- Layout: CSS Grid para columnas, Flexbox para tarjetas

- Responsive: Media queries en 768px y 1024px

#################### Fase 3: Tarjetas Completas (Modal Detallado)

**Duración:** 1.5 días \| **Responsable:** Adrián

Implementación de modal overlay que muestra información completa del
pedido al hacer click en tarjeta corta.

############################## Campos incluidos en tarjeta completa:

- ID pedido, fecha/hora registro

- Datos cliente: nombre, teléfono, email

- Origen y destino completos

- Detalles paquete: peso, dimensiones, descripción

- Estado actual y trabajador asignado

- Historial de cambios de estado

- Botones acción: Editar, Archivar, Cerrar

#################### Fase 4: Formulario Registro Usuarios

**Duración:** 1 día \| **Responsables:** Adrián (HTML/CSS)

Creación de registro.php con formulario para dar de alta nuevos
trabajadores en el sistema.

############################## Campos del formulario:

- Nombre completo (requerido, min 3 caracteres)

- Email (requerido, validación formato)

- Teléfono (requerido, formato 10 dígitos)

- Rol (select: Administrador, Coordinador, Repartidor)

- Contraseña (requerido, min 8 caracteres)

- Confirmar contraseña (debe coincidir)

#################### Fase 5: Implementación JavaScript Tarjetas

**Duración:** 2 días \| **Responsable: Luis**

############################## Funcionalidades implementadas:

- **Renderizado dinámico:** Función renderTarjeta(data) que genera HTML
  de tarjeta desde objeto JSON

<!-- -->

- **Toggle modal:** Click en tarjeta corta abre modal completa, overlay
  cierra

<!-- -->

- **Actualización en vivo:** Función updateTarjeta(id, newData)
  actualiza DOM sin reload

#################### Fase 6: Backend Tarjetas (PHP + MySQL)

**Duración:** 3 días \| **Responsable:** Luis

############################## Creación tabla pedidos en MySQL

############################## API REST backend/tarjetas.php:

- **GET /backend/tarjetas.php:** Obtener todas las tarjetas (JSON array)

- **POST /backend/tarjetas.php:** Crear nueva tarjeta

- **PUT /backend/tarjetas.php?id=X:** Actualizar estado tarjeta

- **DELETE /backend/tarjetas.php?id=X:** Eliminar tarjeta

#################### Fase 7: Backend Trabajadores + Frontend JS

**Duración:** 2 días \| **Responsables:** Luis (backend y JS)

############################## Funcionalidades implementadas:

- API GET /backend/trabajadores.php → lista trabajadores

- API POST /backend/trabajadores.php → registrar trabajador

- Select dinámico en formularios para asignar trabajador a pedido

- CSS para badge de rol (admin=azul, coordinador=verde, repartidor=gris)

#################### Fase 8: Corrección Integración Tarjetas

**Duración:** 1.5 días \| **Responsable:** Luis y Adrian

############################## Problemas identificados y solucionados:

6.  **Bug:** Tarjetas cortas no sincronizaban con modal completa

**Solución:** Usar data-attributes consistentes, single source of truth
en DOM

7.  **Bug:** Render duplicado al hacer múltiples clicks

**Solución:** Debouncing en event listeners, flag isModalOpen

8.  **Bug:** CSS z-index conflictos entre modal y sidebar

**Solución:** Reorganizar capas: sidebar z-index:100, modal z-index:1000

#################### Fase 9: Corrección Drag-and-Drop

**Duración:** 2 días \| **Responsable:** Adrian

############################## Mejoras implementadas:

- **Feedback visual:** Cambio opacidad tarjeta a 0.5 durante drag,
  highlight columna destino

- **Validación transiciones:** Lógica para permitir solo movimientos
  válidos (ej: recibido → preparación, no recibido → entregado)

- **Animación suave:** CSS transition 300ms ease-in-out

- **Ghost image:** setDragImage() con clone de tarjeta

#################### Fase 10: Conectar Tablero con Backend

**Duración:** 1 día \| **Responsables:** Luis

############################## Integración AJAX con PHP:

9.  Carga inicial: fetch() a /backend/tarjetas.php al cargar página

10. Cambio estado: PUT request al drop de tarjeta

11. Crear pedido: POST desde formulario

12. Manejo errores: try-catch con mensajes usuario-friendly

#################### Fases 11-20: Desarrollo Funcionalidades Avanzadas

  ---------- --------------------- ---------------- ------------------------
   **Fase**    **Funcionalidad**     **Duración**       **Tecnologías**

    **11**       Modificación           1 día       JS (inline editing), PHP
             información tarjetas                           (UPDATE)

    **12**    Formulario pedidos        2 días           HTML forms, JS
                   completo                         validation, PHP INSERT,
                                                              SQL

    **13**   Corrección errores y      1.5 días     DevTools debugging, CSS
                    diseño                                 refinement

    **14**   Sistema autenticación      3 días           PHP sessions,
                   completo                             password_hash(),
                                                         HTML/CSS login

    **15**    Corrección control        1 día          JS middleware, PHP
                    accesos                              session checks

    **16**    Sistema archivados        2 días       SQL tabla archivados,
                   completo                           PHP archivar.php, JS
                                                          auto-archive

    **17**   Asignación trabajador      1 día           HTML select, JS
                  en pedidos                           populate, SQL JOIN

    **18**   Actualización tiempo       2 días      JS setInterval polling,
                     real                               PHP long-polling

    **19**      Corrección bugs         3 días          Testing manual,
                   extensiva                         DevTools, console.log
                                                           debugging

    **20**          Sistema             2 días      SQL notificaciones, PHP
                notificaciones                       CRUD, JS toast UI, CSS
                                                           animations

    **21**      Botón WhatsApp         0.5 días      HTML button, WhatsApp
                   redirect                            API URL, CSS icon

    **22**    Corrección errores        1 día        Cross-browser testing,
                    finales                                   UAT

    **23**   Identidad visual Easy     1.5 días       CSS branding, logos,
                      Go                            colores marca, favicons
  ---------- --------------------- ---------------- ------------------------
