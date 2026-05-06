# 📊 INFORME DE AVANCE - CICLO DevOps COMPLETO

**Proyecto:** Plataforma de Gestión de Proyectos Estilo Kanban  
**Fecha:** 5 Mayo 2026

---

## 👥 EQUIPO DE TRABAJO

| Rol | Nombre | Responsabilidades |
|-----|--------|-------------------|
| **Líder de Proyecto** | Víctor Manuel González Ruiz | Coordinación general, decisiones finales, configuración de herramientas, despliegue, reportes al profesor |
| **Coordinador de Desarrollo** | Hernández Jesús David | Supervisión técnica, revisión de código, asignación de tareas, reporte de avances al líder |
| **Desarrollador Backend** | Hernández Segundo Adrián | Implementación de backend (PHP/MySQL), API REST, lógica de negocio, commits |
| **Desarrollador Frontend** | Martínez Julián Luis Uriel | Implementación de frontend (HTML/CSS/JS), tablero Kanban, UI/UX, documentación |

---

## 📋 RESUMEN GENERAL

| Indicador | Valor |
|-----------|-------|
| **Fases del ciclo DevOps** | 9 fases |
| **Actividades completadas** | 32 de 41 (78%) |
| **Horas totales invertidas** | 83 horas |
| **Estado general** | 🟢 85% completado |

---

## ✅ LO QUE YA ESTÁ COMPLETADO

### 1. PLANIFICACIÓN (Plan) - 100% ✅

| Actividad | Responsable | Estado | Horas | Evidencia |
|-----------|-------------|--------|-------|-----------|
| Definición de objetivos | Víctor | ✅ | 2 | `docs/objetivos.md` |
| Recopilación de requisitos | Adrián, David | ✅ | 4 | 20 RF + 15 RNF |
| Fragmentación de tareas (Backlog) | Víctor | ✅ | 6 | 173 PBIs documentados |
| Priorización ágil (MoSCoW) | Víctor | ✅ | 2 | Tabla de prioridades |
| Estimación de esfuerzos | Víctor | ✅ | 3 | Story Points + horas |
| Planificación de seguridad | David | ✅ | 3 | Modelado de amenazas |
| Selección de herramientas | Víctor | ✅ | 2 | WampServer, Git, GitHub, OpenCode |

**Horas invertidas en Planificación:** 22 horas

---

### 2. CODIFICACIÓN (Code) - 100% ✅

| Actividad | Responsable | Estado | Horas | Evidencia |
|-----------|-------------|--------|-------|-----------|
| Configuración del entorno local | Adrián | ✅ | 2 | WampServer funcionando |
| Creación de ramas (Branching) | Víctor | ✅ | 1 | `master`, `develop`, `feature/seguridad` |
| Desarrollo backend (PHP/MySQL) | Adrián | ✅ | 12 | APIs, lógica de negocio |
| Desarrollo frontend (HTML/CSS/JS) | Uriel | ✅ | 8 | Tablero Kanban, UI |
| Commits atómicos | Adrián, Uriel | ✅ | 2 | 43 archivos, 6,114 líneas |
| Sincronización con repositorio (Push) | Víctor | ✅ | 1 | GitHub actualizado |
| Solicitud de cambios (Pull Request) | David | ✅ | 1 | PR documentado |
| Revisión por pares (Code Review) | David | ✅ | 3 | OpenCode + capturas |
| Escaneo de seguridad estático | David | ✅ | 2 | OpenCode + 12 vulnerabilidades |
| Fusión (Merging) | Víctor | ✅ | 1 | `develop` → `master` |

**Horas invertidas en Codificación:** 31 horas

**Distribución por responsable:**
- Adrián (Backend): 14 horas
- Uriel (Frontend): 10 horas
- David (Coordinación/Code Review): 5 horas
- Víctor (Liderazgo/Integración): 2 horas

---

### 3. CONSTRUCCIÓN (Build) - 80% ✅

| Actividad | Responsable | Estado | Horas | Evidencia |
|-----------|-------------|--------|-------|-----------|
| Recuperación de dependencias | Adrián | ✅ | 1 | PHP/MySQL nativos |
| Compilación | Adrián | ✅ | 1 | PHP interpretado correctamente |
| Empaquetado | Víctor | ✅ | 2 | Estructura de carpetas organizada |
| Versionado de artefactos | Víctor | ✅ | 1 | Tag v1.0.0 en GitHub |
| Almacenamiento (Registry) | Víctor | ✅ | 1 | GitHub como repositorio central |

