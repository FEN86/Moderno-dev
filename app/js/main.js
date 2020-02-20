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
});