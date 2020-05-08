$(document).ready(function () {

    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    var level = url.searchParams.get("level");
    if (level != null) {
        ChangeFloor(level);
    } else {
        plan();
    }

    $('.contact-from__input[name="phone"]').mask('+7 (000) 000-00-00');


    $(".plcpu-full__first-button").on("click", function (event) {
        $(".contact-form--main").css('display', 'block');
        $(".plcpu-full").css('filter', 'blur(4px)');
    });

    $(".contact-form--main .contact-form__close").on("click", function (event) {
        $(".contact-form--main").css('display', 'none');
        $(".plcpu-full").css('filter', 'blur(0)');
    });

    $(".plcpu-full__second-button").on("click", function (event) {
        $(".contact-form--sales-start").css('display', 'block');
        $(".plcpu-full").css('filter', 'blur(4px)');
    });

    $(".contact-form--sales-start .contact-form__close").on("click", function (event) {
        $(".contact-form--sales-start").css('display', 'none');
        $(".plcpu-full").css('filter', 'blur(0)');
    });

    $(".floors-changer__item").on("click", function (event) {
        var floor = $(this).data('floor');
        ChangeFloor(floor);
    });

    $(".contact-form--main form").submit(function (event) {
        event.preventDefault();

        var form = $(this);
        var url = './send.php';

        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            success: function (data) {
                if (data == 'success') {
                    $('.contact-form--main').css('display', 'none');
                    $(".contact-form--thanks-main").css('display', 'block');
                }
            },
            error: function (data) {
                console.log(data);
            }
        });
    });

    $(".contact-form--sales-start form").submit(function (event) {
        event.preventDefault();

        var form = $(this);
        var url = './send.php';

        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            success: function (data) {
                if (data == 'success') {
                    $('.contact-form--sales-start').css('display', 'none');
                    $(".contact-form--thanks-sales-start").css('display', 'block');
                }
            },
            error: function (data) {
                console.log(data);
            }
        });
    });
});

function plan() {
    $.getJSON("./places_data.json", function (data) {
        map_json = data;

        $(".plan__image svg > .st0-st0").on("mouseenter", function (event) {
            var position = $(this).offset();
            var first_elem = $(this).clone().addClass('rect-temp');
            var second_elem = $(this).next().clone().addClass('path-temp');
            $(".plan__image svg").append(first_elem).append(second_elem);
            $(".plan__image svg").css('background', '#fff');
            $(".plan .overlay").css('display', 'block');
            // $(".plan .overlay").fadeIn(150);
            $("#custom_smog").css('display', 'block');
            // $("#custom_smog").fadeIn(150);
            // $(".plan__image svg").css('filter', 'brightness(29%)');

            /*setTimeout(displayStyles, 100);
            function displayStyles() {
                $(".plan .overlay").fadeIn(150);
                $("#custom_smog").fadeIn(150);
            }*/

            $(".filter").css('transition', 'box-shadow 0.15s ease-in-out').css('box-shadow', 'none');


            if ($(this).data('place')) {
                var data_place = 'place_' + $(this).data('place');
                var select = $('.plcpu-short');

                $.each(map_json[data_place].data_popup, function (new_key, info) {
                    if (new_key == 'price') {
                        select.find('*[data-key="' + new_key + '"]').text(numberWithSpaces(info));
                    } else {
                        select.find('*[data-key="' + new_key + '"]').text(info);
                    }
                });
            } else {
                var data_place = 'place_1';
                var select = $('.plcpu-short');

                $.each(map_json[data_place].data_popup, function (new_key, info) {
                    if (new_key == 'price') {
                        select.find('*[data-key="' + new_key + '"]').text('0');
                    } else {
                        select.find('*[data-key="' + new_key + '"]').text('0');
                    }
                });
            }

            $(".plcpu-short").css('display', 'block').css('left', position.left + $(this).width() + 35).css('top', position.top + $(this).height() - 313);
            // $(".plcpu-short").fadeIn(150).css('left', position.left + $(this).width() + 35).css('top', position.top + $(this).height() - 313);


            if ((position.top < 360) && position.left > 1440) {
                $(".plcpu-short").css('display', 'block').css('left', 1440 + $(this).width() + 35).css('top', position.top + 330 + $(this).height() - 313);
            } else if (position.left > 1440) {
                $(".plcpu-short").css('display', 'block').css('left', 1440 + $(this).width() + 35).css('top', position.top + $(this).height() - 313);
            } else if (position.top < 308) {
                $(".plcpu-short").css('display', 'block').css('left', position.left + $(this).width() + 35).css('top', 308 + $(this).height() - 313);
            }
        });

        $(".plan__image svg").on("DOMNodeInserted", function (event) {

            $("#custom_smog").on("mousemove", function (event) {
                if ($('.plan.overlay:visible').length == 0) {
                    planHideOverlay();
                }
            });

            $(".plcpu-short").on("mousemove", function (event) {
                if ($('.plan.overlay:visible').length == 0) {
                    planHideOverlay();
                }
            });

            var insertedNodeName = event.target.nodeName;
            var insertedNode = event.target;
            if (insertedNodeName == 'rect') {
                $(".rect-temp").on("mouseleave", function () {
                    if ($('.plan.overlay:visible').length == 0) {
                        planHideOverlay();
                    }
                });

                $(".rect-temp").on("click", function (event) {
                    ShowBigPopup($(this).data('place'));
                });
            }
        });

        $(".plcpu-full__close").on("click", function (event) {
            $(".plcpu-full").css('display', 'none');
            $(".plan .overlay").css('display', 'none');
            $("#custom_smog").css('display', 'none');
            // $(".plan__image svg").css('filter', 'brightness(100%)');
            $(".plan__image svg").css('background', 'transparent');
            $(".filter").css('box-shadow', '0 0 46px 0 rgba(0,0,0,.22)');
            $(".filter__places-list-item").removeClass('active');
        });

        /*$( ".contact-form--main form" ).submit(function( event ) {
            event.preventDefault();

            var form = $(this);
            var url = '/app/send.php';

            $.ajax({
                type: "POST",
                url: url,
                data: form.serialize(),
                success: function(data)
                {
                    console.log(data);
                },
                error: function (data) {
                    console.log(data);
                }
            });
            $(this).parent().css('display', 'none');
            $(".contact-form--thanks-main").css('display', 'block');
        });*/

        /*$( ".contact-form--sales-start" ).submit(function( event ) {
            event.preventDefault();
            $(this).css('display', 'none');
            $(".contact-form--thanks-sales-start").css('display', 'block');
        });*/

        $(".contact-from__from-close").click(function (event) {
            $(".contact-form--thanks").css("display", "none");
            $(".plcpu-full").css('filter', 'blur(0)');
            $(".plcpu-full__close").trigger("click");
        });


    });
}

