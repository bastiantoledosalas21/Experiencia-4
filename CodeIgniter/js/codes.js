/*
* @Author: Miguel González Aravena
* @Email: miguel.gonzalez.93@gmail.com
* @Github: https://github.com/MiguelGonzalezAravena
* @Date: 2016-12-05 01:27:53
* @Last Modified by: Miguel GonzÃ¡lez Aravena
* @Last Modified time: 2016-12-06 01:39:41
*/
$(document).ready(function() {
  var tabla = $('#peliculas').DataTable({
    ajax: 'peliculas/listarPeliculas',
    responsive: true,
    dom: 'Bfrtip',
    buttons: [
      {
        text: '<i class="glyphicon glyphicon-plus"></i> Agregar peliculas',
        class: 'btn btn-success',
        action: function (e, dt, node, config) {
          bootbox.dialog({
            title: 'Agregar Peliculas',
            message: '' +
            '<div class="form-group">' +
              '<div class="input-group">' +
                '<span class="input-group-addon">' +
                  '<i class="glyphicon glyphicon-barcode"></i>' +
                '</span>' +
                '<input type="text" id="agregar_pelicula" class="form-control" placeholder="Nombre de Pelicula" required>' +
              '</div>' +
            '</div>' +
            '<div class="form-group">' +
              '<div class="input-group">' +
                '<span class="input-group-addon">' +
                  '<i class="glyphicon glyphicon-barcode"></i>' +
                '</span>' +
                '<input type="text" id="agregar_descripcion" class="form-control" placeholder="Descripcion" required>' +
              '</div>' +
            '</div>',
          '<input type="date" id="agregar_fecha_estreno" class="form-control" placeholder="Fecha_estreno" required>' +
          '</div>' +
          '</div>',

        '<input type="date" id="agregar_genero" class="form-control" placeholder="genero" required>' +
        '</div>' +
        '</div>',
            buttons: {
              cancel: {
                label: 'Cancelar',
                className: 'btn btn-default',
                callback: function() {
                  bootbox.hideAll();
                }
              },
              ok: {
                label: 'Agregar',
                className: 'btn btn-success',
                callback: function(e) {
                  e.preventDefault();
                  tabla.row.add({
                    "nombre": $('#agregar_nombre').val(),
                    "descripcion": $('#agregar_descripcion').val(),
                    "Fecha_estreno": $('#agregar_fecha_estreno').val(),
                    "genero": $('#agregar_genero').val()
                  }).draw();

                  $.ajax({
                    url: 'Peliculas/agregar',
                    method: 'post',
                    data: {
                      nombre: $('#agregar_nombre').val(),
                      descripcion: $('#agregar_descripcion').val(),
                      fecha_estreno: $('#agregar_fecha_estreno').val(),
                      genero: $('#agregar_genero').val(),

                    }
                  })
                  .fail(function(err) {
                    notificacion('Error al agregar la Pelicula: ' + err, 'error');
                  })
                  .done(function(data) {
                    notificacion(data.mensaje, 'success');
                  });
                  ;
                }
              }
            }

          });
        }
      }
    ],
    columns: [
      {data: 'nombre', title: 'Nombre'},
      {data: 'descripcion', title: 'Descripcion'},
      {data: 'fecha_estreno', title: 'Fecha_estreno'},
      {data: 'genero', title: 'Genero'},
      {
        render: function(data, type, row, meta) {
          var publicado = row.publicado;
          return '' +
          '<div class="form-group">' +
            '<div class="btn-group">' +
              '<button type="button" class="btn-editar btn btn-xs btn-primary">' +
                '<i class="glyphicon glyphicon-pencil"></i> Editar' +
              '</button>' +
              '<button type="button" class="btn-eliminar btn btn-xs btn-danger">' +
                '<i class="glyphicon glyphicon-trash"></i> Eliminar' +
              '</button>' +
            '</div>' +
          '</div>';
        },
        title: 'Opciones',
        orderable: false
      }
    ],
    rowCallback: function(row, data) {
      var $row = $(row);
      $row.find('.btn-editar').unbind('click').on('click', btnEditarEvent);
      $row.find('.btn-eliminar').unbind('click').on('click', btnEliminarEvent);
    },
    order: [[0, 'desc']]
  });

  function btnEditarEvent() {
    var fila = $(this).closest('tr'),
    peliculas = tabla.row(fila).data(),
    nombre = peliculas.nombre,
    descripcion = peliculas.descripcion,
    fecha_estreno = peliculas.fecha_estreno,
    genero = peliculas.genero,
    ;

    console.log('Editar Pelicula con id ' + nombre);
    bootbox.dialog({
      title: 'Editar Pelicula',
      message: '' +
      '<div class="form-group">' +
        '<div class="input-group">' +
          '<span class="input-group-addon">' +
            '<i class="glyphicon glyphicon-tag"></i>' +
          '</span>' +
          '<input type="text" id="editar_nombre" class="form-control" value="' + nombre + '" placeholder="Nombre de Pelicula">' +
        '</div>' +
      '</div>' +
      '<div class="form-group">' +
        '<div class="input-group">' +
          '<span class="input-group-addon">' +
            '<i class="glyphicon glyphicon-tag"></i>' +
          '</span>' +
          '<input type="text" id="editar_descripcion" class="form-control" value="' + descripcion + '" placeholder="Descripcion Pelicula">' +
          '<input type="date" id="editar_fecha" class="form-control" value="' + fecha_estreno + '" placeholder="Fecha De Estreno">' +
          '<input type="text" id="editar_genero" class="form-control" value="' + genero + '" placeholder="Genero Pelicula">' +
        '</div>' +
      '</div>',
      buttons: {
        cancel: {
          label: 'Cancelar',
          className: 'btn btn-default',
          callback: function() {
            bootbox.hideAll();
          }
        },
        ok: {
          label: 'Guardar',
          className: 'btn btn-primary',
          callback: function(e) {
            e.preventDefault();
            $.ajax({
              url: 'peliculas/listarPeliculas',
              method: 'get',
              cache: false
            })
            .done((data) => {
              tabla
                .clear()
                .rows.add(data.data)
                .draw();
            });

            $.ajax({
              url: 'peliculas/editar',
              method: 'post',
              data: {
                nombre: $('#editar_nombre').val(),
                descripcion: $('#editar_descripcion').val(),
                fecha_estreno: $('#editar_fecha').val(),
                genero: $('#editar_genero').val(),
              }
            })
            .fail(function(err) {
              notificacion('Error al editar la Pelicula: ' + err, 'error');
            })
            .done(function(data) {
              notificacion(data.mensaje, 'success');
            });
            ;
          }
        }
      }

    });
  }

  function btnEliminarEvent() {
    var fila = $(this).closest('tr'),
    peliculas = tabla.row(fila).data(),
    nombre = peliculas.nombre,
    ;
    bootbox.confirm('¿Estás seguro que deseas <b>eliminar</b> esta Pelicula?', function(confirm) {
      console.log(id);
      if(confirm) {
        // Eliminar dato de la tabla
        tabla.row(fila).remove().draw();

        // Realizar petición ajax para eliminar
        $.ajax({
          url: 'peliculas/eliminar',
          method: 'POST',
          data: {nombre: nombre}
        })
        .fail(function(err) {
          notificacion('Error al eliminar la pelicula: ' + err, 'error');
        })
        .done(function(data) {
          notificacion(data.mensaje, 'success');
        });
      }
    });
  }

  function notificacion(mensaje, tipo) {
    // Generar notificación.
    noty({
      text: mensaje,
      dismissQueue: true,
      force: true,
      animation: {
        open  : 'animated fadeIn',
        close : 'animated fadeOut',
        easing: 'swing',
        speed : 500
      },
      layout: 'center',
      theme: 'bootstrapTheme',
      type: tipo,
      timeout: 1500
    });
  }
});
