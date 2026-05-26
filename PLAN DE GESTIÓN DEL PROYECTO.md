# PLAN DE GESTIÓN DEL PROYECTO (PGP)

**Plataforma de Gestión de Proyectos Estilo Kanban**  
**Empresa Edwin - Sistemas de Paquetería y Logística**

**Conforme a ISO/IEC/IEEE 16326:2009(E)**

---

## FRONT MATTER

### Portada

| Campo | Detalle |
|-------|---------|
| **Nombre del Proyecto** | Plataforma de Gestión de Proyectos Estilo Kanban |
| **Cliente** | Empresa Edwin (Paquetería y Logística) |
| **Fecha de Emisión** | 22 Mayo 2026 |
| **Versión** | 1.0 (Final) |
| **Organización Emisora** | Astra Company |
| **Identificador del Documento** | PMP-KANBAN-2026-V1.0 |

---

### Página de Firmas

| Rol | Nombre | Firma | Fecha |
|-----|--------|-------|-------|
| Director del Proyecto | Víctor Manuel González Ruiz | Aprobado | 22/05/2026 |
| Coordinador Técnico | Hernández Jesús David | Aprobado | 22/05/2026 |
| Desarrollador Principal (Backend) | Hernández Segundo Adrián | Aprobado | 22/05/2026 |
| Desarrollador Principal (Frontend) | Martínez Julián Luis Uriel | Aprobado | 22/05/2026 |

---

### Historial de Cambios

| Versión | Fecha | Autor | Descripción del Cambio | Páginas Afectadas |
|---------|-------|-------|------------------------|-------------------|
| 0.1 | 01/09/2025 | Víctor | Borrador inicial | Todas |
| 0.5 | 15/12/2025 | Víctor | Después del Sprint 8 (Fase de Documentación) | 1-30 |
| 0.8 | 27/02/2026 | Víctor | Después del Sprint 10 (Fase de Desarrollo) | 1-35 |
| 1.0 | 22/05/2026 | Víctor | Versión final - Proyecto completado | Todas |

---

### Prefacio

Este Plan de Gestión del Proyecto (PGP) ha sido desarrollado de acuerdo con **ISO/IEC/IEEE 16326:2009(E)** para documentar la planificación, ejecución, monitoreo, control y cierre del proyecto Plataforma de Gestión de Proyectos Estilo Kanban.

**Alcance de este PGP:** Este documento describe el enfoque que se utilizará para gestionar el proyecto. Define el contexto del proyecto, las actividades de trabajo, el cronograma, los recursos, los presupuestos, los procesos y los procedimientos utilizados para gestionar y controlar el proyecto.

**Audiencia Destinataria:**
- Miembros del equipo del proyecto (4 desarrolladores)
- Cliente (Empresa Edwin)
- Profesor del curso
- Personal de aseguramiento de calidad

**Relación con Otros Documentos:**
- Este PGP referencia la Especificación de Requisitos de Software (ERS)
- Es complementado por el Plan de Desarrollo de Software (PDS)

---

### Tabla de Contenido

| Cláusula | Título | Página |
|----------|--------|-------|
| 1 | Visión General del Proyecto | 4 |
| 2 | Referencias | 7 |
| 3 | Definiciones | 8 |
| 4 | Contexto del Proyecto | 9 |
| 5 | Planificación del Proyecto | 13 |
| 6 | Evaluación y Control del Proyecto | 17 |
| 7 | Entrega del Producto | 20 |
| 8 | Planes de Procesos de Apoyo | 21 |
| 9 | Planes Adicionales | 25 |

---

### Lista de Figuras

| Figura | Título | Página |
|--------|-------|-------|
| 1 | Estructura Organizacional del Proyecto | 10 |
| 2 | Calendario de Sprints (Sprints 1-16) | 15 |
| 3 | Estructura de Desglose de Trabajo (EDT) | 14 |

---

### Lista de Tablas

| Tabla | Título | Página |
|-------|-------|-------|
| 1 | Entregables del Proyecto | 5 |
| 2 | Resumen de Cronograma y Presupuesto | 6 |
| 3 | Roles y Responsabilidades | 11 |
| 4 | Asignación de Recursos por Sprint | 16 |
| 5 | Registro de Riesgos | 19 |

---

## 1. VISIÓN GENERAL DEL PROYECTO

### 1.1 Resumen del Proyecto

#### 1.1.1 Propósito, Alcance y Objetivos

**Propósito:** El propósito de este proyecto es desarrollar una plataforma web de gestión de proyectos estilo Kanban para la Empresa Edwin, una empresa de servicios de paquetería y logística. El sistema transformará el flujo de trabajo de gestión de paquetes en un tablero digital intuitivo donde cada envío se representa como una tarjeta que se mueve a través de etapas personalizables (Recibido, En Almacén, En Ruta, Entregado, Problema).

**Alcance:**

*Dentro del alcance:*
- Tablero Kanban digital con funcionalidad de arrastrar y soltar
- Control de acceso basado en roles (Supervisor, Operario de Almacén, Repartidor)
- Notificaciones en tiempo real para cambios críticos
- Historial de auditoría completo para cada paquete
- Sistema de chat interno por tablero o paquete
- Sincronización de datos en tiempo real

*Fuera del alcance:*
- Aplicaciones móviles nativas (Fase 2)
- Integración con sistemas externos de rastreo GPS (Fase 3)
- Optimización de rutas basada en IA (Mejora futura)

**Objetivos:**

| ID | Objetivo | Criterio de Éxito |
|----|----------|-------------------|
| O1 | Implementar tablero Kanban digital | Arrastrar y soltar funcional con 5 columnas |
| O2 | Establecer seguridad basada en roles | 4 roles con permisos distintos |
| O3 | Módulo de notificaciones en tiempo real | Alertas entregadas en menos de 2 segundos |
| O4 | Historial de auditoría completo | Trazabilidad para cada cambio de estado |
| O5 | Sistema de chat interno | Comunicación directa entre empleados |
| O6 | Gestión de concurrencia | Sin conflictos de datos con múltiples usuarios |

**Relación con Otros Proyectos:** Este proyecto es un sistema independiente pero está diseñado para futura integración con el sistema ERP existente de la empresa y la infraestructura de rastreo GPS.

**Referencia a Requisitos:** Los requisitos oficiales del producto están documentados en la Especificación de Requisitos de Software (ERS), que incluye 20 requisitos funcionales y 15 requisitos no funcionales.

