/*Скрыть рекламу над header*/
$(document).ready(function() {
  $('.top-banner_close').click(function(){
    $('.top-banner').addClass('hide');
  });
});

/*Добавление класса при загрузке страницы о компании*/

$(document).ready(function(){
  $('.about-page_tape').addClass('fadeInRight').addClass('animated');
  setTimeout(function() {
    $('.about-page_car').removeClass('hide').addClass('fadeInRightBig').addClass('animated');
  }, 100);
  setTimeout(function() {
    $('.about-page_plus').removeClass('hide');
  }, 1100);
  setTimeout(function() {
    $('.about-page_intro_top .about-page_intro_info').removeClass('hide').addClass('fadeInUp').addClass('animated');
  }, 1300);
  setTimeout(function() {
    $('.about-page_intro_top .about-page_description').removeClass('hide').addClass('fadeInUp').addClass('animated');
  }, 1500);
  setTimeout(function() {
    $('.about-page_intro_bottom').removeClass('hide').addClass('fadeInUp').addClass('animated');
  }, 2000);

  function checkWidth() {
    var elem = $('.about-page_intro_bottom .about-page_title'),
      elem2 = $('.about-page_merits_info .about-page_title'),
      elem3 = $('.about-page_merits_info .about-page_description'),
      elem4 = $('.about-page_video_right .about-page_title'),
      elem5 = $('.about-page_video_right .about-page_description');
    if(($(window).width()) < 651){
      elem.addClass('center');
      elem2.addClass('center');
      elem3.addClass('center');
      elem4.addClass('center');
      elem5.addClass('center');
    }
    else if ($(window).width() > 650) {
      elem.removeClass('center');
      elem2.removeClass('center');
      elem3.removeClass('center');
      elem4.removeClass('center');
      elem5.removeClass('center');
    }
  }

  checkWidth();

  $(window).resize(function(){
    checkWidth();
  });
});

/*3 блока на главной странице превращаются в слайдер на мобиле*/

$(document).ready(function() {
  var swiper = undefined;
  function initSwiper() {
    var screenWidth = $(window).width();
    if(screenWidth < 992 && swiper == undefined) {
      swiper = new Swiper('.intro .swiper-container', {
        loop: true,
        autoplay: {
          delay: 5000
        },
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 2,
        autoHeight: 'true',
        pagination: {
          el: '.intro .swiper-pagination',
          clickable: true
        },
        breakpoints: {
          650: {
            slidesPerView: 1
          }
        }
      });
    } else if (screenWidth > 991 && swiper != undefined) {
      swiper.destroy();
      swiper = undefined;
      $('.intro .swiper-wrapper').removeAttr('style');
      $('.intro .swiper-slide').removeAttr('style');
    }
  }

  initSwiper();

  $(window).on('resize', function(){
    initSwiper();
  });
});

/*Блог превращаются в слайдер на мобиле*/

$(document).ready(function() {

  var swiper = undefined;
  function initSwiper() {
    var screenWidth = $(window).width();
    if(screenWidth < 992 && swiper == undefined) {
      swiper = new Swiper('.blog .swiper-container', {
        loop: true,
        autoplay: {
          delay: 5000
        },
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 20,
        pagination: {
          el: '.blog .swiper-pagination',
          clickable: true
        },
        breakpoints: {
          767: {
            slidesPerView: 2
          },
          575: {
            slidesPerView: 1
          }
        }
      });
    } else if (screenWidth > 991 && swiper != undefined) {
      swiper.destroy();
      swiper = undefined;
      $('.blog .swiper-wrapper').removeAttr('style');
      $('.blog .swiper-slide').removeAttr('style');
    }
  }

  initSwiper();

  $(window).on('resize', function(){
    initSwiper();
  });

});

/*Добавление в избранное, сравнение*/

$(document).ready(function() {
  $('.box_favorite, .box_compare, .box_favorite_row, .box_compare_row, .box_compare_icon, .card-product_favorite, .card-product_compare, .basket-page_favorite').click(function(){
    if ($(this).hasClass('active')){
      $(this).removeClass('active');
    }
    else {$(this).addClass('active');
    }
  });
});

/*Слайдер популярные категории*/

