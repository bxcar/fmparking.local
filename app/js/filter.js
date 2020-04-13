$(document).ready(function () {
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

    if (isOverflown(document.getElementsByClassName('filter__places-list-items')['0'])) {
        $('.filter__places-list-items').addClass('overflow');
    }
});

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}