---

#### 1.1.2 Suposiciones y Restricciones

**Suposiciones:**

| ID | Suposición |
|----|------------|
| A1 | El equipo tiene acceso a computadoras de desarrollo con Windows |
| A2 | Todos los miembros del equipo tienen conocimientos básicos de PHP, MySQL, HTML, CSS, JavaScript |
| A3 | El cliente está disponible para sesiones de retroalimentación al menos una vez por sprint |
| A4 | Se utilizará WampServer o XAMPP para el desarrollo local |
| A5 | Se utilizará GitHub para el control de versiones |
| A6 | El equipo puede dedicar aproximadamente 10 horas por semana por persona |

**Restricciones:**

| ID | Restricción | Impacto |
|----|-------------|---------|
| C1 | **Cronograma:** El proyecto debe completarse antes del 22 de Mayo de 2026 | Fecha de entrega final fija |
| C2 | **Presupuesto:** Sin presupuesto monetario (proyecto académico) | Todas las herramientas deben ser gratuitas/de código abierto |
| C3 | **Recursos:** Equipo de 4 personas (una persona se fue, carga de trabajo redistribuida) | Capacidad reducida |
| C4 | **Tecnología:** Debe usar PHP/MySQL con WampServer/XAMPP | No se permiten Node.js o stacks avanzados |
| C5 | **Disponibilidad del Personal:** Los miembros del equipo tienen clases, trabajos, otros compromisos | ~50% de capacidad efectiva |
| C6 | **Disponibilidad del Cliente:** Disponibilidad limitada para retroalimentación | Posibles retrasos en los ciclos de retroalimentación |

**Exclusiones:**
- No hay aplicaciones móviles
- No hay despliegue en la nube de producción (solo despliegue local)
- No hay funciones avanzadas de IA
- No hay integración con API logísticas externas

---

#### 1.1.3 Entregables del Proyecto

**Entregables al Adquiriente (Cliente/Profesor):**

| ID | Entregable | Fecha de Entrega | Formato | Ubicación |
|----|------------|------------------|--------|-----------|
| D1 | Product Backlog (173 PBIs) | 12 Dic 2025 | Excel/Markdown | GitHub |
| D2 | Especificación de Requisitos de Software (20 RF + 15 RNF) | 12 Dic 2025 | Markdown | GitHub |
| D3 | Diagramas de Casos de Uso | 12 Dic 2025 | PNG | GitHub |
| D4 | Diagrama de Estados | 12 Dic 2025 | PNG | GitHub |
| D5 | Diagrama de Componentes | 12 Dic 2025 | PNG | GitHub |
| D6 | Código Fuente (43 archivos, 6,114 líneas) | 22 Mayo 2026 | PHP/HTML/JS | GitHub |
| D7 | Base de Datos (sistemareparto.sql) | 22 Mayo 2026 | SQL | GitHub |
| D8 | Reporte de Pruebas (pruebas.md) | 22 Mayo 2026 | Markdown | GitHub |
| D9 | Reporte de Revisión de Código (codereview.md) | 22 Mayo 2026 | Markdown | GitHub |
| D10 | Plan de Gestión del Proyecto (este documento) | 22 Mayo 2026 | PDF/Markdown | GitHub |
| D11 | CHANGELOG.md | 22 Mayo 2026 | Markdown | GitHub |
| D12 | README.md | 22 Mayo 2026 | Markdown | GitHub |

**Entregables Internos (dentro del equipo del proyecto):**

| ID | Entregable | Uso |
|----|------------|-----|
| I1 | Documentos de Planificación de Sprint | Alineación del equipo |
| I2 | Registros de Daily Scrum | Seguimiento del progreso |
| I3 | Reportes de Revisión de Sprint | Retroalimentación del cliente |
| I4 | Reportes de Retrospectiva de Sprint | Mejora de procesos |
| I5 | KPIs y métricas | Medición del rendimiento |

---

#### 1.1.4 Resumen de Cronograma y Presupuesto

**Resumen del Cronograma (Sprints 1-16):**

| Fase | Sprints | Duración | Actividades Clave |
|------|---------|----------|-------------------|
| Fase 1: Planificación | 1-4 | Sep-Oct 2025 (8 semanas) | Requisitos, backlog, diagramas |
| Fase 2: Arquitectura | 5-8 | Oct-Dic 2025 (8 semanas) | Diseño, componentes, base de datos |
| *Pausa* | - | *15 Dic-31 Ene 2026* | *Descanso de fin de año* |
| Fase 3: Desarrollo | 9-12 | Feb-Mar 2026 (8 semanas) | Codificación backend y frontend |
| Fase 4: Integración | 13-14 | Abr 2026 (4 semanas) | Integración, seguridad |
| Fase 5: Pruebas y Entrega | 15-16 | Mayo 2026 (4 semanas) | Pruebas, documentación, entrega |

**Duración Total:** 32 semanas (incluyendo pausa de 6.5 semanas)

**Resumen del Presupuesto:**

| Categoría | Monto | Notas |
|-----------|-------|-------|
| Personal | $0 (académico) | Trabajo voluntario de estudiantes |
| Licencias de Software | $0 | Herramientas gratuitas/de código abierto |
| Hardware | $0 | Computadoras personales |
| Alojamiento | $0 | Solo WampServer local |
| **Total** | **$0** | Proyecto académico |

---

### 1.2 Evolución del Plan

El PGP es un documento vivo que se actualizará durante todo el ciclo de vida del proyecto.

**Mecanismos de Actualización:**

| Tipo de Actualización | Frecuencia | Responsable | Aprobación |
|----------------------|------------|-------------|------------|
| Programada | Cada 2 semanas (después de la Revisión de Sprint) | Director del Proyecto | Consenso del equipo |
| No programada | Según sea necesario (después de cambios significativos) | Director del Proyecto | Junta de Control de Cambios |

**Métodos de Difusión:**
- PGP almacenado en el repositorio de GitHub (`docs/PMP.md`)
- Notificaciones de cambios a través del grupo de WhatsApp
- Seguimiento de versiones mediante commits de Git

**Gestión de Configuración:**
- Línea base inicial establecida el 01/09/2025
- Cambios posteriores rastreados mediante números de versión (0.1 → 1.0)
- Registro de historial de cambios mantenido (ver Front Matter)

---

