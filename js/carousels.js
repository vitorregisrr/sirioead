(function () {
    'use strict';

    // Home Carousel //
    const cursosCarousel = $(".owl-carousel.cursos-carousel__carousel");
    cursosCarousel.owlCarousel({
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
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

})();