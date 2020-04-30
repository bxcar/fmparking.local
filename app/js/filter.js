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

    var map_json;
    $.getJSON("/app/places_data.json", function (data) {
        map_json = data;

        var url_file = window.location.pathname;
        var filename = url_file.substring(url_file.lastIndexOf('/') + 1);

        $("#price-range").slider({
            change: function (event, ui) {
                var ix = 0;
                var area_slider_value_min = $("#area-range").slider("values", 0);
                var area_slider_value_max = $("#area-range").slider("values", 1);
                var current_floor_check = $('.filter__floors-floor.active').data('floor');
                var current_floor = 'any';

                if (current_floor_check) {
                    current_floor = current_floor_check;
                }

                $.each(map_json, function (key, value) {
                    if ((value.data_popup.price >= ui.values[0])
                        && (value.data_popup.price <= ui.values[1])
                        && (value.data_popup.area >= area_slider_value_min)
                        && (value.data_popup.area <= area_slider_value_max)
                        && value.status == 'available') {

                        if (current_floor == 'any') {
                            ix++;
                        } else if (value.data_popup.level == current_floor) {
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
                var current_floor_check = $('.filter__floors-floor.active').data('floor');
                var current_floor = 'any';

                if (current_floor_check) {
                    current_floor = current_floor_check;
                }

                $.each(map_json, function (key, value) {
                    if ((value.data_popup.area >= ui.values[0])
                        && (value.data_popup.area <= ui.values[1])
                        && (value.data_popup.price >= price_slider_value_min)
                        && (value.data_popup.price <= price_slider_value_max)
                        && value.status == 'available') {

                        if (current_floor == 'any') {
                            ix++;
                        } else if (value.data_popup.level == current_floor) {
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

            var current_floor_check = $('.filter__floors-floor.active').data('floor');
            var current_floor = 'any';

            if (current_floor_check) {
                current_floor = current_floor_check;
            }
            // $('.st0').removeClass('active2').remove Class('item-map-show');
            // $('#custom_smog').css('opacity', '0');
            $('.filter__places-list-items').html();

            if (filename == 'filter-m.php') {
                $('.filter__places-list-items').html('<div class="hidden">\n' +
                    '<a style="text-decoration: none;" href="" class="filter__places-list-item">\n' +
                    '<div class="filter__places-list-item-column">\n' +
                    '<span class="filter__places-list-item-number">№<span data-key="number">218</span></span>\n' +
                    '<span class="filter__places-list-item-floor">Этаж <span data-key="level">3</span>/5</span>\n' +
                    '</div>\n' +
                    '<div class="filter__places-list-item-column">\n' +
                    '<span class="filter__places-list-item-price"><span data-key="price">800 000</span> ₽</span>\n' +
                    '<span class="filter__places-list-item-size" data-key="size">Большое место</span>\n' +
                    '</div>\n' +
                    '<div class="filter__places-list-item-column">\n' +
                    '<span class="filter__places-list-item-area"><span data-key="area">30</span> м²</span>\n' +
                    '<span class="filter__places-list-item-area-detailed"><span data-key="width">5</span> м х <span data-key="length">6</span> м</span>\n' +
                    '</div>\n' +
                    '</a>\n' +
                    '</div>');
            } else {
                $('.filter__places-list-items').html('<div class="hidden">\n' +
                    '<div class="filter__places-list-item">\n' +
                    '<div class="filter__places-list-item-column">\n' +
                    '<span class="filter__places-list-item-number">№<span data-key="number">218</span></span>\n' +
                    '<span class="filter__places-list-item-floor">Этаж <span data-key="level">3</span>/5</span>\n' +
                    '</div>\n' +
                    '<div class="filter__places-list-item-column">\n' +
                    '<span class="filter__places-list-item-price"><span data-key="price">800 000</span> ₽</span>\n' +
                    '<span class="filter__places-list-item-size" data-key="size">Большое место</span>\n' +
                    '</div>\n' +
                    '<div class="filter__places-list-item-column">\n' +
                    '<span class="filter__places-list-item-area"><span data-key="area">30</span> м²</span>\n' +
                    '<span class="filter__places-list-item-area-detailed"><span data-key="width">5</span> м х <span data-key="length">6</span> м</span>\n' +
                    '</div>\n' +
                    '</div>\n' +
                    '</div>');
            }

            if ($('.filter__places-list-sorting-by-parameter.active').data('direction') == 'asc') {
                map_json = sortData($(".filter__places-list-sorting-by-parameter.active").data('sort'), map_json, 'asc');
            } else {
                map_json = sortData($(".filter__places-list-sorting-by-parameter.active").data('sort'), map_json, 'desc');
            }


            $.each(map_json, function (key, value) {
                if ((value.data_popup.price >= price_slider_value_min)
                    && (value.data_popup.price <= price_slider_value_max)
                    && (value.data_popup.area >= area_slider_value_min)
                    && (value.data_popup.area <= area_slider_value_max)
                    && value.status == 'available') {
                    var select = $('.filter__places-list-items .hidden .filter__places-list-item');
                    select.attr('data-place', value.data_popup.number);

                    if (filename == 'filter-m.php') {
                        select.attr('href', './place-m.php?place=' + value.data_popup.number);
                    }

                    $.each(value.data_popup, function (new_key, info) {
                        if (new_key == 'price') {
                            select.find('*[data-key="' + new_key + '"]').text(numberWithSpaces(info));
                        } else {
                            select.find('*[data-key="' + new_key + '"]').text(info);
                        }
                    });

                    if (current_floor == 'any') {
                        ix++;
                        select.clone().appendTo(".filter__places-list-items");
                    } else if (value.data_popup.level == current_floor) {
                        ix++;
                        select.clone().appendTo(".filter__places-list-items");
                    }

                }
                // console.log('h');
            });

            $('.filter__places-list-title-number-number').text(ix);
            $('.filter__show-places-show-number').text(ix);
            $('.filter__places-list-title-number-title').text(declOfNum(ix, ['место', 'места', 'мест']));
            $('.filter__places-list-items>.hidden').remove();

        });

        if (isOverflown(document.getElementsByClassName('filter__places-list-items')['0'])) {
            $('.filter__places-list-items').addClass('overflow');
        }

        $(".filter__floors-floor").on("click", function (event) {
            var floor = $(this).data('floor');
            var repeated_click = false;

            if ($(this).hasClass('active')) {
                repeated_click = true;
            }

            $(".filter__floors-floor").removeClass('active');

            if (floor && !repeated_click && (typeof ChangeFloor === "function")) {
                ChangeFloor(floor);
            }

            $(this).addClass('active');

            var ix = 0;
            var price_slider_value_min = $("#price-range").slider("values", 0);
            var price_slider_value_max = $("#price-range").slider("values", 1);
            var area_slider_value_min = $("#area-range").slider("values", 0);
            var area_slider_value_max = $("#area-range").slider("values", 1);
            var current_floor_check = $('.filter__floors-floor.active').data('floor');
            var current_floor = 'any';

            if (current_floor_check) {
                current_floor = current_floor_check;
            }

            $.each(map_json, function (key, value) {
                if ((value.data_popup.price >= price_slider_value_min)
                    && (value.data_popup.price <= price_slider_value_max)
                    && (value.data_popup.area >= area_slider_value_min)
                    && (value.data_popup.area <= area_slider_value_max)
                    && value.status == 'available') {

                    if (current_floor == 'any') {
                        ix++;
                    } else if (value.data_popup.level == current_floor) {
                        ix++;
                    }

                }
            });

            $('.filter__show-places-show-number').text(ix);
            $('.filter__show-places-show-number-title').text(declOfNum(ix, ['место', 'места', 'мест']));

        });


        $(".filter__places-list-sorting-by-parameter.active").on("click", function (event) {
            $(".filter__places-list-sorting-buttons-wrapper").toggleClass('open');
        });

        $(".filter__places-list-sorting-buttons-wrapper .filter__places-list-sorting-by-parameter").on("click", function (event) {
            $(".filter__places-list-sorting-buttons-wrapper").removeClass('open');
            $(".filter__places-list-sorting-by-parameter.active").text($(this).text());
            $(".filter__places-list-sorting-by-parameter.active").data('sort', $(this).data('sort'));

            $(".filter__show-places-show").trigger("click");
        });

        $(".filter__places-list-sorting-sort-arrow img").on("click", function (event) {
            $(this).toggleClass('revert');

            if ($(".filter__places-list-sorting-by-parameter.active").data('direction') == 'asc') {
                $(".filter__places-list-sorting-by-parameter.active").data('direction', 'desc');
            } else {
                $(".filter__places-list-sorting-by-parameter.active").data('direction', 'asc');
            }

            $(".filter__show-places-show").trigger("click");
        });

        $(".filter__show-places-clean").on("click", function (event) {
            // Reset the sliders to their original min/max values
            $('#price-range').each(function () {

                var options = $(this).slider('option');

                $(this).slider('values', [options.min, options.max]);

                $(".filter__price-filter-min-number").text(numberWithSpaces(250000));
                $(".filter__price-filter-max-number").text(numberWithSpaces(750000));

            });

            $('#area-range').each(function () {

                var options = $(this).slider('option');

                $(this).slider('values', [options.min, options.max]);

                $(".filter__area-filter-min-number").text(numberWithSpaces(12));
                $(".filter__area-filter-max-number").text(numberWithSpaces(22));

            });

            $(".filter__floors-floor").removeClass('active');
            $(".filter__floors-floor.filter__floors-floor--any").addClass('active');
            $(".filter__places-list-sorting-by-parameter.active")
                .data('sort', 'price')
                .data('direction', 'asc')
                .text('по цене');
            $(".filter__places-list-sorting-sort-arrow img").removeClass('revert');

            $(".filter__show-places-show").trigger("click");
        });

        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        var level = url.searchParams.get("level");
        if (level != null) {
            $('.filter__floors-floor[data-floor="' + level + '"').trigger("click");
        }

        $(".filter__show-places-show").trigger("click");


    });

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

function sortData(key, data, type) {
    let ordered = {};
    let compareFunction = function (a, b) {
        return data[b]['data_popup'][key] - data[a]['data_popup'][key];
    };
    if (type === "asc") {
        compareFunction = function (a, b) {
            return data[a]['data_popup'][key] - data[b]['data_popup'][key];
        }
    }
    Object.keys(data).sort(compareFunction).forEach(function (key) {
        ordered[key] = data[key];
    });
    return ordered;
}