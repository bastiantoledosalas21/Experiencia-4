<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Peliculas extends CI_Controller {


	public function __construct() {
		parent::__construct();
		$this->load->model('Peliculas_model');
	}
	public function index() {
		$this->load->template('welcome_message');
	}

	public function json() {
    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode(array('data' => ($this->Peliculas_model->get_peliculas() != false > 0 ? $this->Peliculas_model->get_peliculas()->result() : ''))));
	}

	public function eliminar() {
		$nom = $this->input->post('id');

		$this->Peliculas_model->delete_pelicula($nom);
		$this->output
		  ->set_content_type('application/json')
		  ->set_output(json_encode(array('mensaje' => 'Pelicula eliminada satisfactoriamente.')));
	}

	public function agregar() {
		$nom = $this->input->post('nombre');
		$des = $this->input->post('descripcion');
		$fecha = $this->input->post('fecha_estreno');
		$gen = $this->input->post('genero');

		$this->Peliculas_model->set_pelicula($nom, $des, $alumno);
    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode(array('mensaje' => 'La Pelicula se ha agregado satisfactoriamente.')));
	}

	public function editar() {
		$nom = $this->input->post('nombre');
		$des = $this->input->post('descripcion');
		$fecha = $this->input->post('fecha_estreno');
		$gen= $this->input->post('genero');

		$this->Asignaturas_model->update_asignatura($cod, $nom,$fecha , $gen);
		// La asignatura se ha editado satisfactoriamente.
    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode(array('mensaje' => 'La pelicula se ha editado satisfactoriamente.')));
	}
}
