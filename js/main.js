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


    // Smooth Scroll
    $("a").on('click', function (event) {
        if (this.hash !== "" && $(`a[href="${this.hash}"`).attr('href')[0] === '#') {
            event.preventDefault();

            const offset = this.hash == '#investimento' ? 160 : 0;
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - offset
            }, 800, function () {});

        }
    });


    // Curso accordion
    const updateAccordion = function () {
        $('.curso__navAccordion__content').each(function (index, elem) {
            const targetSelector = elem.getAttribute('data-cursoContent');
            const targetContent = document.querySelector(targetSelector);

            if (targetContent) {
                let newContent = document.createElement('div');
                newContent.setAttribute('class', targetContent.getAttribute('class'));
                newContent.innerHTML = targetContent.innerHTML;
                elem.append(newContent);
            }

            elem.innerTML = '';
            $('.curso__navAccordion').find('.wow').removeClass('wow');
        });
    }

    if (window.innerWidth < 992) {
        updateAccordion();
    }

})();