$(document).ready(function() {
  var swiper = new Swiper('.popular_slider .swiper-container', {
    slidesPerView: 6,
    slidesPerGroup: 1,
    spaceBetween: 20,
    loop: true,
    autoHeight: 'true',
    autoplay: {
      delay: 3000
    },
    pagination: {
      el: '.popular_slider .swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.popular_slider .swiper-button-next',
      prevEl: '.popular_slider .swiper-button-prev'
    },
    breakpoints: {
      1650: {
        slidesPerView: 4
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 15
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      380: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });
});

/*Переключение табов*/

$(document).ready(function() {
  $(".production_category_item").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
  $(function () {
    var tabContainers = $('.production_container > div');
    tabContainers.hide().filter(':last').show();
    $('.production_category_item').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.production_category_item').removeClass('selected');
      $(this).addClass('selected');
      return false;
    }).filter(':last').click();
  });
});

/*Двустрочный слайдер*/

$(document).ready(function() {
  var swiperHit = undefined;
  var swiperNew = undefined;
  var swiperSpecial = undefined;
  function initSwiper() {
    var screenWidth = $(window).width();
    if(screenWidth > 767 && swiperHit == undefined && swiperNew == undefined && swiperSpecial == undefined) {
      swiperHit = new Swiper('#hit .production_slider .swiper-container', {
        slidesPerView: 4,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'column',
        autoHeight: 'true',
        navigation: {
          nextEl: '#hit .production_slider .swiper-button-next',
          prevEl: '#hit .production_slider .swiper-button-prev'
        },
        breakpoints: {
          991: {
            slidesPerView: 3
          }
        }
      });
      swiperNew = new Swiper('#new .production_slider .swiper-container', {
        slidesPerView: 4,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'column',
        autoHeight: 'true',
        navigation: {
          nextEl: '#new .production_slider .swiper-button-next',
          prevEl: '#new .production_slider .swiper-button-prev'
        },
        breakpoints: {
          991: {
            slidesPerView: 3
          }
        }
      });
      swiperSpecial = new Swiper('#special .production_slider .swiper-container', {
        slidesPerView: 4,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'column',
        autoHeight: 'true',
        navigation: {
          nextEl: '#special .production_slider .swiper-button-next',
          prevEl: '#special .production_slider .swiper-button-prev'
        },
        breakpoints: {
          991: {
            slidesPerView: 3
          }
        }
      });
    } else if (screenWidth < 768 && swiperHit != undefined && swiperNew != undefined && swiperSpecial != undefined) {
      swiperHit.destroy();
      swiperNew.destroy();
      swiperSpecial.destroy();
      swiperHit = undefined;
      swiperNew = undefined;
      swiperSpecial = undefined;
      $('#hit .production_slider .swiper-wrapper').removeAttr('style');
      $('#hit .production_slider .swiper-slide').removeAttr('style');
      $('#new .production_slider .swiper-wrapper').removeAttr('style');
      $('#new .production_slider .swiper-slide').removeAttr('style');
      $('#special .production_slider .swiper-wrapper').removeAttr('style');
      $('#special .production_slider .swiper-slide').removeAttr('style');
    }
  }

  initSwiper();

  $(window).on('resize', function(){
    initSwiper();
  });

});

/*Слайдер вам может понравиться*/

$(document).ready(function() {
  var swiper = new Swiper('#may-like .swiper-container', {
    slidesPerView: 6,
    slidesPerGroup: 1,
    loop: true,
    autoHeight: 'true',
    pagination: {
      el: '#may-like .swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '#may-like .swiper-button-next',
      prevEl: '#may-like .swiper-button-prev'
    },
    breakpoints: {
      1650: {
        slidesPerView: 4
      },
      991: {
        slidesPerView: 3
      },
      650: {
        slidesPerView: 2
      },
      380: {
        slidesPerView: 1
      }
    }
  });
});

/*Слайдер просмотренные товары*/

$(document).ready(function() {
  var swiper = new Swiper('#view .swiper-container', {
    slidesPerView: 6,
    slidesPerGroup: 1,
    loop: true,
    autoHeight: 'true',
    pagination: {
      el: '#view .swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '#view .swiper-button-next',
      prevEl: '#view .swiper-button-prev'
    },
    breakpoints: {
      1650: {
        slidesPerView: 4
      },
      991: {
        slidesPerView: 3
      },
      650: {
        slidesPerView: 2
      },
      380: {
        slidesPerView: 1
      }
    }
  });
});

/*Слайдер похожие товары*/

