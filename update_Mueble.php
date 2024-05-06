<?php 
require('includes/Mueble.php');

parse_str(file_get_contents("php://input"), $_PUT);
 
if($_SERVER['REQUEST_METHOD']== 'PUT' 
&& isset($_PUT['id'])  
&& isset($_PUT['tipo_de_mueble'])
&& isset($_PUT['madera']) 
&& isset($_PUT['descripcion'])
&& isset($_PUT['precio'])){
    Mueble::update_Mueble($_PUT['id'], $_PUT['tipo_de_mueble'], $_PUT['madera'], $_PUT['descripcion'], $_PUT['precio']);
}else {
    echo 'No se han proporcionado todos los datos necesarios para la actualización';
}





?>