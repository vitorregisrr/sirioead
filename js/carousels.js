(function () {
    'use strict';

    // Home Carousel //
    const homeCarousel = $(".owl-carousel.home-slider__carousel");
    homeCarousel.owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        center: true,
        dots: true,
        nav: true,
        navText: [
            "<i class='owl-nav chevron-left'>", "<i class='owl-nav chevron-right'>"
        ],
        slideBy: "page",
        dragEndSpeed: 700,
        smartSpeed: 1e3,
        startPosition: 1,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

    // Noticias Carousel //
    const noticiasCarousel = $(".owl-carousel.noticias__carousel");
    noticiasCarousel.owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        center: true,
        dots: true,
        nav: true,
        navText: [
            "<i class='owl-nav chevron-left'>", "<i class='owl-nav chevron-right'>"
        ],
        slideBy: "page",
        dragEndSpeed: 700,
        smartSpeed: 1e3,
        startPosition: 1,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });


    // Noticia Carousel //
    const noticiaCarousel = $(".owl-carousel.noticia__carousel");
    noticiaCarousel.owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        center: true,
        dots: true,
        nav: true,
        navText: [
            "<i class='owl-nav chevron-left'>", "<i class='owl-nav chevron-right'>"
        ],
        slideBy: "page",
        dragEndSpeed: 700,
        smartSpeed: 1e3,
        startPosition: 1,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });


    // Curso Carousel //
    const cursoCarousel = $(".owl-carousel.curso__carousel");
    cursoCarousel.owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        center: true,
        dots: true,
        nav: true,
        navText: [
            "<i class='owl-nav chevron-left'>", "<i class='owl-nav chevron-right'>"
        ],
        slideBy: "page",
        dragEndSpeed: 700,
        smartSpeed: 1e3,
        startPosition: 1,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

})();