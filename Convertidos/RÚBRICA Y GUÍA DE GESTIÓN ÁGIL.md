**RÚBRICA Y GUÍA DE GESTIÓN ÁGIL - PLATAFORMA DE GESTIÓN DE PROYECTOS
ESTILO KANBAN**

  -----------------------------------------------------------------------
  Materia:                   Aseguramiento De La Calidad De Software
  -------------------------- --------------------------------------------
  Carrera:                   Ingeniería De Software

  Empresa Cliente:           Empresa Edwin (Servicios de Paquetería y
                             Logística)

  Equipo de Desarrollo:      Astra Company
  -----------------------------------------------------------------------

  -----------------------------------------------------------------------
  Nombre Alumno                                             Matrícula
  --------------------------------------------------------- -------------
  González Ruiz Víctor Manuel                               17-011-0529

  Hernández Segundo Adrián                                  20-003-1419

  Hernández Jesús David                                     21-011-1319

  Martínez Julián Luis Uriel                                21-011-0345
  -----------------------------------------------------------------------

**\
**

**TABLA DE CONTENIDO**

1.  Introducción y Objetivos

2.  PARTE I: CONCEPTOS FUNDAMENTALES APLICADOS AL PROYECTO

    - 2.1 Tiempo de Ciclo (Cycle Time) en la Plataforma Kanban

    - 2.2 Categorización por Tallas (T-Sizes) para Envíos

    - 2.3 Estructura de Desglose del Trabajo (WBS) del Proyecto

    - 2.4 Ley de Little aplicada al Flujo de Paquetería

3.  PARTE II: DISEÑO DE INTERFACES DE USUARIO

    - 3.1 Filosofía de Diseño y Principios de Experiencia de Usuario

    - 3.2 Guía de Estilos y Sistema de Diseño

    - 3.3 Especificaciones de Pantallas Principales

    - 3.4 Visualización de Métricas en Tiempo Real

4.  PARTE III: DIAGRAMAS Y ARQUITECTURA DEL SISTEMA

    - 4.1 Diagramas de Casos de Uso

    - 4.2 Diagramas de Secuencia

    - 4.3 Diagrama de Estados - Ciclo de Vida de una Orden

    - 4.4 Diagrama de Componentes

5.  PARTE IV: PROMPTS PROFESIONALES PARA LA GESTIÓN ÁGIL DEL PROYECTO

    - 5.1 Prompt 1: Creación de Objetivos de Sprint para la Plataforma

    - 5.2 Prompt 2: Creación de Objetivos de Producto

    - 5.3 Prompt 3: Eliminación de Impedimentos en el Desarrollo

    - 5.4 Prompt 4: Definición de Hecho (DoD) para la Plataforma

    - 5.5 Prompt 5: Mejora basada en Métricas DORA

    - 5.6 Prompt 6: Resolución de Conflictos en el Equipo

6.  PARTE V: MATRIZ DE INTEGRACIÓN PROYECTO-CONCEPTOS

7.  Conclusiones y Próximos Pasos

**1. INTRODUCCIÓN Y OBJETIVOS**

**1.1 Introducción**

**Para:** Empresa Edwin\
**De:** Astra Company\
**Fecha:** 03/10/2025\
**Asunto:** Rúbrica y Guía de Gestión Ágil - Plataforma de Gestión de
Proyectos Kanban

La empresa **Empresa Edwin**, especializada en servicios de paquetería y
logística, se enfrenta al desafío de gestionar un alto volumen de envíos
y tareas operativas de manera eficiente. La falta de un sistema
centralizado y visual para el seguimiento de cada paquete, desde su
recepción hasta su entrega final, genera cuellos de botella, falta de
visibilidad para los equipos y potenciales errores en el proceso.

Para solucionarlo, **Astra Company** se complace en presentar el
desarrollo de una **Plataforma de Gestión de Procesos estilo Kanban** a
la medida. Este sistema transformará el flujo de trabajo de paquetería
en un tablero digital e intuitivo, donde cada envío será representado
como una tarjeta que se moverá a través de etapas personalizadas:
\"Recibido\", \"En Almacén\", \"En Ruta\", \"Entregado\". Esto
proporcionará una visión clara, en tiempo real, del estado de cada
paquete a todos los departamentos involucrados.

**1.2 Objetivos del Proyecto**

**Objetivo General**

Desarrollar e implementar una plataforma web de gestión de procesos
interna, basada en la metodología Kanban, para optimizar, rastrear y
visualizar en tiempo real el flujo de trabajo de paquetería de Empresa
Edwin, mejorando la eficiencia operativa y la colaboración entre sus
equipos.

**Objetivos Específicos**

1.  **Implementar un tablero Kanban digital** que permita visualizar y
    gestionar el flujo de envíos mediante listas personalizables y
    movimiento de tarjetas con información de paquetes mediante
    arrastrar y soltar.

