$(document).ready(function () {
    $(".plan__image svg > .st0-st0").on("mouseenter", function (event) {
        var position = $(this).offset();
        var first_elem = $(this).clone().addClass('rect-temp');
        var second_elem = $(this).next().clone().addClass('path-temp');
        $(".plan__image svg").append(first_elem).append(second_elem);
        $(".plan .overlay").css('display', 'block');
        $("#custom_smog").css('display', 'block');
        $(".plan__image svg").css('background', '#fff');
        $(".filter").css('box-shadow', 'none');
        $(".plcpu-short").css('display', 'block').css('left', position.left+$(this).width() + 35).css('top', position.top+$(this).height()-313);
        console.log('mouseover');
    });

    $(".plan__image svg").on("DOMNodeInserted", function (event) {
        var insertedNodeName = event.target.nodeName;
        var insertedNode = event.target;
        if (insertedNodeName == 'rect') {
            $(".rect-temp").on("mouseleave", function () {
                $(".plan__image svg > rect").last().remove();
                $(".plan__image svg > path").last().remove();
                if($('.plcpu-full:visible').length == 0) {
                    $(".plan .overlay").css('display', 'none');
                    $("#custom_smog").css('display', 'none');
                    $(".plan__image svg").css('background', 'transparent');
                    $(".filter").css('box-shadow', '0 0 46px 0 rgba(0,0,0,.22)');
                }
                $(".plcpu-short").css('display', 'none');
                console.log('mouseout');
            });

            $(".rect-temp").on("click", function (event) {
                $(".plcpu-full").css('display', 'block');
            });

            $(".plcpu-full__close").on("click", function (event) {
                $(".plcpu-full").css('display', 'none');
                $(".plan .overlay").css('display', 'none');
                $("#custom_smog").css('display', 'none');
                $(".plan__image svg").css('background', 'transparent');
                $(".filter").css('box-shadow', '0 0 46px 0 rgba(0,0,0,.22)');
            });
        }
    });

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
        // $("*").off();
        $.getScript("/app/js/plan.js");


        $(".plan__image-floor-3").css('display', 'block');
        $(".plan__image-floor-2").css('display', 'none');

        //comment
        my_element_jq = $('.plan__image-floor-2 svg');
        comment = document.createComment(my_element_jq.get(0).outerHTML);
        my_element_jq.replaceWith(comment);

        //uncomment
        // $(".plan__image-floor-3 svg").replaceWith(this.nodeValue);
        $('.plan__image-floor-3')
            .contents()
            .filter(function(){return this.nodeType === 8;}) //get the comments
            .replaceWith(function(){return this.data;});
    });
});