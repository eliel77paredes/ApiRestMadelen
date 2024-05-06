<?php
require('includes/Mueble.php');

 if($_SERVER['REQUEST_METHOD'] == 'GET'){
    Mueble::get_all_Mueble();
 }

?>