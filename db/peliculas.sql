-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-12-2016 a las 16:10:56
-- Versión del servidor: 10.1.19-MariaDB
-- Versión de PHP: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `peliculas`
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
('Assassin''s Creed', 'Callum descubre que es el descendiente de una misteriosa sociedad secreta, los Assassins, y que posee increíbles conocimientos y habilidades que le permitirán enfrentarse a la poderosa y opresora organización de los Templarios en el presente.', '2016-12-23', 'Acción, Aventura, Ciencia Ficción'),
('Passengers', 'Jennifer Lawrence y Chris Pratt son dos pasajeros a bordo de una nave espacial camino de una nueva vida en otro planeta. El viaje cobra un giro letal cuando sus cápsulas de hibernación misteriosamente los hacen despertar 90 años antes de alcanzar su destino.', '2016-12-30', ' Ciencia Ficción, Acción'),
('Fast and Furious 8', 'una misteriosa mujer (la oscarizada Charlize Theron) seduce a Dom para arrastrarlo al mundo del crimen del que parece no poder escapar, traicionando a aquellos que más le importan, el equipo tendrá que afrontar desafíos que pondrán a todos a prueba hasta límites desconocidos. ', '2017-01-13', ' Acción, Thriller'),
('Underworld: Guerras de Sangre', 'Underworld: Guerras de Sangre, continua con la Vampire death dealer, Selene (Kate Beckinsale) tras eludir los brutales ataques que recibió de los licántropos y de los vampiros que la traicionaron. Junto a su único aliado, David (Theo James) y su padre Thomas (Charles Dance), debe poner fin a la eterna guerra entre los hombres lobo y los vampiros, aunque eso signifique un último sacrificio.', '2017-01-13', 'Terror, Acción');

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