## 2. REFERENCIAS

| ID | Documento | Referencia | Ubicación |
|----|-----------|-----------|----------|
| R1 | ISO/IEC/IEEE 16326:2009(E) | Ingeniería de sistemas y software - PGP | IEEE Xplore |
| R2 | ISO/IEC 12207:2008 | Procesos del ciclo de vida del software | IEEE Xplore |
| R3 | Especificación de Requisitos de Software | ERS-KANBAN-V1.0 | `docs/RF.md`, `docs/RNF.md` |
| R4 | Product Backlog | PB-KANBAN-V1.0 | `docs/backlog.md` |
| R5 | Reporte de Pruebas | TR-KANBAN-V1.0 | `docs/pruebas.md` |
| R6 | Reporte de Revisión de Código | CR-KANBAN-V1.0 | `docs/codereview.md` |
| R7 | Repositorio de GitHub | URL | https://github.com/LovelyStoOk/PLATAFORMA-DE-GESTI-N-DE-PROYECTOS-ESTILO-KANBAN |

---

## 3. DEFINICIONES

| Término | Definición |
|---------|------------|
| **PBI** | Product Backlog Item - Elemento del backlog del producto |
| **RF** | Requerimiento Funcional - Requisito funcional del sistema |
| **RNF** | Requerimiento No Funcional - Atributo de calidad o restricción |
| **Sprint** | Iteración con tiempo limitado de 2 semanas |
| **Velocity** | Puntos de historia completados por sprint |
| **Throughput** | PBIs completados por semana |
| **Cycle Time** | Tiempo desde el inicio hasta la finalización de una tarea |
| **MoSCoW** | Método de priorización: Must, Should, Could, Won't |
| **DoD** | Definition of Done - Criterios de aceptación para PBIs |
| **UAT** | User Acceptance Testing - Pruebas de aceptación del usuario |
| **WampServer** | Entorno de desarrollo para Windows (Apache, MySQL, PHP) |
| **XAMPP** | Entorno de desarrollo multiplataforma |
| **MVP** | Minimum Viable Product - Producto Mínimo Viable |
| **WBS** | Work Breakdown Structure - Estructura de Desglose de Trabajo |
| **SEMP** | Systems Engineering Management Plan - Plan de Gestión de Ingeniería de Sistemas |
| **SDP** | Software Development Plan - Plan de Desarrollo de Software |

---

## 4. CONTEXTO DEL PROYECTO

### 4.1 Modelo de Proceso

El proyecto sigue un modelo de proceso **Scrum Ágil** con sprints de 2 semanas.

**Hitos Principales:**

| Hito | Sprint | Fecha | Entregable |
|------|--------|-------|------------|
| M1 | Sprint 4 | 24 Oct 2025 | Línea base de requisitos |
| M2 | Sprint 8 | 12 Dic 2025 | Línea base de arquitectura (HITO) |
| M3 | Sprint 12 | 27 Mar 2026 | Desarrollo completado |
| M4 | Sprint 14 | 24 Abr 2026 | Integración completada |
| M5 | Sprint 16 | 22 May 2026 | Entrega del proyecto |

**Estándares Técnicos:**

| Estándar | Aplicación |
|----------|------------|
| PSR-12 | Estilo de codificación PHP |
| W3C | Cumplimiento de HTML/CSS |
| OWASP Top 10 | Requisitos de seguridad |
| MySQL 5.7+ | Compatibilidad de base de datos |

**Adaptación del Proceso:**
- Los Daily Scrums fueron reemplazados por comunicación asíncrona vía WhatsApp (debido a la disponibilidad del equipo)
- Las Revisiones de Sprint se realizan quincenalmente
- Las Retrospectivas se realizan después de cada sprint

---

### 4.2 Plan de Mejora de Procesos

**Calendario de Evaluación:**

| Actividad | Frecuencia | Responsable |
|-----------|------------|-------------|
| Retrospectiva de Sprint | Después de cada sprint | Equipo |
| Revisión de Código | Cada Pull Request | Coordinador Técnico |
| Escaneo de Seguridad | Al final de cada fase | Coordinador Técnico |
| Retroalimentación del Cliente | Revisión de Sprint | Director del Proyecto |

**Áreas de Mejora Identificadas:**

| Problema | Causa Raíz | Acción de Mejora | Sprint |
|----------|------------|------------------|--------|
| Retrasos en comunicación | Sin horario fijo | Establecer plazo de reporte diario a las 9:00 AM | Sprint 1 |
| Dependencias poco claras | Mala planificación | Matriz de dependencias en Planificación de Sprint | Sprint 2 |
| Entrega tardía de código | Sin responsabilidad clara | Definir DoD claro con aprobaciones | Sprint 3 |
| Vulnerabilidades de seguridad | Sin escaneo temprano | Integrar escaneo con OpenCode | Sprint 14 |

---

### 4.3 Plan de Infraestructura

**Entorno de Desarrollo:**

| Componente | Especificación |
|------------|----------------|
| Hardware | Computadoras personales (Windows 10/11) |
| Sistema Operativo | Windows 10/11 |
| Servidor Web | WampServer (Apache 2.4, PHP 8.2) |
| Base de Datos | MySQL 5.7 / MariaDB 10.4 |
| Red | Localhost (sin alojamiento externo) |
| Control de Versiones | Git + GitHub |
| Gestión de Proyectos | GitHub Projects, Trello |
| Comunicación | WhatsApp, Microsoft Teams |

**Instalaciones:**
- Trabajo remoto (cada miembro del equipo trabaja desde su propia ubicación)
- No se requiere espacio de oficina físico
- Reuniones virtuales a través de Microsoft Teams

**Seguridad Física:**
- Computadoras personales aseguradas por los miembros del equipo
- No hay activos físicos específicos del proyecto

---

### 4.4 Métodos, Herramientas y Técnicas

| Actividad | Metodología | Herramientas | Técnicas |
|----------|-------------|--------------|----------|
| Requisitos | Historias de usuario, Casos de uso | GitHub Issues | Priorización MoSCoW |
| Diseño | Diagramas UML | Draw.io, Mermaid | Diseño basado en componentes |
| Codificación | Ágil, TDD (parcial) | VS Code, Git | Programación en pares (ocasional) |
| Pruebas | Manual + automatizado (básico) | OpenCode, Manual | Pruebas unitarias, pruebas de integración |
| Documentación | Markdown | GitHub, Bloc de notas | Formato Markdown |
| Revisión de Código | Revisión por pares | GitHub PR, OpenCode | Análisis estático |
| Seguridad | Escaneo estático | OpenCode | Lista de verificación OWASP |
| Gestión de Proyectos | Scrum | GitHub Projects, Trello | Gráficos de avance, KPIs |

