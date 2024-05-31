$(document).ready(function () {
    $("#btn_translate").click(function () {
        var langCode = $("#language_code").val();

        $.ajax({
            url: "https://www.fourtonfish.com/hellosalut/hello/",
            data: { lang: langCode },
            dataType: "json",
            success: function (data) {
                $("#hello").text(data.hello);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("Error:", textStatus, errorThrown);
                $("#hello").text("Error fetching translation.");
            }
        });
    });
});
