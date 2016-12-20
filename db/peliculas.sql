-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-12-2016 a las 15:53:04
-- Versión del servidor: 10.1.19-MariaDB
-- Versión de PHP: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `experiencia4`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `nombre` varchar(70) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `fecha_estreno` date NOT NULL,
  `genero` varchar(40) NOT NULL COMMENT 'Tabla de Genero'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`nombre`, `descripcion`, `fecha_estreno`, `genero`) VALUES
('Assassin''s Creed', 'Callum descubre que es el descendiente de una misteriosa sociedad secreta', '2016-12-23', 'Acción, Aventura, Ciencia Ficción'),
('Underworld: Guerras de Sangre', 'Continua con la Vampire death dealer, Selene (Kate Beckinsale) tras eludir los brutales ataques que recibió de los licántropos y de los vampiros que la traicionaron. Junto a su único aliado, David (Theo James)', '2017-01-13', 'Terror, Acción'),
('Passengers', 'Jennifer Lawrence y Chris Pratt son dos pasajeros a bordo de una nave espacial ', '2016-12-30', ' Ciencia Ficción, Acción'),
('Fast and Furious 8', 'una misteriosa mujer seduce a Dom para arrastrarlo al mundo del crimen del que parece no poder escapar', '2017-01-13', ' Acción, Thriller');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`descripcion`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
