<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="img/favicon.png"/>
    <title>Парковочное место - FM Parking</title>

    <!--header styles start-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css"/>
    <link rel="stylesheet" href="css/hamburgers.min.css">
    <link rel="stylesheet" href="css/main-mob.css">
    <!--header styles end-->
</head>
<body>
<header class="header">
    <div class="container">
        <div class="header__inner-wrapper">
            <button class="hamburger hamburger--spin" type="button">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
            </button>
            <a href="./m.html"><img class="header__logo" src="img/logo-mobile.png" alt=""></a>
        </div>
        <a href="tel:+74957740292" class="header__phone">+7 (495) 774-02-92</a>
    </div>
</header>
<div class="container">
    <h1 class="place-h1">Парковочное место №218</h1>
    <div class="place-img">
        <div class="place-img__first-block">
            <span class="place-img__first-block-number"><span data-key="length">5.8</span><span>м</span></span>
            <img class="place-img__first-block-img" src="img/arrow-vertical-m.png" alt="">
        </div>
        <div class="place-img__second-block">
            <span class="place-img__second-block-number"><span data-key="width">2.8</span><span>м</span></span>
            <img class="place-img__second-block-img1" src="img/arrow-horizontal-m.png" alt="">
            <img class="place-img__second-block-img2" src="img/car-m.png" alt="">
        </div>
    </div>
    <div class="place-sizes">
        <div class="place-sizes__item">
            <span class="place-sizes__item-title">Площадь, м²</span>
            <span class="place-sizes__item-number"><span data-key="area">30</span> м²</span>
        </div>
        <div class="place-sizes__item">
            <span class="place-sizes__item-title">Размер (Ш х Д), м</span>
            <span class="place-sizes__item-number"><span data-key="width">5</span> х <span data-key="length">6</span></span>
        </div>
        <div class="place-sizes__item">
            <span class="place-sizes__item-title">Этаж</span>
            <span class="place-sizes__item-number"><span data-key="level">3</span>/5</span>
        </div>
        <div class="place-sizes__item">
            <span class="place-sizes__item-title">Стоимость, ₽</span>
            <span class="place-sizes__item-number"><span data-key="price">800 000</span> ₽</span>
        </div>
    </div>
    <span class="place-book-button">Оставить заявку</span>
    <h2 class="place-h2">Место на плане этажа</h2>
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
    <div class="main__sales-start-notice">
        <span class="main__sales-start-notice-title">Мы сообщим<br>о старте продаж!</span>
        <span class="main__sales-start-notice-button">Хочу знать первым!</span>
    </div>
</div>
<!--footer scripts start-->
<script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>
<script src="js/place-page-m.js"></script>
</body>
</html>