**Lenguajes y Notaciones:**
- **Programación:** PHP 8.2, JavaScript (ES6), HTML5, CSS3
- **Lenguaje de Consulta:** SQL (dialecto MySQL)
- **Modelado:** UML (diagramas de Casos de Uso, Estados, Componentes)
- **Documentación:** Markdown

---

### 4.5 Plan de Aceptación del Producto

**Criterios de Aceptación:**

| Criterio | Método | Responsable | Métrica de Éxito |
|----------|--------|-------------|------------------|
| Requisitos funcionales | Demostración | Cliente | 18 de 20 RF implementados (90%) |
| Requisitos no funcionales | Medición | QA | 12 de 15 RNF satisfechos (80%) |
| Rendimiento | Pruebas | Equipo | Tiempo de respuesta <2 segundos |
| Seguridad | Escaneo estático | Coordinador Técnico | Sin vulnerabilidades críticas |
| Usabilidad | Pruebas de usuario | Cliente | Intuitivo en menos de 30 minutos |

---

### 4.6 Autoridades y Responsabilidades

| Rol | Nombre | Autoridad | Responsabilidades |
|-----|--------|-----------|-------------------|
| **Director del Proyecto** | Víctor Manuel González Ruiz | Decisiones finales, asignación de recursos, comunicación con el cliente | Éxito general del proyecto, cumplimiento del cronograma, aseguramiento de calidad |
| **Coordinador Técnico** | Hernández Jesús David | Aprobación de código, decisiones técnicas, asignación de tareas | Revisión de código, escaneo de seguridad, gestión de dependencias |
| **Desarrollador Backend** | Hernández Segundo Adrián | Decisiones de implementación para backend | Desarrollo PHP/MySQL, diseño de API, gestión de base de datos |
| **Desarrollador Frontend** | Martínez Julián Luis Uriel | Decisiones de implementación para frontend | Desarrollo HTML/CSS/JS, UI/UX, arrastrar y soltar |

**Matriz de Autoridades:**

| Tipo de Decisión | Víctor | David | Adrián | Uriel |
|------------------|--------|-------|--------|-------|
| Alcance del proyecto | ✅ Final | ✅ Entrada | ✅ Entrada | ✅ Entrada |
| Arquitectura técnica | ✅ Final | ✅ Recomienda | ✅ Entrada | ✅ Entrada |
| Aprobación de código | ✅ Final | ✅ Principal | - | - |
| Planificación de sprint | ✅ Líder | ✅ Apoyo | ✅ Entrada | ✅ Entrada |
| Comunicación con el cliente | ✅ Líder | - | - | - |
| Decisiones de seguridad | ✅ Final | ✅ Principal | ✅ Entrada | - |
| Decisiones de UI/UX | ✅ Final | - | ✅ Entrada | ✅ Principal |

---

## 5. PLANIFICACIÓN DEL PROYECTO

### 5.1 Inicio del Proyecto

#### 5.1.1 Plan de Estimación

**Métodos de Estimación:**

| Parámetro | Método | Herramientas | Nivel de Confianza |
|-----------|--------|--------------|-------------------|
| Tamaño (PBIs) | Desglose de trabajo | Excel | 90% |
| Esfuerzo (horas) | Juicio de expertos, Planning Poker | Excel | 85% |
| Cronograma | De abajo hacia arriba (basado en sprints) | Gantt, Excel | 85% |
| Recursos | Asignación basada en habilidades | Excel | 90% |

**Proceso de Reestimación:**
- Después de cada sprint: Actualizar el esfuerzo restante
- Al completar un hito: Reestimación completa
- Cuando ocurren cambios: Análisis de impacto inmediato

**Resultados de Estimación:**

| Métrica | Valor |
|---------|-------|
| Total de PBIs | 173 |
| Total de Puntos de Historia | ~420 SP |
| Horas totales estimadas | 782 horas (inicial) |
| Horas reales | 83 horas (entregables) |
| Duración del cronograma | 32 semanas |
| Tamaño del equipo | 4 personas |
| Velocidad | 19.7 SP/sprint |

---

#### 5.1.2 Plan de Dotación de Personal

**Dotación de Personal por Nivel de Habilidad:**

| Habilidad | Víctor | David | Adrián | Uriel | Total |
|-----------|--------|-------|--------|-------|-------|
| Gestión de Proyectos | 100% | - | - | - | 1 |
| PHP/MySQL | 60% | 80% | 100% | - | 2.4 |
| JavaScript | 50% | 50% | - | 100% | 2.0 |
| HTML/CSS | 50% | 30% | - | 100% | 1.8 |
| Seguridad | 70% | 100% | 30% | - | 2.0 |
| Pruebas | 50% | 60% | 80% | 70% | 2.6 |
| Documentación | 60% | 50% | 40% | 80% | 2.3 |

**Dotación de Personal por Fase:**

| Fase | Víctor | David | Adrián | Uriel | Total |
|------|--------|-------|--------|-------|-------|
| Planificación | 20h | 15h | 10h | 10h | 55h |
| Arquitectura | 15h | 10h | 15h | 10h | 50h |
| Desarrollo | 15h | 20h | 25h | 20h | 80h |
| Integración | 10h | 15h | 15h | 15h | 55h |
| Pruebas | 10h | 10h | 15h | 15h | 50h |
| Entrega | 10h | 5h | 5h | 10h | 30h |
| **Total** | **80h** | **75h** | **85h** | **80h** | **320h** |

**Restricciones de Dotación de Personal:**
- Los miembros del equipo tienen horarios académicos (disponibilidad a tiempo parcial)
- Capacidad efectiva: ~50% (10 horas/semana por persona)
- Un miembro del equipo se fue (Ariadna) - la carga de trabajo fue redistribuida

---

#### 5.1.3 Plan de Adquisición de Recursos

