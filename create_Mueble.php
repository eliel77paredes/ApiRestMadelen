<?php 
require_once('includes/Mueble.php');

if($_SERVER['REQUEST_METHOD']== 'POST' && isset($_POST['tipo_de_mueble']) 
&& isset($_POST['madera']) 
&& isset($_POST['descripcion']) 
&& isset($_POST['precio'])){
    Mueble::create_Mueble($_POST['tipo_de_mueble'], $_POST['madera'], $_POST['descripcion'], $_POST['precio']);

}else {
    echo 'No se encontraron todos los datos necesarios';
}



?>