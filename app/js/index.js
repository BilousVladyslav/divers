if ($(".shop__items").length) {
    $(".shop__items").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="shop__arrow shop__arrow_left" src="../img/shop/ellipse-left.png">',
        nextArrow: '<img class="shop__arrow shop__arrow_right" src="../img/shop/ellipse-right.png">'
    });
}
if (document.body.clientWidth<1100){
    if ($(".trainers__wrapper").length) {
        $(".trainers__wrapper").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
    });
}}
