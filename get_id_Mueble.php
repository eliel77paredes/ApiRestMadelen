<?php
    require('includes/Mueble.php');

    if ($_SERVER['REQUEST_METHOD'] =='GET' && isset($_GET['id'])) {
          
        Mueble::get_id_Mueble($_GET['id']);
        
    }else{
        echo 'Nose envio el Id';
    }


?>