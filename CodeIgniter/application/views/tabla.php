<h1>Tabla PHP</h1>

	<div id="body">
		<h1> Listando los datos cargados a la vista</h1>
		
		 <a href='<?php echo base_url('asignaturas/agregar');?>'>Crear</a>
		<table class='table'> 
			<tr>
	
				<td>Codigo</td>
				<td>Descripcion</td>
				<td>Numero de Alumnos</td>
			</tr>			
			<?php foreach($asignaturas as $a){ ?>
				<tr>
				
					<td> <?php echo $a->codigo; ?> </td>
					<td> <?php echo $a->nombre; ?> </td>
					<td> <?php echo $a->numeroAlumnos; ?> </td>
					<td>
						 <a href='<?php echo base_url('asignaturas/eliminar')."?". $a->codigo; ?>'>Eliminar</a>
				    </td>
				</tr>
			<?php } ?>
		</table>
	</div>