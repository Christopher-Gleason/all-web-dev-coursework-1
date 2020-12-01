$(document).ready(function() {
    $("li h2").hover(function() {
        $(this).next().toggle();
    });
}); // end ready