| Recurso | Método de Adquisición | Responsable | Tiempo de Entrega | Plan de Liberación |
|---------|----------------------|-------------|-------------------|---------------------|
| WampServer | Descarga gratuita | Adrián | 1 día | Mantener instalado |
| Git | Descarga gratuita | Víctor | 1 hora | Mantener instalado |
| Cuenta de GitHub | Registro gratuito | Víctor | 1 hora | Mantener activa |
| VS Code | Descarga gratuita | Todos | 1 hora | Mantener instalado |
| OpenCode | instalación npm | Víctor | 30 min | Mantener instalado |
| Editores Markdown | Integrado (Bloc de notas) | Todos | 0 | N/A |

---

#### 5.1.4 Plan de Capacitación del Personal del Proyecto

| Tema de Capacitación | Duración | Participantes | Método | Fecha de Finalización |
|---------------------|----------|---------------|--------|----------------------|
| Conceptos básicos de Git | 2 horas | Todos | Autoestudio | Sprint 1 |
| Metodología Scrum | 2 horas | Todos | Autoestudio | Sprint 1 |
| Configuración de WampServer | 1 hora | Adrián | Guiado | Sprint 9 |
| Seguridad PHP (OWASP) | 2 horas | David, Adrián | OpenCode + Autoestudio | Sprint 14 |
| Documentación en Markdown | 1 hora | Uriel | Autoestudio | Sprint 8 |

---

### 5.2 Planes de Trabajo del Proyecto

#### 5.2.1 Actividades de Trabajo

**Estructura de Desglose de Trabajo (EDT):**

**1.0 PROYECTO KANBAN (320 horas)**

**1.1 Planificación (55 horas)**

1.1.1 Recopilación de requisitos (15 horas)

1.1.2 Creación del backlog (10 horas)

1.1.3 Planificación de sprints (10 horas)

1.1.4 Documentación (20 horas)

**1.2 Arquitectura (50 horas)**

1.2.1 Diagramas de casos de uso (10 horas)

1.2.2 Diagrama de estados (10 horas)

1.2.3 Diagrama de componentes (10 horas)

1.2.4 Diseño de base de datos (20 horas)

**1.3 Desarrollo (80 horas)**

1.3.1 Desarrollo backend (40 horas)

1.3.2 Desarrollo frontend (30 horas)

1.3.3 Integración (10 horas)

**1.4 Pruebas (50 horas)**

1.4.1 Pruebas unitarias (15 horas)

1.4.2 Pruebas de integración (15 horas)

1.4.3 Pruebas de seguridad (10 horas)

1.4.4 Pruebas de aceptación del usuario (10 horas)

**1.5 Entrega (30 horas)**

1.5.1 Documentación (15 horas)

1.5.2 Revisión de código (10 horas)

1.5.3 Entrega final (5 horas)

---

#### 5.2.2 Asignación del Cronograma

**Calendario de Sprints:**

| Sprint | Fechas | Duración | Actividades Clave |
|--------|--------|----------|-------------------|
| 1 | 1-12 Sep 2025 | 2 semanas | Inicio del proyecto, reunión con el cliente |
| 2 | 15-26 Sep 2025 | 2 semanas | Análisis de requisitos |
| 3 | 29 Sep-10 Oct 2025 | 2 semanas | Reglas de negocio, casos de uso |
| 4 | 13-24 Oct 2025 | 2 semanas | Retroalimentación del cliente, ajustes |
| 5 | 27 Oct-7 Nov 2025 | 2 semanas | Arquitectura (parte 1) |
| 6 | 10-21 Nov 2025 | 2 semanas | Arquitectura (parte 2) |
| 7 | 24 Nov-5 Dic 2025 | 2 semanas | Diseño de base de datos |
| 8 | 8-12 Dic 2025 | 1 semana | Especificación final (HITO) |
| *Pausa* | *15 Dic-31 Ene 2026* | *6.5 semanas* | *Descanso de fin de año* |
| 9 | 2-13 Feb 2026 | 2 semanas | Desarrollo inicial |
| 10 | 16-27 Feb 2026 | 2 semanas | Desarrollo parcial |
| 11 | 2-13 Mar 2026 | 2 semanas | Configuración + pruebas |
| 12 | 16-27 Mar 2026 | 2 semanas | Desarrollo avanzado |
| 13 | 30 Mar-10 Abr 2026 | 2 semanas | Integración |
| 14 | 13-24 Abr 2026 | 2 semanas | Implementación de seguridad |
| 15 | 27 Abr-8 May 2026 | 2 semanas | Pruebas finales |
| 16 | 11-22 May 2026 | 2 semanas | Cierre y entrega |

---

#### 5.2.3 Asignación de Recursos

| Sprint | Víctor | David | Adrián | Uriel | Horas Totales |
|--------|--------|-------|--------|-------|---------------|
| 1-4 (Planificación) | 12 | 8 | 8 | 8 | 36 |
| 5-8 (Arquitectura) | 14 | 10 | 10 | 10 | 44 |
| 9-12 (Desarrollo) | 16 | 20 | 24 | 20 | 80 |
| 13-14 (Integración) | 10 | 14 | 14 | 14 | 52 |
| 15-16 (Pruebas/Entrega) | 12 | 12 | 12 | 12 | 48 |
| **Total** | **64** | **64** | **68** | **64** | **260** |

---

#### 5.2.4 Asignación de Presupuesto

| Paquete de Trabajo | Costo Estimado | Costo Real | Variación |
|--------------------|----------------|------------|-----------|
| Personal | $0 | $0 | $0 |
| Licencias de software | $0 | $0 | $0 |
| Hardware | $0 | $0 | $0 |
| Alojamiento | $0 | $0 | $0 |
| **TOTAL** | **$0** | **$0** | **$0** |

*Nota: Proyecto académico sin presupuesto monetario. Todos los recursos fueron voluntarios.*

---

#### 5.2.5 Plan de Adquisiciones

No aplicable. No se adquirieron bienes o servicios para este proyecto académico.

---

## 6. EVALUACIÓN Y CONTROL DEL PROYECTO

### 6.1 Plan de Gestión de Requisitos

**Mecanismos de Control:**

| Actividad | Método | Frecuencia | Responsable |
|-----------|--------|------------|-------------|
| Seguimiento de requisitos | Matriz de trazabilidad | Cada sprint | Director del Proyecto |
| Análisis de impacto de cambios | Re-priorización MoSCoW | Según sea necesario | Equipo |
| Control de versiones | Git | Continuo | Todos |

