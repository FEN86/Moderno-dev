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

  // mobile-menu
  $('.mobile-menu').on('click', function () {
    $('.menu').toggleClass('active');
  });

  // header-user
  $('.header__btn-menu').on('click', function () {
    $('.header__box').toggleClass('active');
  });

  // tabs
  $('.product-one__tabs .tab, .settings__tabs .tab, .profile-settings__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.product-one__tabs, .settings__tabs, .profile-settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs, .settings__tabs .tabs, .profile-settings__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });
});