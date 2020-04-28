<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="img/favicon.png"/>
    <title>Этажи - FM Parking</title>

    <!--header styles start-->
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="css/main.css">
    <!--header styles end-->
</head>
<body>
<div class="filter">
    <a href="/" class="filter__logo-link"><img class="filter__logo" src="img/logo-floors.png" alt=""></a>
    <div class="filter__price-filter">
        <span class="filter__price-filter-title">Стоимость, ₽</span>
        <div class="filter__price-filter-inner-wrapper">
            <span class="filter__price-filter-min">от <span
                        class="filter__price-filter-min-number">250 000</span> ₽</span>
            <span class="filter__price-filter-max">до <span
                        class="filter__price-filter-max-number">750 000</span> ₽</span>
        </div>
        <div class="price-range-wrapper">
            <div id="price-range"></div>
        </div>
    </div>
    <div class="filter__area-filter">
        <span class="filter__area-filter-title">Площадь, м²</span>
        <div class="filter__area-filter-inner-wrapper">
                <span class="filter__area-filter-min">от <span
                            class="filter__area-filter-min-number">12</span> м²</span>
            <span class="filter__area-filter-max">до <span
                        class="filter__area-filter-max-number">22</span> м²</span>
        </div>
        <div class="area-range-wrapper">
            <div id="area-range"></div>
        </div>
    </div>
    <div class="filter__floors">
        <span class="filter__floors-title">Этаж</span>
        <div class="filer__floors-inner-wrapper">
            <span class="filter__floors-floor filter__floors-floor--any active">Любой</span>
            <span class="filter__floors-floor" data-floor="2">2</span>
            <span class="filter__floors-floor" data-floor="3">3</span>
            <span class="filter__floors-floor" data-floor="4">4</span>
            <span class="filter__floors-floor" data-floor="5">5</span>
        </div>
    </div>
    <div class="filter__show-places">
            <span class="filter__show-places-show"><span
                        class="filter__show-places-show-number-wrapper">Показать&nbsp;<span
                            class="filter__show-places-show-number">0</span> <span
                            class="filter__show-places-show-number-title">мест</span></span></span>
        <span class="filter__show-places-clean"><img src="img/clean.png" alt=""></span>
    </div>
    <div class="filter__places-list">
            <span class="filter__places-list-title">Доступно <span
                        class="filter__places-list-title-number"><span
                            class="filter__places-list-title-number-number">0</span> <span
                            class="filter__places-list-title-number-title">мест</span></span></span>


        <div class="filter__places-list-sorting">
            <span class="filter__places-list-sorting-title">Сортировать&nbsp;</span>
            <div class="filter__places-list-sorting-inner-wrapper">
                <span class="filter__places-list-sorting-by-parameter active" data-sort="price" data-direction="asc">по цене</span>
                <div class="filter__places-list-sorting-buttons-wrapper">
                    <span class="filter__places-list-sorting-by-parameter" data-sort="price">по цене</span>
                    <span class="filter__places-list-sorting-by-parameter" data-sort="area">по площади</span>
                </div>
            </div>
            <div class="filter__places-list-sorting-sort-arrow">
                <img src="img/arrow-bottom.png" alt="">
            </div>
        </div>

        <div class="filter__places-list-items">
            <?php for ($i = 0; $i <= 20; $i++) { ?>
                <div class="filter__places-list-item">
                    <div class="filter__places-list-item-column">
                        <span class="filter__places-list-item-number">№<span data-key="number">0</span></span>
                        <span class="filter__places-list-item-floor">Этаж <span data-key="level">0</span>/5</span>
                    </div>
                    <div class="filter__places-list-item-column">
                        <span class="filter__places-list-item-price"><span data-key="price">0</span> ₽</span>
                        <span class="filter__places-list-item-size" data-key="size">Стандартное место</span>
                    </div>
                    <div class="filter__places-list-item-column">
                        <span class="filter__places-list-item-area"><span data-key="area">0</span> м²</span>
                        <span class="filter__places-list-item-area-detailed"><span data-key="width">0</span> м х <span
                                    data-key="length">0</span> м</span>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>
</div>
<!--footer scripts start-->
<script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="js/filter.js"></script>
<script>
    window.onload = function () {


        /* $(".filter__places-list-item").on("click", function (event) {
             $(".plan .overlay").css('display', 'block');
             $("#custom_smog").css('display', 'block');
             $(".plan__image svg").css('background', '#fff');
             $(".filter").css('box-shadow', 'none');
             $(this).addClass('active');
             ShowBigPopup($(this).data('place'));
         });*/
    };
</script>
<!--footer scripts end-->
</body>
</html>