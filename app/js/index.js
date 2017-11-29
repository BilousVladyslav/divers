if ($(".shop__items").length) {
    $(".shop__items").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="shop__arrow shop__arrow_left" src="../img/shop/ellipse-left.png">',
        nextArrow: '<img class="shop__arrow shop__arrow_right" src="../img/shop/ellipse-right.png">'
    });
}