var reqBodyBackEnd = {};


$(document).ready(function() {
    $("#encSentReq").click(function() {
        var x = $("#requestForm").serializeArray();
        
        $.each(x, function(i, field) {
            reqBodyBackEnd[field.name] = field.value;
        });

        console.log(reqBodyBackEnd);

        $.ajax({
            type: "GET",
            data: {"key":"value"},
            url: "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=4fdc882b0d1b2ae51e750a775e3abfee", 
            success: function(output, status, xhr) { 
                $("#respBody").val(JSON.stringify(output, null, 4));
                $("#corrIdTextField").val(xhr.getResponseHeader("Content-length"));

                $("#respheader").val(xhr.getAllResponseHeaders());

                $("#respService").show();
                $("#devInsight").show();
            },
            error: function(output) {
                 console.log("Error in API call");
            }
         });

        
    });

    $("#encReq").click(function(){
        var x = $("#requestForm").serializeArray();

        $.each(x, function(i, field){
            console.log(field);
        });

        //Sent req for encryption

        $("#respService").hide();
        $("#devInsight").show();
    });

    $("#formatReq").click(function(){
        var unformatedBody = $("#reqBodyArea").val();
        var jsonReq = JSON.parse(unformatedBody);
        var formatedBody = JSON.stringify(jsonReq, null, 4)
        $("#reqBodyArea").val(formatedBody)
    });

    $("#formatRes").click(function(){
        var unformatedBody = $("#respBody").val();
        var jsonReq = JSON.parse(unformatedBody);
        var formatedBody = JSON.stringify(jsonReq, null, 4)
        $("#respBody").val(formatedBody)
    });

});


function pasteClipboardDataToRequestArea(){
        navigator.clipboard.readText().then(text => {
            $("#reqBodyArea").val(text);
          })
          .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
}

function copyClipboardDataFromRequestArea(){
    navigator.clipboard.writeText($("#reqBodyArea").val());
}

function copyClipboardDataFromResponseArea(){
    navigator.clipboard.writeText($("#respBody").val());
}

function copyClipboardDataFromHMACarea(){
    navigator.clipboard.writeText($("#hmacText").val());
}

function copyClipboardDataFromEncryptArea(){
    navigator.clipboard.writeText($("#encryptText").val());
}

function copyClipboardDataFromCorrIdArea(){
    navigator.clipboard.writeText($("#corrIdTextField").val());
}