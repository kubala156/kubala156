window.onload = function() {
    // Start page
    var defaultPage = "projects";
    if (window.location.hash.length > 0) {
        setPage(window.location.hash, false);
    }
    else {
        setPage(defaultPage, false);
    }

    // Menu event
    $('nav a').click(function (e) {
        e.preventDefault();
        $('nav .selected').removeClass("selected");
        $("#content").hide();
        setPage($(this).attr('href'));
        $("#content").fadeIn('fast');
    })

    $(window).on('hashchange', function (e) {
        e.preventDefault();
        setPage(window.location.hash, false);
    });

    $('nav .title').fadeIn(3000);

    $('.content .services h3').click(function (e) {
        $(this).closest('.description').fadeIn('fast') 
    })
};

function setPage(page, setHash = true) {
    if (setHash == true) {
        window.location.hash = page;
    }
    page = page.replace('#', '');
    $('nav .selected').removeClass("selected");
    $('nav a[href$="' + page + '"]').addClass("selected");
    $("#content").load('pages/' + page + '.html');
}