$(document).ready(function () {
    $(".st0").on("mousemove", function (event) {
        var x = event.clientX;
        var y = event.clientY;

        $(".main-img-dark").css({
            "transition": "visibility 0.3s, opacity 0.3s linear",
            "opacity": "0"
        });
        $(".main__img-title").css({
            "transition": "visibility 0.3s, opacity 0.3s linear",
            "opacity": "0",
            "visibility": "hidden"
        });
        $('.hole-black').attr('d', '');
        $("body").css('cursor', 'default');
        $(".main__developer").css('color', '#fff');
        $(".main__developer a").css('color', '#fff');
        $(".main__copyright").css('color', '#fff');

        function showElements(element) {
            $(".main-img-dark").css({
                "transition": "visibility 0.3, opacity 0.3s linear",
                "opacity": "1"
            });
            $(".main__img-title-level" + element).css({
                "transition": "visibility 0.3, opacity 0.3s linear",
                "opacity": "1",
                "visibility": "visible"
            });
            $("body").css('cursor', 'pointer');
            $(".main__developer").css('color', '#666');
            $(".main__developer a").css('color', '#666');
            $(".main__copyright").css('color', '#666');
            $(".main__img-title").css('left', x).css('top', y);
            if (x > ($(window).width() - 650)) {
                $(".main__img-title").css('left', $(window).width() - 650).css('top', y);
            }
        }

        showElements($(this).attr('data-floor'));
        $('.hole-black').attr('d', $(this).attr('d'));
    });

    $(".st0").on("mouseout", function () {
        $(".main-img-dark").css({
            "transition": "visibility 0.3s, opacity 0.3s linear",
            "opacity": "0"
        });
        $(".main__img-title").css({
            "transition": "visibility 0.3s, opacity 0.3s linear",
            "opacity": "0",
            "visibility": "hidden"
        });
        $('.hole-black').attr('d', '');
        $("body").css('cursor', 'default');
        $(".main__developer").css('color', '#fff');
        $(".main__developer a").css('color', '#fff');
        $(".main__copyright").css('color', '#fff');
    });
});