**Proceso de Cambio de Requisitos:**
1. La solicitud de cambio se envía a través de GitHub Issue
2. Análisis de impacto en alcance, cronograma, recursos
3. Aprobación por el Director del Proyecto
4. Actualización del documento de requisitos
5. Comunicación al equipo

---

### 6.2 Plan de Control de Cambios del Alcance

**Detección de Alcance:**
- Revisiones semanales de sprint
- Sesiones de retroalimentación del cliente
- Retrospectivas del equipo

**Proceso de Control de Cambios:**

| Paso | Acción | Responsable | Plazo |
|------|--------|-------------|-------|
| 1 | Solicitud presentada | Cualquier interesado | En cualquier momento |
| 2 | Análisis de impacto | Director del Proyecto | 24 horas |
| 3 | Revisión y aprobación | Director del Proyecto | 48 horas |
| 4 | Actualización del PGP | Director del Proyecto | 72 horas |
| 5 | Comunicación de cambios | Director del Proyecto | 24 horas |

---

### 6.3 Plan de Control del Cronograma

**Medición del Progreso:**

| Métrica | Método | Objetivo |
|---------|--------|----------|
| Velocidad | Puntos de historia completados por sprint | 20 SP/sprint |
| Rendimiento | PBIs completados por semana | 4 PBIs/semana |
| Tiempo de Ciclo | Días desde el inicio hasta la finalización | <4 días |
| Finalización de sprint | % de PBIs planificados completados | >80% |

**Técnicas de Valor Ganado:**

| Métrica | Valor (Sprint 16) |
|---------|-------------------|
| Valor Planificado (PV) | 100% |
| Valor Ganado (EV) | 85% |
| Costo Real (AC) | 83 horas |
| Índice de Rendimiento del Cronograma (SPI) | 0.85 |

**Acciones Correctivas:**
- Si la velocidad <15 SP/sprint: Reducir alcance del próximo sprint
- Si el tiempo de ciclo >6 días: Reasignar tareas o programación en pares
- Si la finalización del sprint <70%: Retrospectiva para identificar causas raíz

---

### 6.4 Plan de Control del Presupuesto

**Informes de Costos:**

| Elemento | Frecuencia | Responsable |
|----------|------------|-------------|
| Uso de recursos | Semanal | Director del Proyecto |
| Seguimiento de esfuerzo | Diario | Cada miembro del equipo |
| Análisis de variación | Cada hito | Director del Proyecto |

*Nota: No hay presupuesto monetario que controlar. El seguimiento del esfuerzo es el mecanismo principal de control del presupuesto.*

---

### 6.5 Plan de Aseguramiento de Calidad

**Métricas de Calidad:**

| Atributo de Calidad | Métrica | Objetivo | Método de Medición |
|---------------------|---------|----------|---------------------|
| Calidad del código | Violaciones de análisis estático | <10 | Escaneo con OpenCode |
| Integridad de la documentación | % de documentos requeridos | 100% | Verificación manual |
| Cobertura de pruebas | % de funciones probadas | >70% | Pruebas manuales |
| Densidad de defectos | Defectos por KLOC | <5 | Seguimiento de errores |
| Tasa de éxito del sprint | % de PBIs completados | >80% | Revisión de Sprint |

**Actividades de QA:**

| Actividad | Frecuencia | Responsable |
|-----------|------------|-------------|
| Revisión de código | Cada Pull Request | Coordinador Técnico |
| Escaneo de seguridad | Cada fase | Coordinador Técnico |
| Revisión de documentos | Cada hito | Director del Proyecto |
| Auditoría de procesos | Cada sprint | Director del Proyecto |

---

### 6.6 Plan de Gestión de Subcontratistas

No aplicable. No se utilizaron subcontratistas.

---

### 6.7 Plan de Cierre del Proyecto

**Actividades de Cierre:**

| Actividad | Responsable | Plazo |
|-----------|-------------|-------|
| Reasignación de personal | Director del Proyecto | Última semana |
| Archivo de materiales del proyecto | Todos | Última semana |
| Sesión informativa post-mortem | Todos | 21 Mayo 2026 |
| Preparación del informe final | Director del Proyecto | 22 Mayo 2026 |
| Documentación de lecciones aprendidas | Todos | 22 Mayo 2026 |
| Archivo del repositorio de GitHub | Director del Proyecto | 22 Mayo 2026 |

**Materiales de Archivo:**
- Todo el código fuente (GitHub)
- Toda la documentación (GitHub)
- Actas de reuniones (WhatsApp/Teams)
- Artefactos de sprint (GitHub Projects)
- PGP final (este documento)

---

## 7. ENTREGA DEL PRODUCTO

**Enfoque de Entrega del Producto:**
- Entrega digital a través del repositorio de GitHub
- No se requiere entrega física

**Elementos Entregables:**

| Elemento | Formato | Método de Entrega |
|----------|--------|-------------------|
| Código fuente | PHP/HTML/JS | GitHub |
| Base de datos | SQL | GitHub |
| Documentación | Markdown/PDF | GitHub |
| Manual de usuario | Markdown | GitHub |
| Reporte de pruebas | Markdown | GitHub |
| PGP | PDF/Markdown | GitHub |

**Documentación para el Cliente:**
- README.md (instrucciones de instalación)
- Manual de usuario (en `docs/`)
- Reporte de pruebas (en `docs/`)

**Materiales de Capacitación:**
- No requeridos para este proyecto académico

---

## 8. PLANES DE PROCESOS DE APOYO

### 8.1 Supervisión del Proyecto y Entorno de Trabajo

**Enfoque de Supervisión:**
- Verificaciones diarias a través de WhatsApp (asíncrono)
- Reuniones semanales del equipo (Microsoft Teams)
- Revisiones de sprint quincenales (con el cliente)

**Entorno de Trabajo:**
- Trabajo remoto desde ubicaciones personales
- Comunicación a través de WhatsApp y Teams
- Repositorio compartido en GitHub

**Metas de Rendimiento:**
- Completar todos los PBIs planificados por sprint
- Mantener velocidad >15 SP/sprint
- Cero vulnerabilidades críticas de seguridad

---

### 8.2 Gestión de Decisiones

**Categorías de Decisiones:**

| Categoría | Ejemplos | Tomador de Decisiones | Método |
|-----------|----------|----------------------|--------|
| Estratégicas | Alcance, cronograma, recursos | Director del Proyecto | Análisis + consulta |
| Técnicas | Arquitectura, herramientas | Coordinador Técnico | Evaluación técnica |
| Implementación | Diseño de código, UI | Desarrollador respectivo | Decisión individual |
| Solicitudes de cambio | Cambios de requisitos | Director del Proyecto | Análisis de impacto |

