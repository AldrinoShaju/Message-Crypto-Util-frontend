$(document).ready(function() {
    $("#decryptResp").click(function() {
        console.log("clicked");
        var x = $("#decryptForm").serializeArray();
        $.each(x, function(i, field) {
            console.log(field);
        });
    });
});