2.  **Establecer un sistema de roles y permisos** (\"Supervisor\",
    \"Operario de Almacén\", \"Repartidor\") para controlar el acceso y
    las acciones disponibles para cada tipo de usuario.

3.  **Integrar un módulo de notificaciones en tiempo real** que alertará
    a los usuarios sobre cambios críticos en el estado de un paquete o
    cuando se les asigne una nueva tarea.

4.  **Desarrollar un historial de cambios detallado** para cada tarjeta
    (paquete), que registre toda actividad para garantizar la total
    trazabilidad de los envíos.

5.  **Incorporar un sistema de chat interno** por tablero o paquete,
    facilitando la comunicación directa entre los empleados.

6.  **Garantizar la sincronización de datos en tiempo real y la gestión
    de concurrencia**, asegurando que toda la información del tablero se
    actualice al instante para todos los usuarios.

**2. PARTE I: CONCEPTOS FUNDAMENTALES APLICADOS AL PROYECTO**

**2.1 Tiempo de Ciclo (Cycle Time) en la Plataforma Kanban**

**Definición en el Contexto del Proyecto**

El tiempo de ciclo en nuestra plataforma mide la duración total desde
que un paquete es **Recibido** en el sistema hasta que
es **Entregado** al destinatario final.

**Fórmula Aplicada**

Tiempo de Ciclo = Fecha/Hora de Entrega - Fecha/Hora de Recepción

**Puntos de Medición en el Flujo**

  -----------------------------------------------------------------------
  Estado                Punto de Inicio/Fin
  --------------------- -------------------------------------------------
  Recibido              Inicio del tiempo de ciclo

  Preparado             Tiempo parcial 1 (procesamiento en almacén)

  En Camino             Tiempo parcial 2 (tránsito)

  Entregado             Fin del tiempo de ciclo

  Problema              Pausa del tiempo de ciclo (reloj detenido)
  -----------------------------------------------------------------------

**\
**

**Visualización en la Plataforma**

Siguiendo la guía de estilos, el tiempo de ciclo se mostrará:

- **En tarjetas individuales:** Badge con formato Body Small mostrando
  \"Ciclo: 3h 20m\"

- **En columnas:** Promedio de tiempo en esa etapa usando color **Azul
  Logístico**

- **En dashboard:** Gráfico de tendencias con alertas en **Naranja
  Logístico** cuando supere umbrales

**Beneficio para Empresa Edwin**

- Permite identificar qué rutas o repartidores son más eficientes

- Ayuda a ofrecer ventanas de entrega más precisas a los clientes

- Detecta cuellos de botella (ej. demasiado tiempo en \"Preparado\")

**2.2 Categorización por Tallas (T-Sizes) para Envíos**

**Definición en el Contexto del Proyecto**

Sistema de clasificación de paquetes por tamaño y complejidad utilizando
tallas de ropa (XS a XL) para optimizar la asignación de recursos y la
planificación de rutas.

**Escala Adaptada para Paquetería**

  --------------------------------------------------------------------------
  Talla   Tipo de Envío                 Requerimientos         Color
                                        Especiales             Asociado
  ------- ----------------------------- ---------------------- -------------
  XS      Sobre, documento              Ninguno                Verde
                                                               Operativo

  S       Paquete pequeño (libro, caja  Manejo estándar        Verde
          pequeña)                                             Operativo

  M       Paquete mediano               Cuidado estándar       Azul
          (electrodoméstico pequeño)                           Logístico

  L       Paquete grande (televisor,    Dos personas, vehículo Naranja
          mueble pequeño)               grande                 Logístico

  XL      Carga voluminosa (mueble      Vehículo especial,     Rojo Crítico
          armado, mudanza)              planificación          
  --------------------------------------------------------------------------

**Implementación en la Plataforma**

1.  **En creación de orden:** Selector visual de talla con descripción

2.  **En tarjetas del tablero:** Badge con la talla y color
    correspondiente

3.  **En asignación de repartidor:** Filtro automático que muestra solo
    repartidores con capacidad para la talla

4.  **En métricas:** Análisis de tiempo de ciclo por talla

**Beneficio para Empresa Edwin**

- Balancea la carga de trabajo entre repartidores

- Evita asignar paquetes grandes a vehículos pequeños

- Permite análisis de rendimiento por tipo de envío

**2.3 Estructura de Desglose del Trabajo (WBS) del Proyecto**

A continuación se presenta la WBS completa del proyecto \"Plataforma
Kanban para Empresa Edwin\", desglosada en entregables y paquetes de
trabajo:

1.0 PLATAFORMA KANBAN PARA EMPRESA EDWIN

│

├── 1.1 DISEÑO DE INTERFACES DE USUARIO (UI/UX)

│ ├── 1.1.1 Investigación y Definición

│ │ ├── 1.1.1.1 Entrevistas con personal de paquetería

│ │ └── 1.1.1.2 Wireframes de baja fidelidad

│ ├── 1.1.2 Sistema de Diseño

│ │ ├── 1.1.2.1 Paleta de colores corporativa

│ │ ├── 1.1.2.2 Tipografía y jerarquía visual

│ │ ├── 1.1.2.3 Sistema de componentes

│ │ └── 1.1.2.4 Biblioteca de iconografía

│ └── 1.1.3 Diseño de Pantallas de Alta Fidelidad

│ ├── 1.1.3.1 Pantalla de Registro/Login

│ ├── 1.1.3.2 Pantalla de Configuración de Seguridad

│ ├── 1.1.3.3 Pantalla de Preferencias Laborales

│ ├── 1.1.3.4 Tablero Kanban principal

│ ├── 1.1.3.5 Vista de Detalle de Orden

│ └── 1.1.3.6 Vista de creación de nueva orden (con T-Sizes)

│

├── 1.2 DESARROLLO DEL FRONTEND

│ ├── 1.2.1 Configuración del Proyecto

│ ├── 1.2.2 Implementación de Componentes Base

│ └── 1.2.3 Implementación de Módulos Funcionales

│ ├── 1.2.3.1 Módulo de autenticación

│ ├── 1.2.3.2 Módulo de gestión de usuarios

│ ├── 1.2.3.3 Módulo del Tablero Kanban

│ │ ├── 1.2.3.3.1 Renderizado de columnas y tarjetas

│ │ ├── 1.2.3.3.2 Lógica de drag-and-drop

│ │ └── 1.2.3.3.3 Filtros y búsqueda

│ ├── 1.2.3.4 Módulo de gestión de órdenes

│ ├── 1.2.3.5 Módulo de notificaciones en tiempo real

│ └── 1.2.3.6 Módulo de chat interno

│

├── 1.3 DESARROLLO DEL BACKEND

│ ├── 1.3.1 Configuración del Servidor y Base de Datos

│ ├── 1.3.2 Implementación de la API

│ │ ├── 1.3.2.1 Servicio de Gestión de Usuarios

│ │ ├── 1.3.2.2 Servicio de Gestión de Órdenes

│ │ ├── 1.3.2.3 Servicio de Validaciones y Reglas

│ │ ├── 1.3.2.4 Servicio de Notificaciones

│ │ ├── 1.3.2.5 Servicio de Rutas

│ │ └── 1.3.2.6 Servicio de Historial

│ └── 1.3.3 Gestión de Archivos

│

├── 1.4 DOCUMENTACIÓN

│ ├── 1.4.1 Documentación Técnica (API, arquitectura)

│ └── 1.4.2 Documentación de Usuario (manuales por rol)

│

└── 1.5 GESTIÓN DEL PROYECTO Y CALIDAD

├── 1.5.1 Gestión del Proyecto (sprints, riesgos)

└── 1.5.2 Aseguramiento de la Calidad (pruebas, inspecciones)

**2.4 Ley de Little aplicada al Flujo de Paquetería**

**Definición en el Contexto del Proyecto**

La Ley de Little establece la relación entre el número de paquetes en el
sistema (WIP), la tasa de entregas (Throughput) y el tiempo de ciclo
promedio.

**Fórmula Aplicada**

Paquetes en Sistema (WIP) = Tasa de Entregas × Tiempo de Ciclo Promedio

O su forma más útil:

Tiempo de Ciclo = WIP / Tasa de Entregas

**\
**

**Ejemplo Práctico con Datos de Empresa Edwin**

  ------------------------------------------------------------------------
  Variable                 Valor              Descripción
  ------------------------ ------------------ ----------------------------
  WIP                      50 paquetes        Promedio de paquetes en el
                                              sistema

  Throughput               10 paq/hora        Capacidad de entrega del
                                              equipo

  Tiempo de Ciclo          5 horas            Tiempo promedio calculado
  ------------------------------------------------------------------------

**Implementación en la Plataforma**

La plataforma calculará y mostrará en tiempo real:

1.  **WIP Actual:** Conteo de todas las tarjetas en columnas
    \"Recibido\", \"Preparado\" y \"En Camino\"

2.  **Throughput (Hoy):** Paquetes entregados en el día

3.  **Tiempo de Ciclo Estimado:** Cálculo automático usando la ley

**Alertas Predictivas**

Cuando el WIP supere umbrales configurados, el sistema alertará:

\"El WIP ha alcanzado 60 paquetes. Con el throughput actual de 10
paq/hora, el tiempo de ciclo estimado será de 6 horas. Revise la columna
\'Preparado\'.\"

**Beneficio para Empresa Edwin**

- Permite predecir tiempos de entrega basados en carga actual

- Ayuda a tomar decisiones proactivas (ej. asignar más repartidores)

- Visualiza el impacto de los cuellos de botella

**\
**

**3. PARTE II: DISEÑO DE INTERFACES DE USUARIO**

**3.1 Filosofía de Diseño y Principios de Experiencia de Usuario**

**3.1.1 Enfoque Centrado en el Usuario**

El diseño de la plataforma Kanban se fundamenta en los principios de
usabilidad y eficiencia operativa, considerando los flujos de trabajo
específicos del sector de paquetería y logística. La interfaz prioriza
la claridad visual y la reducción de fricción en las operaciones
diarias.

**3.1.2 Metodología de Diseño Iterativo**

El proceso de diseño sigue un enfoque iterativo basado en Design
Thinking, comenzando con la investigación de usuarios, seguido de
wireframes, prototipos interactivos y mockups de alta fidelidad.

**3.2 Guía de Estilos y Sistema de Diseño**

**3.2.1 Paleta de Colores Corporativa**

  ------------------------------------------------------------------------
  Color                   Uso                               Código
  ----------------------- --------------------------------- --------------
  Azul Logístico          Botones primarios, elementos      #2563EB
                          clave                             

  Azul Oscuro             Hover, navegación                 #1E40AF

  Verde Operativo         Éxito, completado                 #059669

  Naranja Logístico       Alertas, atención                 #EA580C

  Rojo Crítico            Errores, urgencia                 #DC2626
  ------------------------------------------------------------------------

**3.2.2 Tipografía**

- **Familia:** Inter (excelente legibilidad en pantallas)

- **Escala:** H1 (40px) a Caption (12px)

**3.2.3 Sistema de Espaciado**

- **Base Unit:** 8px

- **Escala:** XS (4px) a XXL (48px)

**3.3 Especificaciones de Pantallas Principales**

**3.3.1 Pantalla de Registro de Usuario**

Formulario de paso único con:

- Información personal (nombre, email, teléfono)

- Información laboral (cargo, rol)

- Configuración de seguridad (contraseña, 2FA)

**3.3.2 Tablero Kanban Principal**

- Columnas: \"Recibido\", \"Preparado\", \"En Camino\", \"Entregado\",
  \"Problema\"

- Tarjetas con: información del paquete, talla (T-Size), tiempo de ciclo
  parcial

- Drag-and-drop con feedback visual

- Filtros por talla, repartidor, zona

**3.3.3 Vista de Detalle de Orden**

- Información completa del paquete

- Historial de cambios (auditoría)

- Chat interno vinculado a la orden

- Documentos adjuntos (fotos, firmas)

**3.4 Visualización de Métricas en Tiempo Real**

La plataforma incluirá un panel de métricas con:

  -----------------------------------------------------------------------
  Métrica                       Visualización             Color
  ----------------------------- ------------------------- ---------------
  WIP Actual                    Número grande + tendencia Azul

  Throughput Hoy                Número + comparación ayer Verde

  Tiempo de Ciclo Promedio      Tiempo + alerta si \>     Variable
                                umbral                    

  Distribución por Talla        Gráfico de pastel         Por talla

  Cuellos de Botella            Columnas con tiempo       Naranja si alto
                                promedio                  
  -----------------------------------------------------------------------

**4. PARTE III: DIAGRAMAS Y ARQUITECTURA DEL SISTEMA**

**4.1 Diagramas de Casos de Uso**

**4.1.1 Diagrama de Casos de Uso Principal**

ACTORES:

\- Administrador del Sistema

\- Coordinador de Logística

\- Repartidor

\- Cliente Interno

\- Sistema de Notificaciones

CASOS DE USO PRINCIPALES:

\- CU-001: Registro de Usuario

\- CU-002: Visualizar Tablero Kanban

\- CU-003: Mover Orden Entre Columnas

\- CU-004: Ver Detalle de Orden

\- CU-005: Crear Nueva Orden (con Talla)

\- CU-006: Asignar Repartidor (con validación de talla)

\- CU-007: Reportar Problema

\- CU-008: Ver Métricas en Tiempo Real (WIP, Throughput, Ciclo)

**4.2 Diagramas de Secuencia**

**4.2.1 Diagrama de Secuencia - Mover Orden Entre Columnas**

Este diagrama muestra la interacción completa cuando un usuario mueve
una tarjeta, incluyendo:

- Validación de transición permitida

- Actualización en base de datos

- Registro en historial

- Notificaciones en tiempo real

- Actualización de métricas (WIP, tiempo de ciclo parcial)

**4.3 Diagrama de Estados - Ciclo de Vida de una Orden**

text

\[Recibido\] → \[Preparado\] → \[En Camino\] → \[Entregado\]

↑ ↓ ↓

└────── \[Problema\] ←───────┘

↓ (desde cualquier estado)

\[Cancelado\]

**Reglas de Transición:**

  -----------------------------------------------------------------------
  Transición              Condiciones                Acciones Automáticas
  ----------------------- -------------------------- --------------------
  Recibido → Preparado    Documentación completa,    Generar etiqueta,
                          embalaje verificado        asignar talla

  Preparado → En Camino   Repartidor asignado y      Notificar
                          aceptado                   destinatario,
                                                     activar GPS

  En Camino → Entregado   Firma digital, ubicación   Generar comprobante,
                          confirmada                 actualizar métricas

  Cualquier estado →      Descripción del problema,  Notificar
  Problema                evidencia                  supervisor, pausar
                                                     timer
  -----------------------------------------------------------------------

**\
**

**4.4 Diagrama de Componentes**

┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐

│ TABLERO │────▶│ GESTIÓN DE │────▶│ VALIDACIONES │

│ KANBAN │ │ ÓRDENES │ │ Y REGLAS │

└─────────────────┘ └─────────────────┘ └─────────────────┘

│ │ │

▼ ▼ ▼

┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐

│ FORMULARIO │ │ GESTIÓN DE │ │ SISTEMA DE │

│ DE REGISTROS │ │ USUARIOS │ │ NOTIFICACIONES│

└─────────────────┘ └─────────────────┘ └─────────────────┘

│ │ │

└───────────┬───────────┴───────────┬────────────┘

▼ ▼

┌─────────────────┐ ┌─────────────────┐

│ BASE DE │ │ ALMACÉN DE │

│ DATOS │ │ ARCHIVOS │

└─────────────────┘ └─────────────────┘

**\
**

**5. PARTE IV: PROMPTS PROFESIONALES PARA LA GESTIÓN ÁGIL DEL PROYECTO**

**5.1 Prompt 1: Creación de Objetivos de Sprint para la Plataforma**

**Prompt Completado para el Proyecto**

Usamos Sprints de dos semanas para construir una Plataforma de Gestión
de Proyectos

estilo Kanban para una empresa de paquetería. La Visión del Producto es
transformar

el flujo de trabajo logístico en un tablero digital intuitivo que
optimice la

eficiencia operativa y reduzca errores. Utilizamos Objetivos de Producto
mensuales

como metas a medio plazo. El objetivo mensual actual es implementar el
módulo

principal del tablero Kanban con funcionalidades básicas de gestión de
órdenes.

Este es el primer Sprint del objetivo mensual actual.

Así que, desglosa el objetivo mensual actual en metas más pequeñas a
corto plazo

y úsalas como base para crear un Objetivo de Sprint para el primer
Sprint alineado

con la Visión del Producto y el Objetivo de Producto actual a través del
modelo FOCUS:

\*\*Diversión:\*\* \"El Vuelo Inicial del Paquete\" - Primera versión
del tablero volando

\*\*Orientado a resultados:\*\* Implementar las columnas \"Recibido\",
\"Preparado\" y

\"Entregado\" con capacidad de crear órdenes básicas y mover tarjetas
entre columnas

\*\*Colaborativo:\*\* Todo el equipo Scrum (desarrolladores frontend,
backend, diseñador,

Product Owner) define juntos los criterios de aceptación

\*\*Último:\*\* Porque necesitamos validar con usuarios reales el flujo
básico antes de

añadir complejidades como notificaciones o chat

\*\*Singular:\*\* Un único objetivo: tener un tablero funcional de
principio a fin

**5.2 Prompt 2: Creación de Objetivos de Producto**

**Prompt Completado para el Proyecto**

Estamos construyendo una Plataforma de Gestión de Procesos estilo Kanban
para una

empresa de paquetería. La Visión del Producto es convertirnos en el
estándar de

gestión logística para empresas de tamaño medio, ofreciendo visibilidad
total en

tiempo real del flujo de paquetes.

La plataforma tiene dos caras: una para coordinadores y personal de
almacén que

gestionan las órdenes, y otra para repartidores que ejecutan las
entregas desde

sus dispositivos móviles.

Utilizamos los Objetivos de Producto como metas a medio plazo. Así que,
desglosa

la Visión de Producto en varios objetivos más pequeños a medio plazo y
crea el

primer Objetivo de Producto dentro del modelo SMART:

\*\*Específico:\*\* Implementar el tablero Kanban básico con capacidad
de crear órdenes,

asignarlas a repartidores y registrar entregas

\*\*Medible:\*\* Lograr que el 100% de las órdenes de prueba puedan
completar el flujo

completo (Recibido → Entregado) sin errores

\*\*Alcanzable:\*\* Sí, utilizando tecnologías probadas (React para
frontend, Node.js

para backend, WebSockets para tiempo real)

\*\*Relevante:\*\* Este objetivo es fundamental porque sin el flujo
básico no podemos

añadir funcionalidades avanzadas como notificaciones o chat

\*\*Plazo:\*\* Completar en 4 Sprints (2 meses) para presentar MVP a la
empresa Edwin

**5.3 Prompt 3: Eliminación de Impedimentos en el Desarrollo**

**Prompt Completado para el Proyecto**

Tenemos 3 equipos Scrum trabajando en un solo producto: la Plataforma
Kanban para

Empresa Edwin. Soy el Scrum Master de 2 de los equipos.

Los 3 equipos utilizan una infraestructura de pruebas compartida
(entorno de staging)

para validar sus incrementos antes de pasar a producción. Sin embargo,
existe un

impedimento: cuando un equipo despliega sus cambios en staging para
pruebas,

sobrescribe la configuración y los datos de prueba, afectando las
pruebas de los

otros equipos. Esto genera que los equipos pasen tiempo reconfigurando
el entorno

en lugar de probar funcionalidades.

Crea un plan paso a paso para eliminar este impedimento:

1\. ¿A quién debería invitar para crear un grupo de enfoque?

\- Líderes técnicos de los 3 equipos

\- Administrador del sistema/DevOps

\- Un representante de calidad (QA)

\- Product Owner (para entender prioridades)

2\. ¿Cómo facilitar la colaboración?

\- Reunión inicial para entender el problema desde todas las
perspectivas

\- Tormenta de ideas con técnicas como \"Lean Coffee\" para generar
soluciones

\- Evaluación de opciones (ambientes de prueba por equipo, contenedores
Docker,

datos sintéticos, branching strategy)

\- Votación para seleccionar la mejor solución

\- Plan de implementación con responsables y fechas

3\. ¿Qué herramientas de colaboración utilizar?

\- Miro o Mural para diagramar soluciones

\- Jira para tracking del impedimento

\- Slack para comunicación continua

\- Documentación compartida en Confluence

\- Repositorio con scripts de configuración de entornos

**\
**

**5.4 Prompt 4: Definición de Hecho (DoD) para la Plataforma**

**Prompt Completado para el Proyecto**

Estamos construyendo una aplicación web para gestión de paquetería
mediante tablero

Kanban. El nombre del producto es \"KanbanLogistics\".

La definición de Hecho es la comprensión común y compartida de los
criterios que

deben cumplirse para que un Incremento se considere completo.

Crea un documento de Definición de Hecho para el producto
KanbanLogistics:

\*\*1. EXPECTATIVAS DE PROCESO\*\*

\- \[ \] La historia ha sido revisada y aceptada por el Product Owner

\- \[ \] Se ha actualizado la documentación de usuario si aplica

\- \[ \] Los criterios de aceptación se cumplen al 100%

\- \[ \] El equipo ha revisado la historia en la Sprint Review

\*\*2. EXPECTATIVAS TÉCNICAS\*\*

\- \[ \] Código revisado por al menos un compañero (code review)

\- \[ \] Pruebas unitarias escritas y pasando (cobertura mínima 80%)

\- \[ \] Pruebas de integración pasan

\- \[ \] No hay errores de linting

\- \[ \] Código sigue estándares definidos en guía de estilos

\*\*3. EXPECTATIVAS DE ENTREGA\*\*

\- \[ \] Desplegado en entorno de staging para validación

\- \[ \] Pruebas de humo realizadas en staging

\- \[ \] Documentación de API actualizada (si aplica)

\- \[ \] Migraciones de base de datos automatizadas y probadas

\*\*4. ESTÁNDARES Y EXPECTATIVAS DEL SECTOR\*\*

\- \[ \] Cumple con normativas de protección de datos (GDPR/ley local)

\- \[ \] Accesibilidad básica (WCAG 2.1 nivel AA)

\- \[ \] Trazabilidad de cambios para auditoría

\*\*5. EXPECTATIVAS DE LA ORGANIZACIÓN\*\*

\- \[ \] Alineado con la guía de estilos corporativa

\- \[ \] Mensajes de commit siguen convención establecida

\- \[ \] Riesgos de seguridad evaluados

\*\*6. REQUISITOS NO FUNCIONALES\*\*

\- \[ \] Tiempo de respuesta \< 2 segundos para operaciones normales

\- \[ \] Soporte para navegadores definidos (Chrome, Firefox, Edge)

\- \[ \] Diseño responsive funciona en tablets y móviles

\- \[ \] Manejo de concurrencia probado (múltiples usuarios simultáneos)

**\
**

**5.5 Prompt 5: Mejora basada en Métricas DORA**

**Prompt Completado para el Proyecto**

Las métricas DORA son 4 métricas fundamentales para medir el rendimiento
de entrega.

En nuestro proceso actual de entrega de la Plataforma Kanban hemos
logrado los

siguientes resultados promedio:

\- \*\*Tiempo de entrega del cambio:\*\* 3 días (desde commit hasta
producción)

\- \*\*Frecuencia de despliegue:\*\* Una vez por semana

\- \*\*Tasa de fallo de cambio:\*\* 15% (3 de cada 20 despliegues causan
incidentes)

\- \*\*Tiempo de recuperación fallido:\*\* 6 horas promedio

Ahora, queremos mejorar nuestro proceso para convertirnos en un Equipo
Scrum de

Élite con las siguientes expectativas:

\- \*\*Tiempo de entrega del cambio:\*\* Menos de 1 día

\- \*\*Frecuencia de despliegue:\*\* Bajo demanda (2-3 despliegues por
día)

\- \*\*Tasa de fallo de cambio:\*\* Menos del 5%

\- \*\*Tiempo de recuperación fallido:\*\* Menos de 1 hora

Elabora una lista de mejoras:

\*\*MEJORAS PARA TIEMPO DE ENTREGA\*\*

1\. Implementar integración continua automatizada

2\. Reducir tamaño de las historias (historias más pequeñas y
frecuentes)

3\. Automatizar pruebas de regresión

4\. Mejorar branching strategy (trunk-based development)

\*\*MEJORAS PARA FRECUENCIA DE DESPLIEGUE\*\*

1\. Automatizar despliegue a producción (CI/CD completo)

2\. Feature flags para activar/desactivar funcionalidades

3\. Despliegues azul/verde para cero downtime

4\. Eliminar aprobaciones manuales innecesarias

\*\*MEJORAS PARA TASA DE FALLO\*\*

1\. Ampliar cobertura de pruebas unitarias

2\. Implementar pruebas automatizadas de integración

3\. Pruebas de rendimiento en staging antes de producción

4\. Canary releases (despliegue gradual)

\*\*MEJORAS PARA RECUPERACIÓN\*\*

1\. Monitoreo en tiempo real con alertas automáticas

2\. Rollback automático ante fallos críticos

3\. Playbooks de incidentes documentados y probados

4\. Sesiones post-mortem sin culpa

**5.6 Prompt 6: Resolución de Conflictos en el Equipo**

**Prompt Completado para el Proyecto**

Somos un equipo Scrum que trabaja en la Plataforma Kanban para Empresa
Edwin.

Recientemente, ha surgido un conflicto entre los desarrolladores del
back-end y

María, nuestra desarrolladora front-end.

María defiende que la lógica de validación de transiciones de estado
(ej. qué

movimientos están permitidos entre columnas) debe manejarse en el
front-end para

dar feedback inmediato al usuario. Los desarrolladores back-end
argumentan que

toda la lógica de negocio debe estar en el back-end por seguridad y
consistencia,

y que el front-end solo debe mostrar lo que el back-end valida.

El conflicto está escalando a discusiones acaloradas en las daily
meetings. Como

Scrum Master, debo intervenir.

Sé que debo ser imparcial. Utilizo dos preguntas para preparar el
terreno:

1\. ¿Hemos creado un incremento Done en los Sprints recientes? → No, el
último

Sprint no se completó una historia clave por este desacuerdo

2\. ¿Hemos alcanzado el objetivo de Sprint de los Sprints recientes? →
No, llevamos

dos Sprints sin cumplir objetivo completo

Plan de acción paso a paso:

\*\*PASO 1: REUNIÓN INDIVIDUAL (1:1)\*\*

\- Hablar con María para entender su perspectiva y preocupaciones

\- Hablar con cada desarrollador back-end para entender la suya

\- No tomar partido, solo escuchar y mostrar empatía

\*\*PASO 2: REUNIÓN DE EQUIPO FACILITADA\*\*

\- Convocar reunión específica para resolver el conflicto

\- Establecer reglas: respeto, turnos para hablar, enfoque en soluciones

\- Usar técnica \"¿Qué? ¿Y si? ¿Cómo?\" para explorar opciones

\*\*PASO 3: ENFOCAR EN EL OBJETIVO COMÚN\*\*

\- Recordar la visión del producto: experiencia de usuario fluida Y
datos consistentes

\- Presentar las dos preguntas iniciales (incremento Done y objetivo
cumplido)

\- Preguntar: \"¿Cómo podemos lograr ambos objetivos?\"

\*\*PASO 4: EXPLORAR SOLUCIONES TÉCNICAS\*\*

\- Opción híbrida: validación básica en front-end (UX) + validación
completa en back-end (seguridad)

\- Caché de reglas en front-end sincronizado vía WebSockets

\- Definir claramente qué reglas pueden estar en front-end y cuáles no

\*\*PASO 5: DECISIÓN COLABORATIVA\*\*

\- Votar la solución que mejor equilibre UX y seguridad

\- Documentar el acuerdo en la Definición de Hecho

\- Probar en el próximo Sprint y revisar en retrospectiva

\*\*PASO 6: SEGUIMIENTO\*\*

\- Verificar que la solución implementada funciona

\- Celebrar el primer incremento Done tras el acuerdo

\- Reforzar la colaboración alcanzada

**\
**

**6. PARTE V: MATRIZ DE INTEGRACIÓN PROYECTO-CONCEPTOS**

**6.1 Relación de Conceptos con Componentes del Proyecto**

  ------------------------------------------------------------------------
  Concepto           Componente del Proyecto     Implementación Específica
  ------------------ --------------------------- -------------------------
  Tiempo de Ciclo    Diagrama de Estados         Medición en cada
                                                 transición de estado

  T-Sizes            Creación de Orden           Selector de talla en
                                                 formulario

  WBS                Planificación del Proyecto  Desglose de entregables
                                                 (sección 2.3)

  Ley de Little      Panel de Métricas           Cálculo en tiempo real
                                                 WIP/Throughput
  ------------------------------------------------------------------------

**6.2 Relación de Prompts con Fases del Proyecto**

  ----------------------------------------------------------------------------
  Prompt                   Fase del Proyecto              Aplicación
  ------------------------ ------------------------------ --------------------
  Objetivos de Sprint      Durante todo el proyecto       Cada 2 semanas

  Objetivos de Producto    Inicio y cada hito             Mensual/trimestral

  Eliminación de           Durante desarrollo             Cuando surjan
  Impedimentos                                            

  Definición de Hecho      Inicio (definición) +          Establecer y mejorar
                           refinamiento continuo          

  Métricas DORA            Retrospectivas                 Evaluar mejora
                                                          continua

  Resolución de Conflictos Cuando necesario               Facilitación por
                                                          Scrum Master
  ----------------------------------------------------------------------------

**\
**

**6.3 Mapa de Navegación del Proyecto Integrado**

VISIÓN DEL PRODUCTO (Empresa Edwin)

↓

OBJETIVOS DE PRODUCTO (SMART) ← Prompt 2

↓

WBS (Desglose del trabajo) ← Sección 2.3

↓

OBJETIVOS DE SPRINT (FOCUS) ← Prompt 1 (cada 2 semanas)

↓

T-Sizes (Estimación de historias) ← Sección 2.2

↓

DESARROLLO CON DEFINICIÓN DE HECHO ← Prompt 4

↓

MÉTRICAS (Tiempo de Ciclo, DORA) ← Secciones 2.1 y Prompt 5

↓

↙ ↘

IMPEDIMENTOS (Prompt 3) CONFLICTOS (Prompt 6)

↘ ↙

RETROSPECTIVA

↓

MEJORA CONTINUA (Ley de Little) ← Sección 2.4

↓

NUEVO SPRINT

**\
**

**7. CONCLUSIONES Y PRÓXIMOS PASOS**

**7.1 Valor del Proyecto**

El desarrollo de la **Plataforma de Gestión de Proyectos estilo
Kanban** para Empresa Edwin, enriquecida con los conceptos fundamentales
y prompts profesionales, representa:

1.  **Para el Cliente (Empresa Edwin):**

    - Visibilidad total del flujo de paquetes en tiempo real

    - Reducción de tiempos de ciclo mediante identificación de cuellos
      de botella

    - Asignación optimizada de repartidores basada en tallas de envío

    - Predicción precisa de entregas usando Ley de Little

2.  **Para el Equipo (Astra Company):**

    - Marco de trabajo ágil con objetivos claros (FOCUS, SMART)

    - Definición compartida de calidad (DoD)

    - Métricas objetivas para mejora continua (DORA)

    - Herramientas para resolver conflictos y eliminar impedimentos

**7.2 Cumplimiento de Objetivos**

  -----------------------------------------------------------------------
  Objetivo Específico                         Cómo se Cumple
  ------------------------------------------- ---------------------------
  Tablero Kanban digital                      Diseño completo en sección
                                              3

  Sistema de roles                            Casos de uso y WBS

  Notificaciones en tiempo real               Diagrama de componentes

  Historial de cambios                        Diagrama de estados

  Chat interno                                WBS (1.2.3.6)

  Sincronización tiempo real                  Diagrama de secuencia
  -----------------------------------------------------------------------

**\
**

**7.3 Próximos Pasos**

**Fase 1 (Sprint 1-2):**

- Configurar entorno de desarrollo

- Implementar tablero básico con columnas principales

- Crear formulario de órdenes con T-Sizes

**Fase 2 (Sprint 3-4):**

- Implementar sistema de autenticación y roles

- Desarrollar módulo de asignación de repartidores

- Integrar métricas básicas (tiempo de ciclo)

**Fase 3 (Sprint 5-6):**

- Añadir notificaciones en tiempo real

- Implementar chat interno

- Panel de métricas completo (DORA, Ley de Little)

**Fase 4 (Sprint 7-8):**

- Pruebas de usuario con Empresa Edwin

- Ajustes basados en feedback

- Despliegue en producción

**7.4 Recomendación Final**

El proyecto se considera **VIABLE y ALTAMENTE RECOMENDABLE** para
implementación inmediata, basado en:

1.  **Documentación sólida:** Especificaciones técnicas completas

2.  **Alineación con necesidades:** Solución directa a problemas
    operativos

3.  **Fundamentación teórica:** Conceptos validados (Tiempo de Ciclo,
    T-Sizes, WBS, Ley de Little)

4.  **Herramientas prácticas:** Prompts profesionales para gestión ágil

5.  **Plan realista:** Cronograma alcanzable con hitos definidos

**ANEXOS**

**Anexo A: Glosario del Proyecto**

  -----------------------------------------------------------------------
  Término                   Definición en el Proyecto
  ------------------------- ---------------------------------------------
  Tiempo de Ciclo           Tiempo desde \"Recibido\" hasta \"Entregado\"

  Talla (T-Size)            Clasificación de paquete (XS a XL)

  WIP                       Paquetes en columnas no finalizadas

  Throughput                Paquetes entregados por hora/día

  DoD                       Lista de verificación para considerar algo
                            \"terminado\"

  DORA                      Métricas de rendimiento de entrega
  -----------------------------------------------------------------------

**Anexo B: Plantillas del Proyecto**

**Plantilla de Objetivo de Sprint**

Título: \[Nombre memorable\]

Objetivo: \[Qué lograremos en 2 semanas\]

Métrica de éxito: \[Cómo mediremos\]

Porqué: \[Razón última para el negocio\]

**Plantilla de Definición de Hecho (Checklist)**

\- \[ \] Código revisado por par

\- \[ \] Pruebas unitarias pasan (\>80% cobertura)

\- \[ \] Documentación actualizada

\- \[ \] Desplegado en staging

\- \[ \] Aceptado por Product Owner

\- \[ \] Pruebas de humo exitosas

  -----------------------------------------------------------------------
  Documento preparado por:        Astra Company
  ------------------------------- ---------------------------------------
  Cliente:                        Empresa Edwin

  Propósito:                      Rúbrica y Guía de Gestión Ágil para
                                  Plataforma Kanban

  Versión:                        2.0 (Integrada con conceptos y prompts)

  Fecha:                          25 de Febrero de 2026

  Próxima revisión:               25 de Marzo de 2026
  -----------------------------------------------------------------------