**Seguimiento de Decisiones:**
- Todas las decisiones significativas documentadas en `docs/decision_log.md`
- Justificación registrada para referencia futura

---

### 8.3 Gestión de Riesgos

**Registro de Riesgos:**

| ID | Riesgo | Probabilidad | Impacto | Estrategia de Mitigación | Contingencia |
|----|--------|--------------|---------|--------------------------|--------------|
| R1 | Salida de miembro del equipo | Alta (ocurrió) | Alto | Capacitación cruzada, documentación | Reasignar tareas (ejecutado) |
| R2 | Entrega tardía de código | Media | Alto | Verificaciones diarias, plazos claros | Plan B: reducir alcance |
| R3 | Curva de aprendizaje tecnológico | Media | Medio | Sprints de investigación, tutoriales | Programación en pares |
| R4 | Indisponibilidad del cliente | Media | Medio | Programar reuniones con anticipación | Documentar suposiciones |
| R5 | Vulnerabilidades de seguridad | Alta | Alto | Escaneo temprano (OpenCode) | Sprint de seguridad dedicado |
| R6 | Retraso en el cronograma | Media | Alto | Amortiguador en el cronograma, seguimiento de velocidad | Reducir funciones no esenciales |
| R7 | Problemas de comunicación | Media | Medio | Hora fija de informe diario | Proceso de escalamiento |

**Proceso de Respuesta a Riesgos:**
1. Identificar riesgo (verificación diaria, revisión semanal)
2. Analizar impacto y probabilidad
3. Planificar respuesta (mitigación o contingencia)
4. Monitorear estado del riesgo semanalmente
5. Ejecutar contingencia si el riesgo se materializa

---

### 8.4 Gestión de Configuración

**Elementos de Configuración:**

| Elemento | Ubicación | Control de Versiones |
|----------|-----------|---------------------|
| Código fuente | GitHub | Git (ramificación) |
| Esquema de base de datos | GitHub | Archivo SQL |
| Documentación | GitHub | Git |
| PGP | GitHub | Git |

**Junta de Control de Cambios:**
- Director del Proyecto (Presidente)
- Coordinador Técnico
- Representante del cliente (para cambios de alcance)