$(document).ready(function() {
  var swiper = new Swiper('#similar .swiper-container', {
    slidesPerView: 6,
    slidesPerGroup: 1,
    loop: true,
    autoHeight: 'true',
    pagination: {
      el: '#similar .swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '#similar .swiper-button-next',
      prevEl: '#similar .swiper-button-prev'
    },
    breakpoints: {
      1650: {
        slidesPerView: 4
      },
      991: {
        slidesPerView: 3
      },
      650: {
        slidesPerView: 2
      },
      380: {
        slidesPerView: 1
      }
    }
  });
});

/*Слайдер хит продаж*/

$(document).ready(function() {
  var swiper = new Swiper('.subcategories_slider .swiper-container', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    loop: true,
    autoHeight: 'true',
    pagination: {
      el: '.subcategories_slider .swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.subcategories_slider .swiper-button-next',
      prevEl: '.subcategories_slider .swiper-button-prev'
    },
    breakpoints: {
      1650: {
        slidesPerView: 3
      },
      650: {
        slidesPerView: 2
      },
      380: {
        slidesPerView: 1
      }
    }
  });
});

/*Скрывать / показывать текст*/

$(document).ready(function() {
  var more1 = document.querySelector('.subcategories_more');
  var open1 = document.querySelector('.subcategories_additionally');

  if (open1) {
    open1.style.maxHeight = "0px";
    if (more1) {
      more1.addEventListener('click', function (e) {
        e.preventDefault();
        if (open1.scrollHeight + "px" == open1.style.maxHeight) {
          open1.style.maxHeight = "0px";
          more1.innerHTML = "Полное описание";
          more1.classList.remove('active');
        } else {
          open1.style.maxHeight = open1.scrollHeight + "px";
          more1.innerHTML = "Скрыть текст";
          more1.classList.add('active');
        }
      });
    }
  }


  /*var more2 = document.querySelector('.options_more');
  var open2 = document.querySelector('.options_additionally');


  if (open2) {
    open2.style.maxHeight = "0px";
    if (more2) {
      more2.addEventListener('click', function (e) {
        e.preventDefault();
        if (open2.scrollHeight + "px" == open2.style.maxHeight) {
          open2.style.maxHeight = "0px";
          more2.innerHTML = "Полное описание";
          more2.classList.remove('active');
        } else {
          open2.style.maxHeight = open2.scrollHeight + "px";
          more2.innerHTML = "Скрыть текст";
          more2.classList.add('active');
        }
      });
    }
  }*/


  var more3 = document.querySelector('.reviews_more');
  var open3 = document.querySelector('.reviews_additionally');


  if (open3) {
    open3.style.maxHeight = "0px";
    if (more3) {
      more3.addEventListener('click', function (e) {
        e.preventDefault();
        if (open3.scrollHeight + "px" == open3.style.maxHeight) {
          open3.style.maxHeight = "0px";
          more3.innerHTML = "Показать все отзывы";
          more3.classList.remove('active');
        } else {
          open3.style.maxHeight = open3.scrollHeight + "px";
          more3.innerHTML = "Скрыть отзывы";
          more3.classList.add('active');
        }
      });
    }
  }
});

/*Параметры поиска*/

$(document).ready(function() {
  $('.catalog_filter_name, .catalog_filter_view').click(function(){
    if ($(this).hasClass('active')){
      $(this).removeClass('active');}
    else {$(this).addClass('active');}
    if ($(this).next().hasClass('active')){
      $(this).next().removeClass('active');}
    else {$(this).next().addClass('active');}
  });
});

/*Slider-range*/

$(function () {
  $("#slider-range").slider({
    range: true,
    min: 125,
    max: 4151,
    values: [125, 4151],
    slide: function (event, ui) {
      $("#amount1").val("от" + " " + ui.values[0]);
      $("#amount2").val("до" + " " + ui.values[1]);
    },
  });
  $("#amount1").val($("#slider-range").slider("values", 0));
  $("#amount2").val($("#slider-range").slider("values", 1));
});

/*Select*/

$(document).ready(function() {
  $('.catalog_sorting_main').click(function(){
    if ($(this).hasClass('active')){
      $(this).removeClass('active');}
    else {$(this).addClass('active');}
    if ($(this).next().hasClass('active')){
      $(this).next().removeClass('active');}
    else {$(this).next().addClass('active');}
  });
  $('.catalog_sorting_item').click(function () {
    var text = $(this).text();
    $(this).parent('.catalog_sorting_list').prev().text(text);
    $('.catalog_sorting_list').removeClass('active');
    $('.catalog_sorting_main').removeClass('active');
  });
  $(document).mouseup(function (e) {
    var container = $(".catalog_sorting");
    if (container.has(this.target).length === 0){
      container.children().removeClass('active');
    }
  });
});

