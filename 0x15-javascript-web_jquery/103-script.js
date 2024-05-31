$(document).ready(function () {
    // Function to handle translation
    function fetchTranslation(langCode) {
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
    }

    // Handle button click and Enter key press
    $("#language_code").on({
        click: function () {
            fetchTranslation($(this).val());
        },
        keypress: function (e) {
            if (e.which === 13) { // Check for Enter key (keyCode 13)
                fetchTranslation($(this).val());
            }
        }
    });
});
