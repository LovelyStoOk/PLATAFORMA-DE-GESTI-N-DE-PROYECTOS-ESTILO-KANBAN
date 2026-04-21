# Archivo: EVIDENCIA DE SPRINT PLANNING Sprint 2.pdf

*Total de páginas: 12*

## Página 1

EVIDENCIA DE SPRINT PLANNING - SPRINT 12 (CORREGIDO) 
SPRINT 12: Administración de la Configuración y Flujo DevOps 
Concepto Detalle 
Sprint Sprint 12 
Fecha 16 Marzo 2026 
Hora 10:00 AM - 12:00 PM (2 horas) 
Lugar WhatsApp 
Facilitador Víctor Manuel González Ruiz (Líder de Proyecto) 
Objetivo del 
Sprint 
"Implementar el flujo completo de administración de la configuración: control de 
versiones, Dockerización y despliegue continuo" 
 
  

## Página 2

EQUIPO Y ROLES ACTUALIZADOS 
 
Rol Responsable Responsabilidades 
Líder de Proyecto Víctor Manuel 
González Ruiz 
Coordinación general, decisiones finales, configuración 
DevOps, revisión de entregables 
Líder Técnico / 
Coordinador de 
Desarrollo 
Hernández Jesús 
David 
Supervisión técnica, revisión de código, coordinación de 
actividades diarias, reporte de avances a Víctor, 
asignación de tareas a Adrián y Uriel 
Desarrollador 
Backend 
Hernández 
Segundo Adrián 
Implementación de backend, commits, resolución de 
conflictos 
Desarrollador 
Frontend 
Martínez Julián 
Luis Uriel 
Implementación de frontend, commits, Dockerización 
frontend 
 
  

## Página 3

ESTRUCTURA DE COMUNICACIÓN Y REPORTE 
                    ┌─────────────────┐ 
                    │   Víctor (Líder) │ 
                    │  Visión global   │ 
                    └────────┬────────┘ 
                             │ Reporta avances 
                                          ▼ 
              ┌─────────────────────────────┐ 
              │ David (Líder Técnico)       │ 
              │ Coordina, revisa, asigna    │ 
              └──────────────┬──────────────┘ 
                           ┌─────────┴─────────┐ 
                           ▼                                               ▼ 
        ┌─────────────────┐  ┌─────────────────┐ 
        │ Adrián (Backend)               │   │ Uriel (Frontend)│ 
        │ Ejecuta tareas                    │  │ Ejecuta tareas  │ 
        └─────────────────┘  └─────────────────┘ 
  

## Página 4

Flujo de trabajo: 
1. Víctor define objetivos y prioridades del Sprint 
2. David asigna tareas específicas a Adrián y Uriel 
3. Adrián y Uriel reportan avances DIARIAMENTE a David 
4. David consolida y reporta avances a Víctor CADA 2-3 DÍAS 
5. Víctor toma decisiones finales y revisa entregables 
 
  

## Página 5

SPRINT BACKLOG - SPRINT 12 
ID Tipo Descripción Asignada 
por 
Responsable Horas Criterio de éxito 
CONFIG-
01 
TB Configurar ramas en 
GitHub (main, develop, 
features) 
Víctor Víctor 2 Repositorio con estructura Git 
Flow 
CONFIG-
02 
TB Establecer reglas de 
protección para rama 
main 
Víctor Víctor 1 Pull requests obligatorios, 1 
approval 
CONFIG-
03 
TB Crear archivo .gitignore 
para backend y frontend 
Víctor Víctor 1 Node_modules, .env, archivos 
temporales ignorados 
CONFIG-
04 
TB Revisar código backend 
listo para commit 
David David 2 Código validado sin errores 
CONFIG-
05 
TB Realizar commit de 
código backend funcional 
David Adrián 3 Código subido a rama develop 
con mensaje claro 
CONFIG-
06 
TB Revisar código frontend 
listo para commit 
David David 2 Código validado sin errores 
CONFIG-
07 
TB Realizar commit de 
código frontend funcional 
David Uriel 3 Código subido a rama develop 
con mensaje claro 
CONFIG-
08 
TB Crear Dockerfile para 
backend 
David Adrián 3 Imagen construye sin errores 

## Página 6

CONFIG-
09 
TB Crear Dockerfile para 
frontend 
David Uriel 3 Imagen construye sin errores 
CONFIG-
10 
TB Revisar Dockerfiles y 
sugerir mejoras 
David David 2 Dockerfiles optimizados 
CONFIG-
11 
TB Crear docker-
compose.yml para 
orquestación 
Víctor Víctor 3 Backend + frontend + BD 
funcionan juntos 
CONFIG-
12 
TB Configurar GitHub Actions 
para CI 
Víctor Víctor 4 Pipeline ejecuta pruebas 
automáticamente 
CONFIG-
13 
TB Subir imágenes a Docker 
Hub 
Víctor Víctor 2 Imágenes disponibles en 
repositorio público 
CONFIG-
14 
TB Simular conflicto y 
resolución (Adrián y Uriel) 
David Adrián, Uriel 4 Ambos modifican mismo archivo, 
resuelven conflicto bajo 
supervisión de David 
CONFIG-
15 
TB Documentar flujo de 
trabajo en README.md 
David Uriel 3 README con instrucciones claras 
CONFIG-
16 
TB Revisar documentación 
final 
Víctor Víctor 2 Documentación completa y clara 
CONFIG-
17 
TB Prueba final: todos 
descargan imagen y 
verifican 
Víctor Todo el 
equipo 
2 Todos ejecutan docker-compose 
up con éxito 

