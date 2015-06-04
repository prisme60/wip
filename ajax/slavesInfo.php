<?php

// Récupération des paramètres
$action = filter_input(INPUT_GET, 'action', FILTER_SANITIZE_SPECIAL_CHARS);

$status = true;
    
// Traitements
$retour = [
    status => $status,
    action => $action,
    slaves =>
    [
        [id => 1, etat => 'operational', temps => date('d/m/Y H:i:s')] ,
        [id => 5, etat => 'stopped'    , temps => date('d/m/Y H:i:s', time()-1)],
        [id =>49, etat => 'ready'      , temps => date('d/m/Y H:i:s', time()-2)]
    ]
];

 
// Envoi du retour (on renvoi le tableau $retour encodé en JSON)
header('Content-type: application/json');
echo json_encode($retour);
?>