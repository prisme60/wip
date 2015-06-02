<?php

// Récupération des paramètres
$action = filter_input(INPUT_POST, 'action', FILTER_SANITIZE_SPECIAL_CHARS);
$text1  = filter_input(INPUT_POST, 'text1' , FILTER_SANITIZE_SPECIAL_CHARS);
$text2  = filter_input(INPUT_POST, 'text2' , FILTER_SANITIZE_SPECIAL_CHARS);
    
// Traitements
$retour = [
    'retour'   => 'action: '.$action.' text1: '.$text1.' text2: '.$text2 ,
    'date'     => date('d/m/Y H:i:s')
   ];
 
// Envoi du retour (on renvoi le tableau $retour encodé en JSON)
header('Content-type: application/json');
echo json_encode($retour);
?>