**Horas invertidas en Construcción:** 6 horas

---

### 4. PRUEBAS (Test) - 90% ✅

| Actividad | Responsable | Estado | Horas | Evidencia |
|-----------|-------------|--------|-------|-----------|
| Pruebas unitarias (backend) | Adrián | ✅ | 2 | `pruebas.md` |
| Pruebas de integración | Adrián, Uriel | ✅ | 2 | Base de datos conectada |
| Pruebas de seguridad | David | ✅ | 2 | Escaneo con OpenCode |
| Pruebas de interfaz (frontend) | Uriel | ✅ | 1 | Capturas del sistema |
| Reporte de pruebas | Uriel | ✅ | 2 | `docs/pruebas.md` con 7 capturas |

**Horas invertidas en Pruebas:** 9 horas

**Distribución por responsable:**
- Adrián: 4 horas
- Uriel: 3 horas
- David: 2 horas

---

### 5. LANZAMIENTO (Release) - 70% ✅

| Actividad | Responsable | Estado | Horas | Evidencia |
|-----------|-------------|--------|-------|-----------|
| Definición del Milestone | Víctor | ✅ | 1 | Sprints 1-16 definidos |
| Aprobación final | Profesor | ⏳ | - | Pendiente |
| Etiquetado (Tagging) | Víctor | ✅ | 1 | Tag v1.0.0 |
| Documentación (Changelog) | Uriel | ✅ | 2 | `CHANGELOG.md` |

**Horas invertidas en Lanzamiento:** 4 horas

---

### 6. DESPLIEGUE (Deploy) - 50% 🟡

| Actividad | Responsable | Estado | Horas | Evidencia |
|-----------|-------------|--------|-------|-----------|
| Aprovisionamiento de infraestructura | Adrián | ✅ | 2 | WampServer local |
| Configuración de entorno | David | ✅ | 1 | Variables definidas |
| Ejecución del despliegue | Víctor | ⏳ | - | Pendiente (servidor en nube) |

**Horas invertidas en Despliegue:** 3 horas

---

### 7. OPERACIÓN (Operate) - 30% 🟡

| Actividad | Responsable | Estado | Horas | Evidencia |
|-----------|-------------|--------|-------|-----------|
| Gestión de la configuración | David | ✅ | 1 | `README.md` documentado |
| Gestión de backups | Víctor | ✅ | 1 | GitHub como respaldo |
| Gestión de incidentes | Equipo | ⏳ | - | Pendiente de definir |

**Horas invertidas en Operación:** 2 horas

---

### 8. MONITORIZACIÓN (Monitor) - 25% 🟡

| Actividad | Responsable | Estado | Horas | Evidencia |
|-----------|-------------|--------|-------|-----------|
| Recolección de Logs | Adrián | ⏳ | - | Planificado |
| Seguimiento de métricas | Víctor | ✅ | 1 | KPIs definidos |
| Configuración de alertas | Uriel | ⏳ | - | Opcional |

**Horas invertidas en Monitorización:** 1 hora

---

### 9. RETROALIMENTACIÓN (Feedback Loop) - 100% ✅

| Actividad | Responsable | Estado | Horas | Evidencia |
|-----------|-------------|--------|-------|-----------|
| Sprint Reviews | Equipo | ✅ | 2 | Documentadas (Sprints 1-11) |
| Sprint Retrospectives | Equipo | ✅ | 2 | Documentadas |
| Lecciones aprendidas | Víctor | ✅ | 1 | `CHANGELOG.md` |

**Horas invertidas en Retroalimentación:** 5 horas

---

## 📊 TABLA RESUMEN DE HORAS POR RESPONSABLE

| Responsable | Rol | Horas | % del proyecto |
|-------------|-----|-------|----------------|
| **Víctor** | Líder de Proyecto | 20 | 24% |
| **David** | Coordinador de Desarrollo | 18 | 22% |
| **Adrián** | Desarrollador Backend | 24 | 29% |
| **Uriel** | Desarrollador Frontend | 21 | 25% |
| **TOTAL** | | **83 horas** | **100%** |

---

## 📊 TABLA RESUMEN DE HORAS POR FASE

