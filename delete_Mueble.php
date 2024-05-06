<?php 
require('includes/Mueble.php');

if($_SERVER['REQUEST_METHOD']== 'DELETE' && isset($_GET['id'])){
    Mueble::delete_Mueble($_GET['id']);
}else{
    echo'No se envio el id de la Pelicula';
}

?>