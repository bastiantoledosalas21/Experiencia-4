<?php
if(!defined('BASEPATH')) exit('No direct script access allowed');

class Peliculas_model extends CI_Model {

  public function __construct() {
    parent::__construct();
  }

  public function set_peliculas($nom, $des, $fecha, $genero) {
    $data = array(
      'nombre' => $nom,
      'descripcion' => $des,
      'fecha_estreno' => $fecha,
      'genero' => $genero,
    );

    $this->db->insert('peliculas', $data);
  }

  public function delete_peliculas($nom) {
    $data = array(
      'nombre' => $nom
    );

    $this->db->delete('peliculas', $data);
  }

  public function update_peliculas($nom, $des, $fecha, $genero) {
    $this->db->set('nombre', $nom);
    $this->db->set('descripcion', $des);
    $this->db->set('fecha_estreno', $fecha);
    $this->db->set('fecha_estreno', $genero);
    $this->db->update('peliculas');
  }

  public function get_peliculas() {
    $this->db->select('*');
    $this->db->from('peliculas');
    $this->db->order_by('codigo DESC');
    $query = $this->db->get();

    if($query->num_rows() > 0) {
      return $query;
    } else {
      return false;
    }
  }
}

?>
