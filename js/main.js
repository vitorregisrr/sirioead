(function () {
    'use strict';

    $('.main-header__tools__search').hover( function(){
        $(this).closest('.main-header__tools').toggleClass('active');
    });
})();