/*Номера страниц*/

$(document).ready(function() {
  $(".page_nav_number").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
});

/*Вид показа товаров*/

$(document).ready(function() {
  $(".catalog_view_item").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
});

/*Google maps Центральный офис*/

var mapElement = document.getElementById('map');
if (mapElement) {
  google.maps.event.addDomListener(window, 'load', init);
}
function init() {
  var mapOptions = {
    zoom: 12,
    disableDefaultUI: true,
    center: new google.maps.LatLng(55.7641703, 37.5217444),
    styles: [
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e9e9e9"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 29
          },
          {
            "weight": 0.2
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 18
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dedede"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "saturation": 36
          },
          {
            "color": "#333333"
          },
          {
            "lightness": 40
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f2f2f2"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      }
    ]
  };

  var map = new google.maps.Map(mapElement, mapOptions);

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(55.7641703, 37.5217444),
    map: map,
    title: 'Карта',
    icon: {
      url: "/img/map-marker.svg",
      scaledSize: new google.maps.Size(56, 74)
    }
  });
}

/*Слайдер Бренды*/

$(document).ready(function() {
  var swiper = new Swiper('.brands_slider .swiper-container', {
    slidesPerView: 6,
    slidesPerGroup: 1,
    loop: true,
    autoHeight: 'true',
    autoplay: {
      delay: 3000
    },
    navigation: {
      nextEl: '.brands_slider .swiper-button-next',
      prevEl: '.brands_slider .swiper-button-prev',
    },
    breakpoints: {
      1650: {
        slidesPerView: 4
      },
      991: {
        slidesPerView: 3
      }
    }
  });
});

/*Слайдер карточка товара*/

$(document).ready(function() {
  var galleryThumbs = new Swiper('.card-product_slider .gallery-thumbs', {
    spaceBetween: 25,
    slidesPerView: 3,
    direction: 'vertical',
    autoHeight: true,
    loop: false,
    freeMode: true,
    loopedSlides: 3, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      1650: {
        spaceBetween: 20
      },
      1199: {
        direction: 'horizontal',
        spaceBetween: 15
      }
    }
  });
  var galleryTop = new Swiper('.card-product_slider .gallery-top', {
    spaceBetween: 10,
    loop: true,
    autoHeight: true,
    grabCursor: true,
    loopedSlides: 3, //looped slides should be the same
    thumbs: {
      swiper: galleryThumbs
    },
    navigation: {
      nextEl: '.card-product_slider .swiper-button-next',
      prevEl: '.card-product_slider .swiper-button-prev'
    },
  });
});

/*Плавный скролл по якорным ссылкам*/

$(document).ready(function(){
  $(".card-product_info_right, .top-banner").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  15
});

/*Слайдер сравнение товаров*/

$(document).ready(function() {
  var swiper = new Swiper('.compare_slider .swiper-container', {
    slidesPerView: 6,
    slidesPerGroup: 1,
    spaceBetween: 10,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    autoHeight: true,
    navigation: {
      nextEl: '.compare_slider .swiper-button-next',
      prevEl: '.compare_slider .swiper-button-prev'
    },
    breakpoints: {
      1650: {
        slidesPerView: 4
      },
      991: {
        slidesPerView: 3
      },
      650: {
        slidesPerView: 2
      },
      380: {
        slidesPerView: 1
      }
    }
  });
});

/*Вопросы и ответы*/

$(document).ready(function() {
  $('.faq_question').click(function(){
    if ($(this).hasClass('active')){
      $(this).removeClass('active');}
    else {$(this).addClass('active');}
    if ($(this).next().hasClass('active')){
      $(this).next().removeClass('active');}
    else {$(this).next().addClass('active');}
  });
});

/*Переключение табов регистрации*/

$(document).ready(function() {
  $(".registration_link").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
  $(function () {
    var tabContainers = $('.registration_container > form');
    tabContainers.hide().filter(':first').show();
    $('.registration_link').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.registration_link').removeClass('selected');
      $(this).addClass('selected');
      return false;
    }).filter(':first').click();
  });
});

/*Кнопка добавления в корзину*/
$(document).ready(function() {
  $('.btn.basket').click(function(){
    $(this).addClass('add');
  });
});

/*Переключение табов оформление заказа*/

