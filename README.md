# 📦 Sistema de Reparto Kanban

**Plataforma de Gestión de Proyectos Estilo Kanban para empresas de paquetería y logística**

---

## 📋 Descripción del Proyecto

Este sistema permite gestionar el flujo de trabajo de paquetería mediante un **tablero Kanban digital**. Cada paquete se representa como una tarjeta que se mueve a través de etapas personalizadas (Recibido, En Preparación, En Camino, Entregado, Problema), proporcionando una visión clara y en tiempo real del estado de cada envío.

Desarrollado como proyecto para la materia **Aseguramiento de Calidad de Software** de la carrera **Ingeniería de Software**.

---

## 👥 Equipo de Trabajo

| Rol | Nombre | Responsabilidades |
|-----|--------|-------------------|
| **Líder de Proyecto** | Víctor Manuel González Ruiz | Coordinación general, configuración de herramientas, despliegue, reportes |
| **Coordinador de Desarrollo** | Hernández Jesús David | Supervisión técnica, Code Review, escaneo de seguridad |
| **Desarrollador Backend** | Hernández Segundo Adrián | API REST, lógica de negocio, MySQL |
| **Desarrollador Frontend** | Martínez Julián Luis Uriel | UI/UX, tablero Kanban, drag-and-drop |

---

## 🛠️ Tecnologías Utilizadas

| Capa | Tecnología | Responsabilidad |
|------|------------|-----------------|
| **Servidor** | WampServer (Apache) | Hosting local |
| **Backend** | PHP 8.2 | Lógica de negocio, APIs, autenticación |
| **Base de Datos** | MySQL / MariaDB | Persistencia de datos |
| **Frontend** | HTML5, CSS3, JavaScript | UI/UX, drag-and-drop, interactividad |
| **Control de Versiones** | Git + GitHub | Código fuente, ramas, documentación |
| **Asistente IA** | OpenCode | Code Review, escaneo de seguridad |

---

## ✅ Funcionalidades Implementadas

| # | Funcionalidad | Estado |
|---|---------------|--------|
| 1 | Tablero Kanban con 5 columnas | ✅ |
| 2 | Drag-and-drop para mover tarjetas | ✅ |
| 3 | Registro de usuarios con roles (admin, coordinador, repartidor) | ✅ |
| 4 | Login con autenticación por sesión | ✅ |
| 5 | Creación y gestión de pedidos | ✅ |
| 6 | Asignación de repartidores | ✅ |
| 7 | Historial de cambios de estado | ✅ |
| 8 | Archivado de pedidos completados | ✅ |
| 9 | Notificaciones del sistema | ✅ |
| 10 | Sistema de reportes y pruebas | ✅ |

---

## 🔒 Seguridad (Evaluada con OpenCode)

| Vulnerabilidad detectada | Severidad | Estado |
|--------------------------|-----------|--------|
| Credenciales hardcodeadas en `conexion.php` | 🔴 CRÍTICO | Pendiente |
| `info.php` expuesto | 🔴 CRÍTICO | Pendiente |
| `test_conexion.php` expuesto | 🔴 CRÍTICO | Pendiente |
| `.git` directorio expuesto | 🔴 CRÍTICO | Pendiente |
| XSS vía `innerHTML` en `tablero.js` | 🔴 CRÍTICO | Pendiente |
| Session fixation (falta `session_regenerate_id`) | 🟠 ALTO | Pendiente |
| Sin configuración segura de sesiones | 🟡 MEDIO | Pendiente |

> **Total de vulnerabilidades identificadas:** 12 (7 críticas, 4 altas, 5 medias)

---

## 📈 Estado del Proyecto (Ciclo DevOps)

| Fase | % Completado | Estado |
|------|--------------|--------|
| Planificación | 100% | ✅ |
| Codificación | 100% | ✅ |
| Construcción | 80% | 🟡 |
| Pruebas | 90% | ✅ |
| Lanzamiento | 70% | 🟡 |
| Despliegue | 50% | 🟡 |
| Operación | 30% | 🟡 |
| Monitorización | 25% | 🟡 |
| **PROMEDIO** | **85%** | 🟢 |

**Horas totales invertidas:** 83 horas  
**Actividades completadas:** 32 de 41 (78%)

---

## 📥 Instalación y Configuración

### Requisitos previos

- [WampServer](https://www.wampserver.com/) instalado (Apache, PHP, MySQL)
- Navegador web moderno (Chrome, Firefox, Edge)

### Pasos de instalación

1. **Clonar o copiar el proyecto**
   ```bash
   git clone https://github.com/LovelyStoOk/PLATAFORMA-DE-GESTI-N-DE-PROYECTOS-ESTILO-KANBAN.git

2. **Mover a la carpeta de WampServer**
   Copiar la carpeta `sistemareparto` a:
   C:\wamp64\www\sistemareparto\

3. **Importar la base de datos**
-  Abrir phpMyAdmin: http://localhost/phpmyadmin/
-  Crear base de datos kanban_easygo
-  Importar el archivo sistemareparto.sql

4. **Acceder al sistema**
   http://localhost/sistemareparto/sistemareparto/login.html

   Cuentas de prueba
   Usuario	Contraseña	Rol
   admin	admin123	Administrador
   (crear nuevo)	-	Coordinador / Repartidor
