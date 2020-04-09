$(document).ready(function () {

    var movest0_check = false;

    function thirdFloorShow() {
        if(movest0_check) {
            return;
        }
        $(".main-img-dark").css({
            "transition": "visibility 0.5s, opacity 0.5s linear",
            "opacity": "1"
        });
        $(".main__img-title-level3").css({
            "transition": "visibility 0.5s, opacity 0.5s linear",
            "opacity": "1",
            "visibility": "visible"
        });
        $(".main__developer").css('color', '#666');
        $(".main__developer a").css('color', '#666');
        $(".main__copyright").css('color', '#666');
        var third_floor = document.querySelectorAll('[data-floor="3"]')['0'];
        $(".main__img-title").css('left', $(window).width() - 650).css('top', getCoords(third_floor).top + 10);
        $('.hole-black').attr('d', $('[data-floor="3"]').attr('d'));
    }

    setTimeout(thirdFloorShow, 3000);

    $(".st0").on("mousemove", function (event) {
        movest0_check = true;
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
                "transition": "visibility 0.3s, opacity 0.3s linear",
                "opacity": "1"
            });
            $(".main__img-title-level" + element).css({
                "transition": "visibility 0.3s, opacity 0.3s linear",
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
        step: 5000,
        // animate:"slow",
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
        // step: .0001,
        // animate:"slow",
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

function getCoords(elem) { // crossbrowser version
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}