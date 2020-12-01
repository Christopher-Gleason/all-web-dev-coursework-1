$(document).ready(function() {
    $("#loginBtn").click(function(event) {
        event.preventDefault();
    //  let isValid     = true;
        const email     = "admin@gcrypto.com";
        const password  = "P@ssw0rd";

        if (userEmail == "") {
            $("#noEmail").text("Email is required");
        } 
        else {
            $("#noEmail").text("");
        }
        if (userEmail != email || userPassword != password || userPassword == "") {
            $("#noPassword").text("Pasword is required / Invalid Email or Password");
        }
        else {
            $("#noPassword").text("");
        }
        if (userEmail == email && userPassword == password) {
            $("#loginBtn").load("faq.html");
        }
    });
});