function planHideOverlay() {
    $(".plan__image svg > rect.rect-temp").last().remove();
    $(".plan__image svg > path.path-temp").last().remove();
    if ($('.plcpu-full:visible').length == 0) {
        $(".plan .overlay").css('display', 'none');
        $("#custom_smog").css('display', 'none');
        $(".plan__image svg").css('background', 'transparent');
        $(".filter").css('box-shadow', '0 0 46px 0 rgba(0,0,0,.22)');
    }
    $(".plcpu-short").css('display', 'none');
}

function ChangeFloor(level) {
    // $("*").off();
    // $.getScript("/app/js/plan.js");

    var floor = level;

    $('.floors-changer__item').removeClass('active');
    $('.floors-changer__item[data-floor="' + floor + '"]').addClass('active');

    $(".plan__image-floor.uncommented").fadeOut(150);

    setTimeout(commentAndUncomment, 150);

    function commentAndUncomment() {
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

        $('.plan__image-floor[data-floor="' + floor + '"]').fadeIn(200);
        // $('.plan__image-floor[data-floor="' + floor + '"]').css('display', 'block');

        plan();
    }
}

function ShowBigPopup(place_number) {
    $.getJSON("./places_data.json", function (data) {
        var map_json = data;
        var data_place = 'place_' + place_number;
        var select = $('.plcpu-full');

        $.each(map_json[data_place].data_popup, function (new_key, info) {
            if (new_key == 'price') {
                select.find('*[data-key="' + new_key + '"]').text(numberWithSpaces(info));
            } else {
                select.find('*[data-key="' + new_key + '"]').text(info);
            }
        });

        $('.contact-from__input[name="place"]').attr('value', map_json[data_place].data_popup.number);
        $('.contact-from__input[name="price"]').attr('value', map_json[data_place].data_popup.price);

        $('.contact-form--main').find('*[data-key="number"]').text(map_json[data_place].data_popup.number);
        $('.contact-form--thanks-main').find('*[data-key="number"]').text(map_json[data_place].data_popup.number);
        $('.contact-from__input#place').attr('value', map_json[data_place].data_popup.number);

        select.find('*[data-number="0"]').data('number', map_json[data_place].data_popup.number);

        $(".plcpu-full").css('display', 'block');
    });
}
