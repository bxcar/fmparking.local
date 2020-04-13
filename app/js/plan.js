$(document).ready(function () {

    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    var level = url.searchParams.get("level");
    if (level != null) {
        ChangeFloor(level);
    } else {
        plan();
    }


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
});

function plan() {
    $(".plan__image svg > .st0-st0").on("mouseenter", function (event) {
        var position = $(this).offset();
        var first_elem = $(this).clone().addClass('rect-temp');
        var second_elem = $(this).next().clone().addClass('path-temp');
        $(".plan__image svg").append(first_elem).append(second_elem);
        $(".plan .overlay").css('display', 'block');
        $("#custom_smog").css('display', 'block');
        // $(".plan__image svg").css('filter', 'brightness(29%)');
        $(".plan__image svg").css('background', '#fff');
        $(".filter").css('box-shadow', 'none');
        $(".plcpu-short").css('display', 'block').css('left', position.left + $(this).width() + 35).css('top', position.top + $(this).height() - 313);


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
                $(".plcpu-full").css('display', 'block');
            });

            $(".plcpu-full__close").on("click", function (event) {
                $(".plcpu-full").css('display', 'none');
                $(".plan .overlay").css('display', 'none');
                $("#custom_smog").css('display', 'none');
                // $(".plan__image svg").css('filter', 'brightness(100%)');
                $(".plan__image svg").css('background', 'transparent');
                $(".filter").css('box-shadow', '0 0 46px 0 rgba(0,0,0,.22)');
            });
        }
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