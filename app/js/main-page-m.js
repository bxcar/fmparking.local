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

    $('.main__sales-start-notice-button').click(function () {
        $(".contact-form--sales-start").animate({height: 'show'}, 500);
        $('body').css('overflow', 'hidden');
        $('header').css('box-shadow', 'none');
    });

    $('.contact-form--sales-start .contact-from__form').on('submit', function (e) {
        e.preventDefault();

        var form = $(this);
        var url = '/app/send.php';

        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            success: function(data)
            {
                if(data == 'success') {
                    $(".contact-form").css('display', 'none');
                    $(".contact-form--thanks-sales-start").css('display', 'block');
                }
            },
            error: function (data) {
                console.log(data);
            }
        });

    });

    $('.contact-form__close').click(function () {
        $(".contact-form").animate({height: 'hide'}, 500);
        if(!$('.hamburger--spin').hasClass('is-active')) {
            $('body').css('overflow', 'visible');
            $('header').css('box-shadow', '0px 3px 10px 0px rgba(0,0,0,.10)');
        }
    });

    $('.contact-from__from-close').click(function () {
        $(".contact-form").animate({height: 'hide'}, 500);
        if(!$('.hamburger--spin').hasClass('is-active')) {
            $('body').css('overflow', 'visible');
            $('header').css('box-shadow', '0px 3px 10px 0px rgba(0,0,0,.10)');
        }
    });

    $('.phone').mask('+7 (000) 000-00-00');
});