if ($(".shop__items").length) {
    $(".shop__items").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="shop__arrow shop__arrow_left" src="../img/shop/ellipse-left.png">',
        nextArrow: '<img class="shop__arrow shop__arrow_right" src="../img/shop/ellipse-right.png">'
    });
}
if ($(".shop__slick").length) {
    $(".shop__slick").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="shop__shares__arrow shop__shares__arrow_left" src="../img/shop/ellipse-left.png">',
        nextArrow: '<img class="shop__shares__arrow shop__shares__arrow_right" src="../img/shop/ellipse-right.png">'
    });
}
if ($(".top-section__slick").length) {
    $(".top-section__slick").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="top-section__arrow top-section__arrow_left" src="../img/shop/ellipse-left.png">',
        nextArrow: '<img class="top-section__arrow top-section__arrow_right" src="../img/shop/ellipse-right.png">'
    });
}


// trainers scroll or slider
$(".trainers").ready(function () {
    if (document.body.clientWidth<1100){
        if (document.getElementsByClassName('trainer-card').length < 3) {
            new SimpleBar($('.trainers__wrapper-scroll')[0])
            $(".trainer-card").css('width', '35%')
        }
        else {
            if ($(".trainers__wrapper").length) {
                $(".trainers__wrapper").slick({
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                });
            }
        }
    }
});

if ($(".trends__slick").length) {
    $(".trends__slick").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="trends__arrow trends__arrow_left" src="../img/shop/ellipse-left.png">',
        nextArrow: '<img class="trends__arrow trends__arrow_right" src="../img/shop/ellipse-right.png">'
    });
}
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
  $('body').css("overflow", "visible");
  setTimeout(function(){
    $(t).parents(".request-call").removeClass("request-call_active");
  }, 300);
});
$(".request-call__bg").click(function () {
  var t = this;
  $(this).parents(".request-call").removeClass("request-call_active-show");
  $('body').css("overflow", "visible");
  setTimeout(function(){
    $(t).parents(".request-call").removeClass("request-call_active");
  }, 300);
});


$("#header__menu").change(function() {
  if ($(this).is(':checked')) {
    $('body').css("overflow", "hidden");
  } else {
    $('body').css("overflow", "visible");
  }
});

$(".request-call__open").click(function () {
  $(".request-call").addClass("request-call_active");
  $('body').css("overflow", "hidden");
  setTimeout(function(){
    $(".request-call").addClass("request-call_active-show");
  }, 1);
});

//---------------------------------------------------------------------------
$(".info-popup__open").click(function () {
  $(".info-popup").addClass("info-popup_active");
  $('body').css("overflow", "hidden");
  setTimeout(function(){
    $(".info-popup").addClass("info-popup_active-show");
  }, 1);
});
$(".info-popup__close").click(function () {
  var t = this;
  $(this).parents(".info-popup").removeClass("info-popup_active-show");
  $('body').css("overflow", "visible");
  setTimeout(function(){
    $(t).parents(".info-popup").removeClass("info-popup_active");
  }, 300);
});
$(".info-popup__bg").click(function () {
  var t = this;
  $(this).parents(".info-popup").removeClass("info-popup_active-show");
  $('body').css("overflow", "visible");
  setTimeout(function(){
    $(t).parents(".info-popup").removeClass("info-popup_active");
  }, 300);
});

$(function(){
  if (!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) document.body.classList.add('no-touch');

  if ($(window).scrollTop() > 20){
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

  // Подсветка активного пункта меню при скроле
  $(window).scroll(function(){
    if ($(this).scrollTop() >= $(".courses").offset().top &&
        $(this).scrollTop() < $(".courses").offset().top + $(".courses").outerHeight()) {
      $(".header__items-item_1").addClass("header__items-item_active");
    } else {
      $(".header__items-item_1").removeClass("header__items-item_active");
    }

    if ($(this).scrollTop() >= $(".trainers").offset().top &&
        $(this).scrollTop() < $(".trainers").offset().top + $(".trainers").outerHeight()) {
      $(".header__items-item_3").addClass("header__items-item_active");
    } else {
      $(".header__items-item_3").removeClass("header__items-item_active");
    }

    if ($(this).scrollTop() >= $(".map-city").offset().top &&
        $(this).scrollTop() < $(".map-city").offset().top + $(".insta").outerHeight()) {
      $(".header__items-item_6").addClass("header__items-item_active");
    } else {
      $(".header__items-item_6").removeClass("header__items-item_active");
    }
  });


  // переход к выбраному пункту меню
  $(".courses__item").click(function () {
      $("HTML, BODY").animate({ scrollTop: $(".trends").offset().top + 1}, 1000);
  });
});
$(document).ready(function(){
    $("#header__nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#footer__nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#footer__tablet-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(".trends__second-level-nav-text").click(function () {
    $('.trends__slick').slick('refresh');
});$(".trends__second-level-nav-text").click(function () {
    $('.trends__slick').slick('refresh');
});