## Página 7

TOTAL PBIs: 17 
TOTAL HORAS: 40 horas 
Fechas del Sprint: 16 Marzo - 27 Marzo 2026 
 
  

## Página 8

ACTA DE REUNIÓN - SPRINT PLANNING 
Asistente Rol Responsabilidades Firma 
Víctor Manuel 
González Ruiz 
Líder de Proyecto Visión global, decisiones finales, configuración 
DevOps 
✓ 
Hernández Jesús 
David 
Líder Técnico / Coordinador 
de Desarrollo 
Supervisión técnica, asignación de tareas, revisión de 
código, reporte a Víctor 
✓ 
Hernández Segundo 
Adrián 
Desarrollador Backend Implementación backend, commits, Docker ✓ 
Martínez Julián Luis 
Uriel 
Desarrollador Frontend Implementación frontend, commits, Docker ✓ 
 
  

## Página 9

ACUERDOS Y COMPROMISOS DEL SPRINT 
Acuerdo Detalle Responsable 
1 David reportará avances a Víctor cada 2-3 días por WhatsApp David 
2 Adrián y Uriel reportarán avances DIARIAMENTE a David Adrián, Uriel 
3 Todo commit debe ser revisado por David antes de subir Adrián, Uriel 
4 Los Pull Requests requieren aprobación de David o Víctor Todo el equipo 
5 La simulación de conflicto será supervisada por David David, Adrián, Uriel 
6 Al final del Sprint, David presentará resumen a Víctor David 
 
PLAN DE COMUNICACIÓN DIARIA 
Horario Actividad Participantes Canal 
9:00 AM Adrián reporta avances a David Adrián → David WhatsApp 
9:15 AM Uriel reporta avances a David Uriel → David WhatsApp 
9:30 AM David consolida información David - 
10:00 AM David responde dudas/asigna tareas David → Adrián, Uriel WhatsApp/Teams 
*Cada 2-3 días* David reporta avances a Víctor David → Víctor WhatsApp/Reunión corta 
 
  

## Página 10

MÉTRICAS DEL SPRINT PLANEADAS 
Métrica Meta Cómo se mide 
Commits exitosos 100% Todos los commits suben sin error 
Conflictos resueltos 100% Simulación completada con éxito 
Dockerfiles funcionales 100% Imágenes construyen sin error 
Participación en pruebas finales 100% Todo el equipo ejecuta docker-compose 
Reportes diarios de Adrián y Uriel 100% David confirma recepción diaria 
 
FIRMAS DE ASISTENCIA 
Nombre Rol Firma Fecha 
Víctor Manuel González Ruiz Líder de Proyecto Víctor G. 16/03/2026 
Hernández Jesús David Líder Técnico David H. 16/03/2026 
Hernández Segundo Adrián Desarrollador Backend Adrián H. 16/03/2026 
Martínez Julián Luis Uriel Desarrollador Frontend Uriel M. 16/03/2026 
 
  

## Página 11

ANEXO: DESCRIPCIÓN DE ROLES 
Líder de Proyecto (Víctor) 
• Define la visión y objetivos del proyecto 
• Toma decisiones finales sobre alcance y prioridades 
• Revisa entregables clave 
• Configura la infraestructura DevOps (GitHub, Docker Hub, CI/CD) 
• Recibe reportes consolidados de David 
Líder Técnico / Coordinador de Desarrollo (David) 
• Supervisa la calidad técnica del código 
• Asigna tareas diarias a Adrián y Uriel 
• Revisa commits y Pull Requests 
• Reporta avances a Víctor cada 2-3 días 
• Resuelve dudas técnicas del equipo 
• Coordina la simulación de conflictos 
Desarrollador Backend (Adrián) 
• Implementa funcionalidades del backend 
• Realiza commits siguiendo las guías establecidas 
• Crea y prueba Dockerfile para backend 

## Página 12

• Reporta avances DIARIAMENTE a David 
• Participa en simulación de conflictos 
Desarrollador Frontend (Uriel) 
• Implementa funcionalidades del frontend 
• Realiza commits siguiendo las guías establecidas 
• Crea y prueba Dockerfile para frontend 
• Reporta avances DIARIAMENTE a David 
• Documenta el flujo de trabajo en README 
 
