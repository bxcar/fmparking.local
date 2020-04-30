$(document).ready(function () {
    $('.hamburger--spin').on('click', function () {
        $(this).toggleClass('is-active');
        if ($(this).hasClass('is-active')) {
            $('body').css('height', '100vh').css('overflow', 'hidden');
            $('header').css('box-shadow', 'none')
        } else {
            $('body').css('height', 'auto').css('overflow', 'visible');
            $('header').css('box-shadow', '0px 3px 10px 0px rgba(0,0,0,.10)')
        }
        $(".hamburger-menu").animate({width: 'toggle'}, 320);
    });
});