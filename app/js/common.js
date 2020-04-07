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


    $("#price-range").slider({
        range: true,
        min: 250000,
        max: 700000,
        values: [250000, 700000],
        slide: function (event, ui) {
            $(".filter__price-filter-min-number").text(numberWithSpaces(ui.values[0]));
            $(".filter__price-filter-max-number").text(numberWithSpaces(ui.values[1]));
        }
    });

    $("#area-range").slider({
        range: true,
        min: 12,
        max: 22,
        values: [12, 22],
        slide: function (event, ui) {
            $(".filter__area-filter-min-number").text(numberWithSpaces(ui.values[0]));
            $(".filter__area-filter-max-number").text(numberWithSpaces(ui.values[1]));
        }
    });

    if(isOverflown(document.getElementsByClassName('filter__places-list-items')['0'])) {
        $('.filter__places-list-items').addClass('overflow');
    }

});

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}