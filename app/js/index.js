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
if (document.body.clientWidth<1100){
    if ($(".content-section__wrapper").length) {
        $(".content-section__wrapper").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
        });
    }
}
$(".request-call__close").click(function () {
  var t = this;
  $(this).parents(".request-call").removeClass("request-call_active-show");
  $('body').removeClass("fixed");
  setTimeout(function(){
    $(t).parents(".request-call").removeClass("request-call_active");
  }, 300);
});
$(".request-call__bg").click(function () {
  var t = this;
  $(this).parents(".request-call").removeClass("request-call_active-show");
  $('body').removeClass("fixed");
  setTimeout(function(){
    $(t).parents(".request-call").removeClass("request-call_active");
  }, 300);
});


$("#header__menu").change(function() {
  if ($(this).is(':checked')) {
    $('body').addClass("fixed");
  } else {
    $('body').removeClass("fixed");
  }
});

$(".top-section__details").click(function () {
  $(".request-call").addClass("request-call_active");
  $('body').addClass("fixed");
  setTimeout(function(){
    $(".request-call").addClass("request-call_active-show");
  }, 1);
});

$(function(){
  if (!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) document.body.classList.add('no-touch');

  if ($(this).scrollTop() > 20){
    $('header').addClass('header_active');
  } else {
    $('header').removeClass('header_active');
  }
  $(window).scroll(function(){
    if ($(this).scrollTop() > 20){
      $('header').addClass('header_active');
    } else {
      $('header').removeClass('header_active');
    }
  });
});