$(document).ready(function() {
  $(".order_link").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
  $(function () {
    var tabContainers = $('.order_recipient > div.order_box');
    tabContainers.hide().filter(':first').show();
    $('.order_link').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.order_link').removeClass('selected');
      $(this).addClass('selected');
      return false;
    }).filter(':first').click();
  });
});

/*Выбор пункта самовывоза*/

$(document).ready(function() {
  $(".order_pickup_box").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
});

/*Доставка, добавление класса при checked*/

$(document).ready(function() {
  $('.order_delivery_radio input:radio').change(function(){
    if($(".order_delivery_radio.express input").is(":checked")) {
      $('.order_express').addClass("show");
      $('.order_pickup').removeClass("show");
    } else {
      $('.order_pickup').addClass("show");
      $('.order_express').removeClass("show");
    }
  });
});

/*История заказов - раскрытие*/

$(document).ready(function() {
  $('.purchase_info').click(function(){
    if ($(this).hasClass('active')){
      $(this).removeClass('active');}
    else {$(this).addClass('active');}
    if ($(this).next().hasClass('active')){
      $(this).next().removeClass('active');}
    else {$(this).next().addClass('active');}
  });
});

/*Select*/

$(document).ready(function() {
  $('.waiting_sorting_main, .contacts_city_main').click(function(){
    if ($(this).hasClass('active')){
      $(this).removeClass('active');}
    else {$(this).addClass('active');}
    if ($(this).next().hasClass('active')){
      $(this).next().removeClass('active');}
    else {$(this).next().addClass('active');}
  });
  $('.waiting_sorting_item, .contacts_city_item').click(function () {
    var text = $(this).text();
    $(this).parent('.waiting_sorting_list, .contacts_city_list').prev().text(text);
    $('.waiting_sorting_list, .contacts_city_list').removeClass('active');
    $('.waiting_sorting_main, .contacts_city_main').removeClass('active');
  });
  $(document).mouseup(function (e) {
    var container = $(".waiting_sorting");
    if (container.has(this.target).length === 0){
      container.children().removeClass('active');
    }
  });
});

/*Переключение табов личные данные*/

$(document).ready(function() {
  $(".personal_link").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
  $(function () {
    var tabContainers = $('.personal_recipient > div.personal_box');
    tabContainers.hide().filter(':first').show();
    $('.personal_link').click(function () {
      tabContainers.hide();
      tabContainers.filter(this.hash).show();
      $('.personal_link').removeClass('selected');
      $(this).addClass('selected');
      return false;
    }).filter(':first').click();
  });
});

/*Выбор адреса доставки, выбор типа новостей*/

$(document).ready(function() {
  $(".address_box, .article-catalog_link").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
});

/*Google maps контакты по Москве*/

var mapElement2 = document.getElementById('map_msk');
if (mapElement2) {
  google.maps.event.addDomListener(window, 'load', init2);
}
function init2() {
  var mapOptions2 = {
    zoom: 12,
    disableDefaultUI: true,
    center: new google.maps.LatLng(55.7520263, 37.6153107),
    styles: [
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e9e9e9"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 29
          },
          {
            "weight": 0.2
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 18
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dedede"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#ffffff"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "saturation": 36
          },
          {
            "color": "#333333"
          },
          {
            "lightness": 40
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f2f2f2"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#fefefe"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      }
    ]
  };

  var map2 = new google.maps.Map(mapElement2, mapOptions2);

  var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(55.7641703, 37.5217444),
    map: map,
    title: 'Главный офис',
    icon: {
      url: "/img/map-marker.svg",
      scaledSize: new google.maps.Size(56, 74)
    }
  });
  var marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(55.725187, 37.7838423),
    map: map,
    title: 'Офис',
    icon: {
      url: "/img/map-marker.svg",
      scaledSize: new google.maps.Size(56, 74)
    }
  });
  var marker4 = new google.maps.Marker({
    position: new google.maps.LatLng(55.646453, 37.5927863),
    map: map,
    title: 'Склад',
    icon: {
      url: "/img/map-marker.svg",
      scaledSize: new google.maps.Size(56, 74)
    }
  });
}

/*Маска номера телефона*/

$(function(){
  if($('input').is('.phone')){
    $(".phone").mask("+7 (999) 999-99-99");
  }
});

/*function open_modal(e) {
  $('#'+ e).addClass('show');
  $('body').addClass('ov-hid');
}
function close_modal(e) {
  $('#'+ e).removeClass('show');
  $('body').removeClass('ov-hid');
}*/

