-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-03-2019 a las 17:24:28
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 5.6.40

SET SQL_MODE  "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT  0;
START TRANSACTION;
SET time_zone  "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fizzmod`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE mensajes  (
  Id_mensaje tinyint(200) NOT NULL,
  Cuerpo text COLLATE latin1_spanish_ci NOT NULL,
  Creado_en date NOT NULL,
  Actualizado_en date NOT NULL,
  Id_usuario tinyint(100) NOT NULL,
  Id_status tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `status_mensajes`
--

CREATE TABLE status_mensajes (
  Id_status tinyint(1) NOT NULL,
  Descripcion text COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `status_usuarios`
--

CREATE TABLE status_usuarios (
  Id_status tinyint(1) NOT NULL,
  Descripcion text COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE usuarios (
  Id_usuarios tinyint(100)  NOT NULL,
  Nombre varchar(30) COLLATE latin1_spanish_ci NOT NULL,
  Apellido varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  Nombre_de_usuario varchar(30) COLLATE latin1_spanish_ci NOT NULL,
  Email varchar(80) COLLATE latin1_spanish_ci NOT NULL unique,
  Creado_en date NOT NULL,
  Actualizado_en date NOT NULL,
  Id_status tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE mensajes
  ADD PRIMARY KEY (Id_mensaje);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE usuarios
  ADD PRIMARY KEY (Id_usuarios);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE mensajes
  MODIFY Id_mensaje tinyint 200 NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE usuarios
  MODIFY Id_usuarios tinyint 100 NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
