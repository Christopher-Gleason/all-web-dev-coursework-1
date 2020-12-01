$(document).ready(function() {
    $("#buyCrypto").click(function(event) {
        event.preventDefault();

        let isValid = true;
        let unpurchased = true;

        if (currencyType === "") {
           $("#noCrypto").text("Currency is required");
           isValid = false;
        } 
        else {
            $("#noCrypto").text("");
        }
        if (quantity === "") {
        $("#noQuantity").text("Quantity is required");
           isValid = false;
        }
        else {
            $("#noQuantity").text("");
        }
    //    if (isValid) {
    //        alert("That was valid.");
    //    } 
    //    else {
    //        alert("NOT VALID!");
    //    }
    });
});