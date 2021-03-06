<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="img/favicon.png"/>
    <title>Этажи - FM Parking</title>

    <script>
        const vw_check = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if(vw_check < 1280) {
            window.location.href = './filter-m.php';
        }
    </script>

    <!--header styles start-->
<!--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css"/>-->
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="css/main.css">
    <!--header styles end-->
</head>
<body>
<div class="floors">
    <div class="filter">
        <a href="/" class="filter__logo-link"><img class="filter__logo" src="img/logo-floors.png" alt=""></a>
        <div class="filter__price-filter">
            <span class="filter__price-filter-title">Стоимость, ₽</span>
            <div class="filter__price-filter-inner-wrapper">
                <span class="filter__price-filter-min">от <span class="filter__price-filter-min-number">250 000</span> ₽</span>
                <span class="filter__price-filter-max">до <span class="filter__price-filter-max-number">750 000</span> ₽</span>
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
                            class="filter__show-places-show-number">0</span> <span class="filter__show-places-show-number-title">мест</span></span></span>
            <span class="filter__show-places-clean"><img src="img/clean.png" alt=""></span>
        </div>
        <div class="filter__places-list">
            <span class="filter__places-list-title">Доступно <span
                        class="filter__places-list-title-number"><span class="filter__places-list-title-number-number">0</span> <span class="filter__places-list-title-number-title">мест</span></span></span>


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
                <?php for($i = 0; $i <= 20; $i++) { ?>
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
                            <span class="filter__places-list-item-area-detailed"><span data-key="width">0</span> м х <span data-key="length">0</span> м</span>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>
    </div>
    <div class="plan">
        <div class="overlay"></div>
        <header class="plan__header">
            <a href="/" class="plan__header-to-main"><img src="img/arrow-left.png" alt=""> на главную</a>
            <div class="plan__header-inner-wrapper">
                <span class="plan__header-address"><img src="img/location-icon-floors.png" alt="">г. Москва, ул. Омская, 7А</span>
                <a href="tel:+74957740292" class="plan__header-phone"><img src="img/phone-icon-floors.png" alt="">+7
                    (495) 774-02-92</a>
            </div>
        </header>
        <div class="plan__image">
            <div class="plan__image-floor active uncommented" data-floor="2">
                <?php include "floor2.php" ?>
            </div>
            <div class="plan__image-floor commented" data-floor="3">
                <?php include "floor3.php" ?>
            </div>
            <div class="plan__image-floor commented" data-floor="4">
                <?php include "floor4.php" ?>
            </div>
            <div class="plan__image-floor commented" data-floor="5">
                <?php include "floor5.php" ?>
            </div>
            <div class="floors-changer">
                <span class="floors-changer__title">Этаж</span>
                <span class="floors-changer__item" data-floor="5">5<span></span></span>
                <span class="floors-changer__item" data-floor="4">4</span>
                <span class="floors-changer__item" data-floor="3">3</span>
                <span class="floors-changer__item active" data-floor="2">2</span>
            </div>
        </div>
        <footer class="plan__footer">
            <span class="plan__footer-developer">Построено в <a target="_blank" href="#">MOS DIGITAL</a></span>
        </footer>
        <div class="plcpu-full">
            <div class="plcpu-full__first">
                <div class="plcpu-full__first-left">
                    <span class="plcpu-full__first-title">Парковочное место №<span data-key="number">0</span></span>
                    <div class="plcpu-full__first-sizes">
                        <div class="plcpu-full__first-sizes-item">
                            <span class="plcpu-full__first-sizes-item-title">Площадь, м²</span>
                            <span class="plcpu-full__first-sizes-item-number"><span data-key="area">0</span> м²</span>
                        </div>
                        <div class="plcpu-full__first-sizes-item">
                            <span class="plcpu-full__first-sizes-item-title">Размер (ШхД), м</span>
                            <span class="plcpu-full__first-sizes-item-number"><span data-key="width">0</span> х <span data-key="length">0</span></span>
                        </div>
                        <div class="plcpu-full__first-sizes-item">
                            <span class="plcpu-full__first-sizes-item-title">Этаж</span>
                            <span class="plcpu-full__first-sizes-item-number"><span data-key="level">0</span>/5</span>
                        </div>
                    </div>
                    <div class="plcpu-full__first-price">
                        <span class="plcpu-full__first-price-title">Стоимость, ₽</span>
                        <span class="plcpu-full__first-price-number"><span data-key="price">0</span> ₽</span>
                    </div>
                    <!--                    <button class="plcpu-full__first-button">Оставить заявку</button>-->
                    <span data-number="0" class="plcpu-full__first-button">
                        <span class="plcpu-full__first-button-text">Оставить заявку</span>
                    </span>
                </div>
                <div class="plcpu-full__first-right">
                    <div class="plcpu-full__first-right-first-block">
                        <span class="plcpu-full__first-right-first-block-number"><span data-key="length">0</span><span>м</span></span>
                        <img class="plcpu-full__first-right-first-block-img" src="img/arrow-vertical.png" alt="">
                    </div>
                    <div class="plcpu-full__first-right-second-block">
                        <span class="plcpu-full__first-right-second-block-number"><span data-key="width">0</span><span>м</span></span>
                        <img class="plcpu-full__first-right-second-block-img1" src="img/arrow-horizontal.png" alt="">
                        <img class="plcpu-full__first-right-second-block-img2" src="img/car.png" alt="">
                    </div>
                    <span class="plcpu-full__close"><img src="img/close.png" alt=""></span>
                </div>
            </div>
            <div class="plcpu-full__second">
                <span class="plcpu-full__second-title">Мы сообщим о старте продаж!</span>
                <span class="plcpu-full__second-button">
                        <span class="plcpu-full__second-button-text">Хочу знать первым!</span>
                </span>
            </div>
        </div>
        <div class="contact-form contact-form--main">
            <div class="contact-from__top">
                <span class="contact-from__title">Парковочное место<br>№<span data-key="number">0</span></span>
                <span class="contact-form__close"><img src="img/close-green.png" alt=""></span>
            </div>
            <form class="contact-from__form" action="/" method="post">
                <label class="contact-from__label" for="name">Как ваше имя?</label>
                <input class="contact-from__input" id="name" type="text" name="name" placeholder="Имя" required>
                <label class="contact-from__label" for="phone">Номер телефона</label>
                <input class="contact-from__input" id="phone" type="tel" name="phone" placeholder="+7 (___) ___-__-__" required>
                <input class="contact-from__input" id="place" type="hidden" name="place" value="0">
                <input class="contact-from__input" id="price" type="hidden" name="price" value="0">
                <input class="contact-from__input" id="form_type" type="hidden" name="form_type" value="Заказ парковочного места">
                <label class="contact-from__agreement">Я даю свое согласие на обработку персональных
                    данных и соглашаюсь с условиями и политикой
                    конфиденциальности
                    <input type="checkbox" checked="checked" required>
                    <span class="checkmark"></span>
                </label>
                <button type="submit" class="contact-from__submit"><span>Оставить заявку</span></button>
            </form>
        </div>
        <div class="contact-form contact-form--sales-start">
            <div class="contact-from__top">
                <span class="contact-from__title">Сообщить<br>о старте продаж?</span>
                <span class="contact-form__close"><img src="img/close-green.png" alt=""></span>
            </div>
            <form class="contact-from__form" action="/" method="post">
                <label class="contact-from__label" for="name">Как ваше имя?</label>
                <input class="contact-from__input" id="name" type="text" name="name" placeholder="Имя" required>
                <label class="contact-from__label" for="phone">Номер телефона</label>
                <input class="contact-from__input" id="phone" type="tel" name="phone" placeholder="+7 (___) ___-__-__" required>
                <input class="contact-from__input" id="place" type="hidden" name="place" value="0">
                <input class="contact-from__input" id="price" type="hidden" name="price" value="0">
                <input class="contact-from__input" id="form_type" type="hidden" name="form_type" value="Сообщить о старте продаж">
                <label class="contact-from__agreement">Я даю свое согласие на обработку персональных
                    данных и соглашаюсь с условиями и политикой
                    конфиденциальности
                    <input type="checkbox" checked="checked" required>
                    <span class="checkmark"></span>
                </label>
                <button type="submit" class="contact-from__submit"><span>Сообщить</span></button>
            </form>
        </div>
        <div class="contact-form contact-form--thanks contact-form--thanks-main">
            <div class="contact-from__top">
                <span class="contact-from__title">Парковочное место<br>№<span data-key="number">0</span></span>
            </div>
            <div class="contact-from__form contact-from__form--thanks">
                <img src="img/form-thanks.png" alt="#">
                <span class="contact-from__form-title">Заявка успешно отправлена!</span>
                <span class="contact-from__form-subtitle">В ближайшее время с вами свяжется менеджер для уточнения деталей!</span>
                <button class="contact-from__from-close"><span>Закрыть</span></button>
            </div>
        </div>
        <div class="contact-form contact-form--thanks contact-form--thanks-sales-start">
            <div class="contact-from__top">
                <span class="contact-from__title">Сообщить<br>о старте продаж?</span>
            </div>
            <div class="contact-from__form contact-from__form--thanks">
                <img src="img/form-thanks.png" alt="#">
                <span class="contact-from__form-title">Заявка успешно отправлена!</span>
                <span class="contact-from__form-subtitle">Мы сообщим о старте продаж.</span>
                <button class="contact-from__from-close"><span>Закрыть</span></button>
            </div>
        </div>
    </div>
    <!--        plcpu -> place popup-->
    <div class="plcpu-short">
        <span class="plcpu-short__title">Место №<span data-key="number">0</span></span>
        <div class="plcpu-short__area-wrapper">
            <div class="plcpu-short__area1">
                <span class="plcpu-short__area1-top">Площадь, м²</span>
                <span class="plcpu-short__area1-bottom"><span data-key="area">0</span><span class="small"> м²</span></span>
            </div>
            <div class="plcpu-short__area2">
                <span class="plcpu-short__area2-top">Размер (ШхД), м</span>
                <span class="plcpu-short__area2-bottom"><span data-key="width">0</span><span class="small"> х </span><span data-key="length">0</span></span>
            </div>
        </div>
        <div class="plcpu-short__price-wrapper">
            <span class="plcpu-short-price-title">Стоимость, ₽</span>
            <span class="plcpu-short-price-number"><span data-key="price">0</span> ₽</span>
        </div>
    </div>
</div>
<!--footer scripts start-->
<script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<!--<script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
<script src="js/filter.js"></script>
<script src="js/plan.js"></script>
<script>
    window.onload = function () {
        /*$(".filter__places-list-item").on("click", function (event) {
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