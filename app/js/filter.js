$(document).ready(function () {

    var map_json;
    $.getJSON("/app/places_data.json", function (data) {
        map_json = data;
    });

    $("#price-range").slider({
        change: function (event, ui) {
            var ix = 0;
            var area_slider_value_min = $("#area-range").slider("values", 0);
            var area_slider_value_max = $("#area-range").slider("values", 1);

            $.each(map_json, function (key, value) {
                if ((value.data_popup.price >= ui.values[0])
                    && (value.data_popup.price <= ui.values[1])
                    && (value.data_popup.area >= area_slider_value_min)
                    && (value.data_popup.area <= area_slider_value_max)
                    && value.status == 'available') {

                    if (value.status == 'available') {
                        ix++;
                    }

                }
            });

            $('.filter__show-places-show-number').text(ix);
            $('.filter__show-places-show-number-title').text(declOfNum(ix, ['место', 'места', 'мест']));
        },
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
        change: function (event, ui) {
            var ix = 0;
            var price_slider_value_min = $("#price-range").slider("values", 0);
            var price_slider_value_max = $("#price-range").slider("values", 1);

            $.each(map_json, function (key, value) {
                if ((value.data_popup.area >= ui.values[0])
                    && (value.data_popup.area <= ui.values[1])
                    && (value.data_popup.price >= price_slider_value_min)
                    && (value.data_popup.price <= price_slider_value_max)
                    && value.status == 'available') {

                    if (value.status == 'available') {
                        ix++;
                    }

                }
            });

            $('.filter__show-places-show-number').text(ix);
            $('.filter__show-places-show-number-title').text(declOfNum(ix, ['место', 'места', 'мест']));
        },
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

    $(".filter__show-places-show").on("click", function (event) {
        var price_slider_value_min = $("#price-range").slider("values", 0);
        var price_slider_value_max = $("#price-range").slider("values", 1);
        var area_slider_value_min = $("#area-range").slider("values", 0);
        var area_slider_value_max = $("#area-range").slider("values", 1);
        var ix = 0;
        // $('.st0').removeClass('active2').remove Class('item-map-show');
        // $('#custom_smog').css('opacity', '0');
        $('.filter__places-list-items').html();
        $('.filter__places-list-items').html('<div class="hidden">\n' +
            '<div class="filter__places-list-item">\n' +
            '<div class="filter__places-list-item-column">\n' +
            '<span class="filter__places-list-item-number">№<span data-key="number">218</span></span>\n' +
            '<span class="filter__places-list-item-floor">Этаж <span data-key="level">3</span>/5</span>\n' +
            '</div>\n' +
            '<div class="filter__places-list-item-column">\n' +
            '<span class="filter__places-list-item-price"><span data-key="price">800 000</span> ₽</span>\n' +
            '<span class="filter__places-list-item-size">Большое место</span>\n' +
            '</div>\n' +
            '<div class="filter__places-list-item-column">\n' +
            '<span class="filter__places-list-item-area"><span data-key="area">30</span> м²</span>\n' +
            '<span class="filter__places-list-item-area-detailed"><span data-key="width">5</span> м х <span data-key="length">6</span> м</span>\n' +
            '</div>\n' +
            '</div>\n' +
            '</div>');
        $.each(map_json, function (key, value) {
            if ((value.data_popup.price >= price_slider_value_min)
                && (value.data_popup.price <= price_slider_value_max)
                && (value.data_popup.area >= area_slider_value_min)
                && (value.data_popup.area <= area_slider_value_max)
                && value.status == 'available') {
                var select = $('.filter__places-list-items .hidden .filter__places-list-item');
                select.attr('data-id', key);

                if (value.status == 'available') {
                    ix++;
                    // $('#'+key).addClass('item-map-show');
                    // $('div[data-id="'+ key +'"]').css('background', 'rgba(0, 224, 68, 0.62)');
                }

                $.each(value.data_popup, function (new_key, info) {
                    select.find('*[data-key="' + new_key + '"]').text(info);
                });

                select.clone().appendTo(".filter__places-list-items");
            }
        });
        $('.filter__places-list-title-number-number').text(ix);
        $('.filter__places-list-title-number-title').text(declOfNum(ix, ['место', 'места', 'мест']));
        $('.filter__places-list-items>.hidden').remove();
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

function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}
