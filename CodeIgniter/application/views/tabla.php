<h1>Tabla PHP</h1>

	<div id="body">
		<h1> Listando los datos cargados a la vista</h1>

		 <a href='<?php echo base_url('peliculas/agregar');?>'>Crear</a>
		<table class='table'>
			<tr>

				<td>nombre</td>
				<td>descripcion</td>
				<td>fecha_estreno</td>
				<td>genero</td>
			</tr>
			<?php foreach($peliculas as $a){ ?>
				<tr>
					<td> <?php echo $a->nombre; ?> </td>
					<td> <?php echo $a->descripcion; ?> </td>
					<td> <?php echo $a->fecha_estreno; ?> </td>
					<td> <?php echo $a->genero; ?> </td>
					<td>
						 <a href='<?php echo base_url('peliculas/eliminar')."?". $a->codigo; ?>'>Eliminar</a>
				    </td>
				</tr>
			<?php } ?>
		</table>
	</div>
