$(function() {
    $("#lire").click(function() {
      ajax_commande('lire');
    });

    $("#ecrire").click(function() {
        ajax_commande('ecrire');
    });
});

ajax_commande = function(cmdAction) {
    $.ajax({
        url: "/ajax/json.php",
        type: "POST",
        data: ({
            text1   : $("#text1").val(),
            text2   : $("#text2").val(),
            action  : cmdAction
        }),
        dataType: "json",
        success: function(data){
            $("#reponse").empty().text(data.retour);
            $("#date").empty().text(data.date);
        }
    });
}

