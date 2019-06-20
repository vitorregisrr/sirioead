(function () {
    'use strict';

    new WOW().init();


    $('#btnProximosCursosToggler').click(function () {
        $(this).toggleClass('active');
        $('#proximos-cursos').toggleClass('active');
        if ($('#proximos-cursos').hasClass('active')) {
            $('html, body').animate({
                scrollTop: $('#proximos-cursos').position().top
            }, 'slow');
        }
    })
    $('.main-header__tools__search').hover(function () {
        $(this).closest('.main-header__tools').toggleClass('active');
    });


    //scroll top
    var scrollTopBtn = $('.scroll-top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            scrollTopBtn.addClass('show');
        } else {
            scrollTopBtn.removeClass('show');
        }
    });

    scrollTopBtn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

})();