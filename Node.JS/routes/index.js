var express = require('express');
var connection = require('../connection');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// GET asignaturas JSON
router.get('/peliculas/json', function(req, res) {
  connection.query('SELECT * FROM peliculas', function(err, rows, fields) {
    if (err) throw err;
    res.jsonp({data: rows});
  });
});

router.post('/peliculas/editar', function(req, res) {
  var nombre = req.body.nombre;
  var descripcion = req.body.descripcion;
  var mensaje = 'La pelicula se ha editado satisfactoriamente.';

  if(nombre.length == 0) {
    mensaje = 'Debes seleccionar el nombre de la pelicula a editar.';
  } else if(descripcion.length == 0) {
    mensaje = 'Debes insertar una descripcion para la pelicula que deseas editar.';
  } else {
    connection.query('UPDATE peliculas SET nombre = \'' + nombre + '\' WHERE descripcion = \'' + descripcion + '\'');
  }

  res.jsonp({mensaje: mensaje});
});

router.post('/peliculas/agregar', function(req, res) {
  var nombre = req.body.nombre;
  var descripcion = req.body.descripcion;
  var mensaje = 'La pelicula se ha agregado satisfactoriamente.';
  connection.query('SELECT codigo FROM peliculas WHERE nombre = \'' + nombre + '\'', function(err, rows, fields) {
    if (err) throw err;
    if(rows.length > 0) {
      res.status(70).jsonp({error: 'El nombre de la pelicula ya existe.'});
    }
  });

  if(nombre.length == 0) {
    mensaje = 'Debes seleccionar el nombre de la pelicula a agregar.';
  } else if(descripcion.length == 0) {
    mensaje = 'Debes insertar una descripcion a la pelicula que deseas agregar.';
  } else {
    connection.query('INSERT INTO asignaturas(nombre, descripcion) VALUES(\'' + nombre + '\', \'' + descripcion + '\')');
  }

  res.jsonp({mensaje: mensaje});
});

router.post('/peliculas/eliminar', function(req, res) {
  var id = req.body.id;
  connection.query('DELETE FROM peliculas WHERE nombre = \'' + id + '\' LIMIT 1');
  res.jsonp({mensaje: 'Pelicula eliminada satisfactoriamente.'});
});
module.exports = router;