**Herramientas de Gestión de Configuración:**
- Git para control de versiones
- GitHub para gestión de repositorios
- Estrategia de ramificación: Git Flow (main, develop, feature/*)

**Proceso de Línea Base:**
1. Línea base inicial: Finalización del Sprint 8
2. Solicitudes de cambio registradas y analizadas
3. Cambios aprobados fusionados en la rama main
4. Nueva línea base establecida con actualización de versión

---

### 8.5 Gestión de Información

#### 8.5.1 Documentación

**Plan de Documentación:**

| Documento | Plantilla | Autor | Revisor | Fecha de Entrega |
|-----------|----------|-------|---------|------------------|
| PGP | ISO/IEC 16326 | Víctor | David | 22 Mayo 2026 |
| ERS | Personalizado | Víctor | Todos | 12 Dic 2025 |
| Backlog | Excel/Markdown | Víctor | Equipo | 12 Dic 2025 |
| Reporte de Pruebas | Markdown | Uriel | Adrián | 22 Mayo 2026 |
| Reporte de Revisión de Código | Markdown | David | Víctor | 22 Mayo 2026 |
| README | Markdown | Víctor | Equipo | 22 Mayo 2026 |
| CHANGELOG | Markdown | Uriel | Equipo | 22 Mayo 2026 |

**Control de Documentos:**
- Todos los documentos almacenados en el repositorio de GitHub
- Control de versiones a través de Git
- Revisión antes de la línea base

#### 8.5.2 Comunicación y Publicidad

**Partes Interesadas:**

| Parte Interesada | Información Necesaria | Frecuencia | Método |
|------------------|----------------------|------------|--------|
| Profesor | Estado del proyecto, entregables | Hito | GitHub + correo electrónico |
| Cliente | Progreso, retroalimentación | Quincenal | Revisión de Sprint |
| Miembros del equipo | Tareas diarias, bloqueos | Diario | WhatsApp |
| Coordinador Técnico | Estado del código, problemas | Diario | WhatsApp |

**Plan de Comunicación:**

| Tipo de Mensaje | Remitente | Destinatario | Método | Frecuencia |
|-----------------|-----------|--------------|--------|------------|
| Progreso diario | Cada miembro | Coordinador | WhatsApp | Diario (antes de las 10 AM) |
| Resumen semanal | Coordinador | Director del Proyecto | WhatsApp | Viernes |
| Revisión de Sprint | Director del Proyecto | Cliente, Profesor | Teams | Quincenal |
| Retrospectiva | Todos | Equipo | Teams | Después de cada sprint |
| Notificación de cambio | Director del Proyecto | Todos | WhatsApp + GitHub | Según sea necesario |

---

### 8.6 Aseguramiento de Calidad

**Actividades de Aseguramiento de Calidad:**

| Actividad | Entrada | Salida | Responsable |
|-----------|---------|--------|-------------|
| Revisión de código | Pull request | Aprobación/cambios | Coordinador Técnico |
| Escaneo de seguridad | Código fuente | Reporte de vulnerabilidades | Coordinador Técnico |
| Revisión de documentos | Borrador del documento | Línea base aprobada | Director del Proyecto |
| Auditoría de procesos | Productos de trabajo | Sugerencias de mejora | Director del Proyecto |

**Registros de Calidad:**
- Comentarios de revisión de código (GitHub)
- Reportes de escaneo de seguridad (`docs/codereview.md`)
- Notas de retrospectiva (`docs/retrospectives/`)

---

### 8.7 Medición

**Plan de Medición:**

| Necesidad de Información | Medida | Fuente de Datos | Frecuencia |
|--------------------------|--------|-----------------|------------|
| Progreso del proyecto | Velocidad (SP/sprint) | Revisión de Sprint | Cada sprint |
| Productividad del equipo | Rendimiento (PBI/semana) | Revisión de Sprint | Cada sprint |
| Eficiencia del proceso | Tiempo de Ciclo (días) | GitHub | Continuo |
| Calidad del código | Vulnerabilidades de seguridad | OpenCode | Cada fase |
| Calidad de la documentación | % de integridad | Verificación manual | Cada hito |

**Herramientas de Medición:**
- GitHub Projects para seguimiento
- Excel para cálculo de métricas
- OpenCode para métricas de seguridad

---

### 8.8 Revisiones y Auditorías

**Calendario de Revisiones:**

| Tipo de Revisión | Frecuencia | Participantes | Salida |
|------------------|-----------|---------------|--------|
| Revisión de Sprint | Quincenal | Equipo, Cliente, Profesor | Retroalimentación, aceptación |
| Retrospectiva de Sprint | Quincenal | Equipo | Acciones de mejora |
| Revisión de Código | Cada PR | Coordinador Técnico | Aprobación/cambios |
| Auditoría de Seguridad | Cada fase | Coordinador Técnico | Reporte de vulnerabilidades |
| Auditoría Final | Finalización del proyecto | Director del Proyecto | Verificación de cumplimiento |

**Lista de Verificación de Auditoría:**
- [ ] Todos los entregables completados
- [ ] Documentación actualizada
- [ ] Vulnerabilidades de seguridad abordadas
- [ ] Elementos de configuración con línea base
- [ ] Lecciones aprendidas documentadas

---

### 8.9 Verificación y Validación

**Actividades de Verificación:**

| Actividad | Método | Responsable | Plazo |
|-----------|--------|-------------|-------|
| Verificación de requisitos | Matriz de trazabilidad | Director del Proyecto | Cada hito |
| Verificación de código | Revisión de código, análisis estático | Coordinador Técnico | Continuo |
| Verificación de diseño | Revisión de diagramas | Equipo | Según se complete |

**Actividades de Validación:**

| Actividad | Método | Responsable | Plazo |
|-----------|--------|-------------|-------|
| Validación funcional | Demostración | Cliente | Revisión de Sprint |
| Validación de usabilidad | Pruebas de usuario | Cliente | Sprint final |
| Validación de aceptación | UAT | Cliente | Sprint 16 |

**Independencia:**
- Verificación: Coordinador Técnico (independiente de los desarrolladores)
- Validación: Cliente (externo)

**Herramientas:**
- OpenCode para verificación estática
- Pruebas manuales para validación

---

## 9. PLANES ADICIONALES

### 9.1 Plan de Seguridad

**Requisitos de Seguridad:**
- Autenticación (inicio de sesión con contraseñas hash)
- Control de acceso basado en roles (4 roles)
- Gestión de sesiones (cookies seguras)
- Validación de entrada (prevenir inyección SQL, XSS)

**Actividades de Seguridad:**

| Actividad | Método | Responsable | Sprint |
|-----------|--------|-------------|--------|
| Modelado de amenazas | Lista de verificación OWASP | David | 4 |
| Codificación segura | Declaraciones preparadas | Adrián | 9-12 |
| Escaneo de seguridad | OpenCode | David | 14 |
| Corrección de vulnerabilidades | Corrección de código | Adrián, Uriel | 15 |

**Hallazgos de Seguridad (OpenCode):**

| Severidad | Cantidad | Estado |
|-----------|----------|--------|
| Crítica | 7 | Corregidas |
| Alta | 4 | En revisión |
| Media | 5 | En revisión |
| **Total** | **16** | **Abordadas** |

---

### 9.2 Plan de Desarrollo de Software (PDS)

Consulte el Product Backlog y la documentación del sprint para la planificación detallada del desarrollo.

**Aspectos Destacados del PDS:**
- Lenguaje: PHP 8.2, JavaScript, HTML5, CSS3
- Base de datos: MySQL
- Entorno de desarrollo: WampServer
- Control de versiones: Git con GitHub
- Pruebas: Manual + automatizado (básico)
- Documentación: Markdown

---

## ANEXOS

### Anexo A: Estructura de Desglose de Trabajo (Detallada)

(Consulte la sección 5.2.1 para la EDT)

### Anexo B: Registro de Riesgos (Detallado)

(Consulte la sección 8.3 para el Registro de Riesgos)

### Anexo C: Matriz de Comunicación

(Consulte la sección 8.5.2 para el Plan de Comunicación)

### Anexo D: Glosario de Términos

(Consulte la sección 3 para Definiciones)

---

## ÍNDICE

| Término | Sección |
|---------|---------|
| Aceptación, criterios de | 4.5 |
| Adquisiciones, plan de | 5.2.5 |
| Alcance | 1.1.1 |
| Archivo | 6.7 |
| Auditorías | 8.8 |
| Backlog | 5.2.1 |
| Calidad, aseguramiento de | 8.6 |
| Cambio, control de | 6.2 |
| Capacitación | 5.1.4 |
| Cierre, plan de | 6.7 |
| Comunicación | 8.5.2 |
| Configuración, gestión de | 8.4 |
| Decisiones, gestión de | 8.2 |
| Documentación | 8.5.1 |
| Entorno de trabajo | 8.1 |
| Entregables | 1.1.3 |
| Estimación | 5.1.1 |
| Hitos | 4.1 |
| Infraestructura | 4.3 |
| KPIs | 6.3 |
| Métodos | 4.4 |
| Objetivos | 1.1.1 |
| Organización | 4.6 |
| Presupuesto | 5.2.4 |
| Proceso, modelo de | 4.1 |
| Producto, entrega del | 7 |
| Recursos | 5.1.3 |
| Referencias | 2 |
| Requisitos | 1.1.1 |
| Restricciones | 1.1.2 |
| Retrospectivas | 8.8 |
| Revisiones | 8.8 |
| Riesgos, gestión de | 8.3 |
| Seguridad | 9.1 |
| Sprints | 5.2.2 |
| Suposiciones | 1.1.2 |
| Verificación y Validación | 8.9 |

---

**FIN DEL PLAN DE GESTIÓN DEL PROYECTO**

---

**Preparado por:** Víctor Manuel González Ruiz, Hernández Jesús David, Martínez Julián Luis Uriel, Hernández Segundo Adrián  
**Aprobado por:** Equipo del Proyecto  
**Fecha:** 22 Mayo 2026  
**Versión:** 1.0 (Final)

**Ubicación del Documento:**  
https://github.com/LovelyStoOk/PLATAFORMA-DE-GESTI-N-DE-PROYECTOS-ESTILO-KANBAN/docs/PMP.md