var intervalId = -1;
var AUTOREFRESH_IN_PROGRESS_CLASS = "autorefreshInProgress";

$(function () {
    $("#rafraichir").click( function() {
        ajax_liste_slaves("rafraichir", refresh_slaves);
    });

    $("#autorafraichir").click(function () {
        //$(this).prop( "disabled", true ); // disabled button
        var buttonSelector = $(this);
        if(!buttonSelector.hasClass(AUTOREFRESH_IN_PROGRESS_CLASS)) {
            buttonSelector.addClass(AUTOREFRESH_IN_PROGRESS_CLASS);
            intervalId = setInterval(function() {ajax_liste_slaves("autorefresh", refresh_slaves);}, 2000);
        }
        else {
            buttonSelector.removeClass(AUTOREFRESH_IN_PROGRESS_CLASS);
            clearInterval(intervalId);
        }
    });
});

refresh_slaves = function (response) {
    var tbodySelector = $("#resultat tbody").empty();
    if(response.status) {
        for (var i = 0; i < response.slaves.length; i++) {
            var slave = response.slaves[i];
            tbodySelector.append($("<tr>").append(
                             $("<td>").text(slave.id),
                             $("<td>").text(slave.etat),
                             $("<td>").text(slave.temps)));
        }
        //following code is easier to read but a little bit slower!
//        $.each(response.slaves, function(i, slave) {
//            tbodySelector.append($("<tr>").append(
//                             $("<td>").text(slave.id),
//                             $("<td>").text(slave.etat),
//                             $("<td>").text(slave.temps)));
//        });
    }
};

ajax_liste_slaves = function (cmdAction, fctSuccess) {
//    $.ajax({
//        url: "/ajax/slavesInfo.php",
//        type: "GET",
//        data: ({
//            action: cmdAction
//        }),
//        dataType: "json",
//        success: fctSuccess
//    });
    //shorter equivalent:
    $.getJSON("/ajax/slavesInfo.php",
        ({action: cmdAction}),
        fctSuccess);
};