$(document).ready(function() {
  $('.js-popup').click(function(e){
    e.preventDefault();
    $('.modalDialog').removeClass('show');
    var id = $(this).attr('href');
    $(id).addClass('show');
    $('body').addClass('ov-hid');
  });

  $('.closeModal').click(function(){
    $(this).closest('.modalDialog').removeClass('show');
    $('body').removeClass('ov-hid');
  });

  $(document).mouseup(function (e){
    var el = $(".modalDialog_container");
    if (!el.is(e.target) && el.has(e.target).length === 0) {
      el.closest('.modalDialog').removeClass('show');
      $('body').removeClass('ov-hid');
    }
  });
});

/*Закрытие модального окна*/

/*$(document).click(function(event) {
// console.log(event.target);
  if(!$(event.target).closest('.modalDialog_container').length
    && !$(event.target).hasClass('top-menu_city_name')
    && !$(event.target).hasClass('header_user_link')
    && !$(event.target).hasClass('top-menu_call')
    && !$(event.target).hasClass('basket')
    && !$(event.target).hasClass('box_view')
    && !$(event.target).hasClass('stock-page_call')
    && !$(event.target).hasClass('btn_yellow')
    && !$(event.target).hasClass('jobs_btn')
    && !$(event.target).hasClass('footer_call')){
    $(".modalDialog").removeClass('show');
    $('body').removeClass('ov-hid');
  }
});*/

/*Каталог - отменить переход по ссылке на мобиле, если есть дочерние элементы*/

$(function() {
  $(".nav_cat_link, .nav_menu_link, .nav_dropdown_name").on("click", function(event) {
    $(window).width() > 767 || $(this).hasClass("link") || event.preventDefault()
  })
});

/*Добавление классов выпадающему меню на мобильной версии*/

$(document).ready(function() {
  $('.nav_cat_link').click(function(){
    if ($('.nav_menu').hasClass('active')){
      $('.nav_menu').removeClass('active');
      $('body').removeClass('ov-hid');
    }
    else {
      $('.nav_menu').addClass('active');
      $('body').addClass('ov-hid');
    }
  });
  $('.nav_menu_link').click(function(){
    if ($(this).next().hasClass('active')){
      $(this).next().removeClass('active');
    }
    else {
      $(this).next().addClass('active');
    }
  });
  $('.nav_dropdown_back').click(function(){
    $('.nav_menu').addClass('active');
  });
});

/*Выподающее скню на мобильном раскрытие 2-го уровня*/

$(document).ready(function() {
  $('.nav_dropdown_name').click(function(){
    if ($(this).hasClass('active')){
      $(this).removeClass('active');}
    else {$(this).addClass('active')}
    if ($(this).siblings().hasClass('active')){
      $(this).siblings().removeClass('active');}
    else {$(this).siblings().addClass('active');}
  });
  $('.nav_dropdown_back').click(function(){
    $('.nav_dropdown').removeClass('active');
  });
});

/*Блок с поиском на мобиле*/

$(document).ready(function() {
  $('.header_search_mobile').click(function(){
    if ($('.header_search').hasClass('active')){
      $('.header_search').removeClass('active');}
    else {$('.header_search').addClass('active');}
    if ($(this).hasClass('active')){
      $(this).removeClass('active');}
    else {$(this).addClass('active')}
  });
});

/*Футер на мобильном раскрытие*/

$(document).ready(function() {
  $('.footer_nav_name').click(function(){
    if ($(this).hasClass('active')){
      $(this).removeClass('active');}
    else {$(this).addClass('active')}
    if ($(this).siblings().hasClass('active')){
      $(this).siblings().removeClass('active');}
    else {$(this).siblings().addClass('active');}
  });
});

/*Вакансии*/

$(document).ready(function() {
  $('.jobs_main').click(function(){
    if ($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).parents('.jobs_box').removeClass('active');
      $(this).next().removeClass('active');}
    else {$(this).addClass('active');
      $(this).parents('.jobs_box').addClass('active');
      $(this).next().addClass('active');}
  });
  $(document).mouseup(function (e) {
    var container = $(".catalog_sorting");
    if (container.has(this.target).length === 0){
      container.children().removeClass('active');
    }
  });
});



/*3D панорама*/

