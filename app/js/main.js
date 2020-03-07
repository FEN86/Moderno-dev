$(function () {

  // rateYo
  $('.rate-star').rateYo({
    rating: 5,
    starWidth: "12px",
    ratedFill: "#ffa726",
    readOnly: true
  });

  // mixitup
  // var mixer = mixitup('.products__inner-box');
  var mixer = $('.products__inner-box').length ? mixitup('.products__inner-box') : false;

  // slick
  $('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4
  });

  // rage-slider
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });

  $('.icon-th-list').on('click', function () {
    $('.product-page__content .products__item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active');
  });


  $('.icon-th-large').on('click', function () {
    $('.product-page__content .products__item').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active');
  });

  $('.mobile-menu').on('click', function () {
    $('.menu').toggleClass('active');
  });

  $('.header__btn-menu').on('click', function () {
    $('.header__box').toggleClass('active');
  });
});