| Fase | Horas | % Completado | Estado |
|------|-------|--------------|--------|
| Planificación | 22 | 100% | ✅ |
| Codificación | 31 | 100% | ✅ |
| Construcción | 6 | 80% | 🟡 |
| Pruebas | 9 | 90% | ✅ |
| Lanzamiento | 4 | 70% | 🟡 |
| Despliegue | 3 | 50% | 🟡 |
| Operación | 2 | 30% | 🟡 |
| Monitorización | 1 | 25% | 🟡 |
| Retroalimentación | 5 | 100% | ✅ |
| **TOTAL** | **83** | **78%** | - |

---

## 📈 DISTRIBUCIÓN DE HORAS POR FASE

Planificación ████████████████████ 22h (26%)
Codificación ███████████████████████████████ 31h (37%)
Construcción ██████ 6h (7%)
Pruebas █████████ 9h (11%)
Lanzamiento ████ 4h (5%)
Despliegue ███ 3h (4%)
Operación ██ 2h (2%)
Monitorización █ 1h (1%)
Retroalimentación █████ 5h (6%)


---

## 📋 LO QUE FALTA POR HACER

| Prioridad | Actividad | Responsable | Fase | Horas |
|-----------|-----------|-------------|------|-------|
| 🔥 ALTA | Aprobación final del profesor | Profesor | Lanzamiento | 1 |
| 🔥 ALTA | Corrección vulnerabilidades críticas (7) | Adrián | Codificación | 4 |
| 🔥 ALTA | Eliminar archivos expuestos | Adrián | Seguridad | 1 |
| 🟡 MEDIA | Mover `.git` fuera del root web | Víctor | Despliegue | 1 |
| 🟡 MEDIA | Configurar sesiones seguras | David | Codificación | 2 |
| 🟡 MEDIA | Sanitizar salida en `tablero.js` (XSS) | Uriel | Codificación | 2 |
| 🟢 BAJA | Desplegar en servidor en la nube | Víctor | Despliegue | 4 |
| 🟢 BAJA | Configurar monitoreo y alertas | Uriel | Monitorización | 3 |
| 🟢 BAJA | Pruebas automatizadas | Adrián | Pruebas | 4 |

**Horas estimadas para completar:** 22 horas

---

## 🎯 CONCLUSIONES

### Logros alcanzados

- ✅ 83 horas invertidas en el proyecto (equipo de 4 personas)
- ✅ 32 actividades completadas de 41 (78%)
- ✅ Sistema Kanban funcional con 43 archivos y 6,114 líneas de código
- ✅ Documentación completa (RF, RNF, Backlog, CHANGELOG, README)
- ✅ Code Review y escaneo de seguridad con OpenCode (liderado por David)
- ✅ 12 vulnerabilidades identificadas (7 críticas, 4 altas, 5 medias)
- ✅ Reporte de pruebas con 7 funcionalidades verificadas (Uriel)
- ✅ Backend funcional con API REST (Adrián)
- ✅ Tablero Kanban con drag-and-drop (Uriel)

### Lecciones aprendidas por rol

| Rol | Lección |
|-----|---------|
| **Líder (Víctor)** | La planificación inicial (22 horas) fue clave para evitar retrabajos |
| **Coordinador (David)** | El Code Review temprano detectó vulnerabilidades que podrían haber sido costosas después |
| **Backend (Adrián)** | Las consultas preparadas son esenciales para prevenir SQL injection |
| **Frontend (Uriel)** | Sanitizar `innerHTML` previene XSS, una vulnerabilidad crítica |

### Próximos pasos

1. **Corregir vulnerabilidades críticas** (Adrián, 4 horas)
2. **Sanitizar salida en JavaScript** (Uriel, 2 horas)
3. **Configurar sesiones seguras** (David, 2 horas)
4. **Obtener aprobación del profesor** (Víctor, 1 hora)
5. **Desplegar en servidor en la nube** (Víctor, 4 horas, opcional)

---

## 📎 DOCUMENTOS RELACIONADOS

- [Reporte de pruebas](./pruebas.md)
- [Code Review con OpenCode](./codereview.md)
- [CHANGELOG](../CHANGELOG.md)
- [README](../README.md)
- [Repositorio GitHub](https://github.com/LovelyStoOk/PLATAFORMA-DE-GESTI-N-DE-PROYECTOS-ESTILO-KANBAN)

---

**Elaborado por:** Víctor Manuel González Ruiz (Líder de Proyecto)  
**Fecha:** 5 Mayo 2026
