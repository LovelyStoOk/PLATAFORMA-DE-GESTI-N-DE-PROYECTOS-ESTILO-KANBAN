-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-05-2026 a las 05:04:34
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistemareparto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notificaciones`
--

CREATE TABLE `notificaciones` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `mensaje` text DEFAULT NULL,
  `leida` tinyint(4) DEFAULT 0,
  `id_pedido` varchar(20) DEFAULT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `notificaciones`
--

INSERT INTO `notificaciones` (`id`, `tipo`, `mensaje`, `leida`, `id_pedido`, `fecha_creacion`) VALUES
(12, 'cambio_estado', '⚠️ Estado cambiado a \'Problemas\' - Pedido: #ORD-002 (Carlos Nero Astro)', 1, '#ORD-002', '2026-05-01 02:59:45'),
(13, 'cambio_estado', '📥 Estado cambiado a \'Recibido\' - Pedido: #ORD-002 (Carlos Nero Astro)', 1, '#ORD-002', '2026-05-01 02:59:50'),
(14, 'cambio_estado', '🧺 Estado cambiado a \'Preparado\' - Pedido: #ORD-002 (Carlos Nero Astro)', 1, '#ORD-002', '2026-05-01 02:59:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `id_pedido` varchar(20) NOT NULL,
  `cliente` varchar(100) NOT NULL,
  `direccion` text NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `material` varchar(100) DEFAULT NULL,
  `peso` decimal(10,2) DEFAULT NULL,
  `paquetes` int(11) DEFAULT NULL,
  `distancia` decimal(10,2) DEFAULT NULL,
  `prioridad` enum('Baja','Normal','Alta') DEFAULT 'Normal',
  `estado` enum('Recibido','Preparado','En ruta','Completado','Problemas') DEFAULT 'Recibido',
  `id_almacen` int(11) DEFAULT NULL,
  `id_repartidor` int(11) DEFAULT NULL,
  `notas` text DEFAULT NULL,
  `tiempo_estimado` varchar(50) DEFAULT NULL,
  `tiempo_minutos` int(11) DEFAULT NULL,
  `tiempo_total` varchar(50) DEFAULT NULL,
  `firma` varchar(100) DEFAULT NULL,
  `incidencia` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `id_pedido`, `cliente`, `direccion`, `telefono`, `categoria`, `material`, `peso`, `paquetes`, `distancia`, `prioridad`, `estado`, `id_almacen`, `id_repartidor`, `notas`, `tiempo_estimado`, `tiempo_minutos`, `tiempo_total`, `firma`, `incidencia`) VALUES
(2, '#ORD-002', 'Carlos Nero Astro', 'Cerro Azul #188 Colonia Tokio', '5578530260', 'Insumos', 'Líquido', 20.00, 2, 56.00, 'Alta', 'Preparado', 5, 3, '0', '1h 7min', 67, NULL, NULL, '0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos_archivados`
--

CREATE TABLE `pedidos_archivados` (
  `id` int(11) NOT NULL,
  `id_pedido_original` int(11) NOT NULL,
  `id_pedido` varchar(20) NOT NULL,
  `cliente` varchar(100) NOT NULL,
  `direccion` text NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `peso` decimal(10,2) DEFAULT NULL,
  `paquetes` int(11) DEFAULT NULL,
  `distancia` decimal(10,2) DEFAULT NULL,
  `prioridad` enum('Baja','Normal','Alta') DEFAULT NULL,
  `estado_final` varchar(50) DEFAULT NULL,
  `notas` text DEFAULT NULL,
  `tiempo_estimado` varchar(50) DEFAULT NULL,
  `tiempo_total` varchar(50) DEFAULT NULL,
  `firma` varchar(100) DEFAULT NULL,
  `incidencia` text DEFAULT NULL,
  `fecha_completado` datetime DEFAULT NULL,
  `archivado_por` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedidos_archivados`
--

INSERT INTO `pedidos_archivados` (`id`, `id_pedido_original`, `id_pedido`, `cliente`, `direccion`, `telefono`, `categoria`, `peso`, `paquetes`, `distancia`, `prioridad`, `estado_final`, `notas`, `tiempo_estimado`, `tiempo_total`, `firma`, `incidencia`, `fecha_completado`, `archivado_por`) VALUES
(1, 1, '#ORD-001', 'Frank Suarez', 'Cerro Azul #188 Colonia Tokio', '5578530261', 'Electronica', 3.00, 1, 67.00, '', 'Completado', '0', '1h 20min', '1h 23min', 'Recibido por: FS', '0', '2026-05-01 04:25:16', 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajadores`
--

CREATE TABLE `trabajadores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido_paterno` varchar(50) NOT NULL,
  `apellido_materno` varchar(50) DEFAULT NULL,
  `id_trabajador` varchar(20) NOT NULL,
  `rfc` varchar(13) NOT NULL,
  `email` varchar(100) NOT NULL,
  `rol` varchar(50) NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `fecha_ingreso` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `trabajadores`
--

INSERT INTO `trabajadores` (`id`, `nombre`, `apellido_paterno`, `apellido_materno`, `id_trabajador`, `rfc`, `email`, `rol`, `telefono`, `fecha_ingreso`) VALUES
(1, 'Pedro', 'Hernández', 'Soto', 'REP-001', 'HESP920320DEF', 'pedro.repartidor@empresa.com', 'Repartidor', '55-3333-3333', NULL),
(2, 'Luis', 'Rodríguez', 'Vega', 'REP-002', 'ROVL880101GHI', 'luis.repartidor@empresa.com', 'Repartidor', '55-4444-4444', NULL),
(3, 'María', 'López', 'Cruz', 'REP-003', 'LOCM950101JKL', 'maria.repartidor@empresa.com', 'Repartidor', '55-5555-5555', NULL),
(4, 'Carlos', 'García', 'López', 'ALM-001', 'GALC900101ABC', 'carlos.almacen@empresa.com', 'Almacén', '55-1111-1111', NULL),
(5, 'Ana', 'Martínez', 'Ruiz', 'ALM-002', 'MARA850515XYZ', 'ana.almacen@empresa.com', 'Almacén', '55-2222-2222', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nombre_completo` varchar(100) NOT NULL,
  `rol` enum('administrador','supervisor','repartidor','almacen') NOT NULL,
  `activo` tinyint(4) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `password`, `nombre_completo`, `rol`, `activo`) VALUES
(1, 'admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Administrador Sistema', 'administrador', 1),
(2, 'repartidor1', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Pedro Repartidor', 'repartidor', 1),
(3, 'supervisor1', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Juan Supervisor', 'supervisor', 1),
(4, 'almacen1', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Carlos Almacén', 'almacen', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_pedido` (`id_pedido`);

--
-- Indices de la tabla `pedidos_archivados`
--
ALTER TABLE `pedidos_archivados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_trabajador` (`id_trabajador`),
  ADD UNIQUE KEY `rfc` (`rfc`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `pedidos_archivados`
--
ALTER TABLE `pedidos_archivados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `trabajadores`
--
ALTER TABLE `trabajadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