$(document).ready(function() {
  pannellum.viewer('panorama', {
    "default": {
      "firstScene": "photo-1",
      "sceneFadeDuration": 1000
    },

    "scenes": {
      "photo-1": {
        "title": "Вход",
        "type": "equirectangular",
        "panorama": "../img/PHOTO_1.jpg",
        "autoLoad": true,
        "hotSpots": [
          {
            "pitch": 0.0,
            "yaw": 6.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "",
            "sceneId": "photo-2"
          }
        ]
      },

      "photo-2": {
        "title": "",
        "type": "equirectangular",
        "panorama": "../img/PHOTO_2.jpg",
        "autoLoad": true,
        "hotSpots": [
          {
            "pitch": -8.0,
            "yaw": -163.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Выход",
            "sceneId": "photo-1"
          },
          {
            "pitch": 0.0,
            "yaw": -10.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Ресепшен",
            "sceneId": "photo-3"
          }
        ]
      },

      "photo-3": {
        "title": "Ресепшен",
        "type": "equirectangular",
        "panorama": "../img/PHOTO_3.jpg",
        "autoLoad": true,
        "hotSpots": [
          {
            "pitch": -8.0,
            "yaw": 170.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "",
            "sceneId": "photo-2"
          },
          {
            "pitch": -5.0,
            "yaw": 15.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "",
            "sceneId": "photo-4"
          },
          {
            "pitch": -3.0,
            "yaw": 87.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "",
            "sceneId": "photo-5"
          }
        ]
      },
      "photo-4": {
        "title": "",
        "type": "equirectangular",
        "panorama": "../img/PHOTO_4.jpg",
        "autoLoad": true,
        "hotSpots": [
          {
            "pitch": -3.0,
            "yaw": -84.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "",
            "sceneId": "photo-3"
          }
        ]
      },
      "photo-5": {
        "title": "",
        "type": "equirectangular",
        "panorama": "../img/PHOTO_5.jpg",
        "autoLoad": true,
        "hotSpots": [
          {
            "pitch": -8.0,
            "yaw": -175.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Ресепшен",
            "sceneId": "photo-3"
          },
          {
            "pitch": -5.0,
            "yaw": 0.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "",
            "sceneId": "photo-6"
          }
        ]
      },
      "photo-6": {
        "title": "",
        "type": "equirectangular",
        "panorama": "../img/PHOTO_6.jpg",
        "autoLoad": true,
        "hotSpots": [
          {
            "pitch": -10.0,
            "yaw": -88.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "",
            "sceneId": "photo-5"
          },
          {
            "pitch": -8.0,
            "yaw": -2.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Стекло, мягкие игрушки, сезонные товары",
            "sceneId": "photo-7"
          },
          {
            "pitch": -12.0,
            "yaw": -170.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Шоурум",
            "sceneId": "photo-16"
          }
        ]
      },
      "photo-7": {
        "title": "Стекло, мягкие игрушки, сезонные товары",
        "type": "equirectangular",
        "panorama": "../img/PHOTO_7.jpg",
        "autoLoad": true,
        "hotSpots": [
          {
            "pitch": -14.0,
            "yaw": -183.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "",
            "sceneId": "photo-6"
          },
          {
            "pitch": -8.0,
            "yaw": -5.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Изделия из керамики, аксесуары для флористов",
            "sceneId": "photo-8"
          }
        ]
      },
      "photo-8": {
        "title": "Изделия из керамики, аксесуары для флористов",
        "type": "equirectangular",
        "panorama": "../img/PHOTO_8.jpg",
        "autoLoad": true,
        "hotSpots": [
          {
            "pitch": -16.0,
            "yaw": -182.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Стекло, мягкие игрушки, сезонные товары",
            "sceneId": "photo-7"
          },
          {
            "pitch": -8.0,
            "yaw": -1.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Шнуры, ленты, кашпо",
            "sceneId": "photo-9"
          }
        ]
      },
      "photo-9": {
        "title": "Шнуры, ленты, кашпо",
        "type": "equirectangular",
        "panorama": "../img/PHOTO_9.jpg",
        "autoLoad": true,
        "hotSpots": [
          {
            "pitch": -15.0,
            "yaw": -177.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Изделия из керамики, аксесуары для флористов",
            "sceneId": "photo-8"
          },
          {
            "pitch": -8.0,
            "yaw": -4.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Изделия из дерева, упаковка",
            "sceneId": "photo-10"
          }
        ]
      },
      "photo-10": {
        "title": "Изделия из дерева, упаковка",
        "type": "equirectangular",
        "panorama": "../img/PHOTO_10.jpg",
        "autoLoad": true,
        "hotSpots": [
          {
            "pitch": -15.0,
            "yaw": -182.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Шнуры, ленты, кашпо",
            "sceneId": "photo-9"
          },
          {
            "pitch": -8.0,
            "yaw": -5.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Корзины, подарочная упаковка",
            "sceneId": "photo-11"
          }
        ]
      },
      "photo-11": {
        "title": "Корзины, подарочная упаковка",
        "type": "equirectangular",
        "panorama": "../img/PHOTO_11.jpg",
        "autoLoad": true,
        "hotSpots": [
          {
            "pitch": -15.0,
            "yaw": -178.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Изделия из дерева, упаковка",
            "sceneId": "photo-10"
          },
          {
            "pitch": -8.0,
            "yaw": 0.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Корзины, коробки",
            "sceneId": "photo-12"
          }
        ]
      },
      "photo-12": {
        "title": "Корзины, коробки",
        "type": "equirectangular",
        "panorama": "../img/PHOTO_12.jpg",
        "autoLoad": true,
        "hotSpots": [
          {
            "pitch": -15.0,
            "yaw": -176.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "",
            "sceneId": "photo-11"
          },
          {
            "pitch": -12.0,
            "yaw": -8.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Натуральные материалы, подарочные пакеты, муляжи",
            "sceneId": "photo-13"
          }
        ]
      },
      "photo-13": {
        "title": "Натуральные материалы, подарочные пакеты, муляжи",
        "type": "equirectangular",
        "panorama": "../img/PHOTO_13.jpg",
        "autoLoad": true,
        "hotSpots": [
          {
            "pitch": -15.0,
            "yaw": -175.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Корзины, коробки",
            "sceneId": "photo-12"
          },
          {
            "pitch": -10.0,
            "yaw": 0.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Цветы",
            "sceneId": "photo-14"
          }
        ]
      },
      "photo-14": {
        "title": "Цветы",
        "type": "equirectangular",
        "panorama": "../img/PHOTO_14.jpg",
        "autoLoad": true,
        "hotSpots": [
          {
            "pitch": -12.0,
            "yaw": 3.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Натуральные материалы, подарочные пакеты, муляжи",
            "sceneId": "photo-13"
          },
          {
            "pitch": -18.0,
            "yaw": 91.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Цветы",
            "sceneId": "photo-15"
          }
        ]
      },
      "photo-15": {
        "title": "Цветы",
        "type": "equirectangular",
        "panorama": "../img/PHOTO_15.jpg",
        "autoLoad": true,
        "hotSpots": [
          {
            "pitch": -10.0,
            "yaw": 1.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Цветы",
            "sceneId": "photo-14"
          }
        ]
      },
      "photo-16": {
        "title": "Шоурум",
        "type": "equirectangular",
        "panorama": "../img/PHOTO_showroom 1.jpg",
        "autoLoad": true,
        "hotSpots": [
          {
            "pitch": -10.0,
            "yaw": -70.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "",
            "sceneId": "photo-6"
          },
          {
            "pitch": -7.0,
            "yaw": -28.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Шоурум",
            "sceneId": "photo-17"
          },
          {
            "pitch": -32.0,
            "yaw": 132.0,
            "type": "info",
            "text": "<div class='panorama_info'><div class='panorama_caption'>Корзина</div><div class='panorama_description'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</div></div>"
          },
        ]
      },
      "photo-17": {
        "title": "Шоурум",
        "type": "equirectangular",
        "panorama": "../img/PHOTO_showroom 2.jpg",
        "autoLoad": true,
        "hotSpots": [
          {
            "pitch": -12.0,
            "yaw": 114.0,
            "type": "scene",
            "cssClass": "custom-hotspot",
            "text": "Шоурум",
            "sceneId": "photo-16"
          }
        ]
      }
    }
  });
});

/*Модальные окна*/

$(document).ready(function() {
  $('.js-popup').click(function(e){
    e.preventDefault();
    $('.popup').removeClass('show');
    var id = $(this).attr('href');
    $(id).addClass('show');
    $('body').addClass('ov-hid');
  });

  $('.popup__close').click(function(){
    $(this).closest('.popup').removeClass('show');
    $('body').removeClass('ov-hid');
  });

  $(document).mouseup(function (e){
    var el = $(".popup__wrapper");
    if (!el.is(e.target) && el.has(e.target).length === 0) {
      el.closest('.popup').removeClass('show');
      $('body').removeClass('ov-hid');
    }
  });
});
