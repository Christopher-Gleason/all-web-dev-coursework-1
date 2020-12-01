$(document).ready(function()  {
    $("#image_list a").each(function() {
        let swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });

    $("image_list a").click(function(evt) {

        let imageURL = $(this).attr("href");
        $("image")

    });
});