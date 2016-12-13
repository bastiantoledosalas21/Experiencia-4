<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Peliculas extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

	public function __construct() {
		parent::__construct();
		$this->load->model('Peliculas_model');
	}

	public function vistaSimple() {
    $peliculas = $this->Peliculas_model->get_peliculas()->result();
    $data['peliculas'] = $peliculas;
    $this->load->view('tabla', $data);
	}

	public function index() {
		$this->load->template('welcome_message');
	}

	public function listarPeliculas() {
    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode(array('data' => ($this->Peliculas_model->get_peliculas() != false > 0 ? $this->Peliculas_model->get_peliculas()->result() : ''))));

	}
	public function eliminar() {
		$cod = $this->input->post('id');

		$this->Peliculas_model->delete_peliculas($cod);
		$this->output
		  ->set_content_type('application/json')
		  ->set_output(json_encode(array('mensaje' => 'Pelicula eliminada satisfactoriamente.')));
	}

	public function agregar() {
		$nom = $this->input->post('nombre');
		$des = $this->input->post('descripcion');
		$fecha= $this->input->post('fecha_estreno');
		$genero= $this->input->post('genero');


		$this->Peliculas_model->set_peliculas($nom, $des, $fecha, $genero);
    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode(array('mensaje' => 'La Pelicula se ha agregado satisfactoriamente.')));
	}

	public function editar() {
		$nom = $this->input->post('nombre');
		$des = $this->input->post('descripcion');
		$fecha= $this->input->post('fecha_estreno');
		$genero= $this->input->post('genero');

		$this->Peliculas_model->update_peliculas($nom, $des, $fecha, $genero);
		// La asignatura se ha editado satisfactoriamente.
    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode(array('mensaje' => 'La Pelicula se ha editado satisfactoriamente.')));
	}
}
