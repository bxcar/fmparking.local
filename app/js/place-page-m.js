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

    $.getJSON("/app/places_data.json", function (data) {
        map_json = data;

        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        var place = url.searchParams.get("place");

        $.each(map_json, function (key, value) {
            var select = $('body');

            if(place == value.data_popup.number) {
                $.each(value.data_popup, function (new_key, info) {
                    if (new_key == 'price') {
                        select.find('*[data-key="' + new_key + '"]').text(numberWithSpaces(info));
                    } else {
                        select.find('*[data-key="' + new_key + '"]').text(info);
                    }
                });


                var floor = value.data_popup.level;

                //comment
                $(".plan__image-floor.uncommented").each(function (index) {
                    try {
                        var comment = document.createComment($(this).get(0).innerHTML);
                        $(this).html(comment).removeClass('uncommented').addClass('commented');
                    } catch (e) {
                        console.log(this);
                    }
                });

                $('.plan__image-floor').removeClass('active');
                $('.plan__image-floor[data-floor="' + floor + '"]').addClass('active uncommented').removeClass('commented');

                //uncomment
                $('.plan__image-floor[data-floor="' + floor + '"]')
                    .contents()
                    .filter(function () {
                        return this.nodeType === 8;
                    }) //get the comments
                    .replaceWith(function () {
                        return this.data;
                    });

                $('.st0-st0').removeClass('mob-active');
                $('.st0-st0[data-place="' +  value.data_popup.number + '"]').addClass('mob-active');

            }

        });
    });
});


function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}