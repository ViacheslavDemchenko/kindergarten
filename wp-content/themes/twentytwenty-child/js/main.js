"use strict";

;

(function () {
  function getYear() {
    var date = new Date(),
        currentYear = date.getFullYear(),
        yearWrite = document.querySelector('.year');

    if (currentYear > 2020) {
      yearWrite.innerHTML = "\u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B \xA9 2020 \u2014 ".concat(currentYear);
    } else {
      yearWrite.innerHTML = "\u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B \xA9 ".concat(currentYear);
    }
  }

  ;
  getYear();
})();
"use strict";

;

(function () {
  if (document.querySelector('.gallery-top')) {
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 22,
      slidesPerView: 2,
      grabCursor: true,
      loop: true,
      loopAdditionalSlides: 4,
      loopedSlides: 1,
      navigation: {
        nextEl: '.kindergarten-button-next',
        prevEl: '.kindergarten-button-prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          loopedSlides: 1
        },
        560: {
          slidesPerView: 1,
          loopedSlides: 1
        },
        1200: {
          slidesPerView: 2
        },
        1365: {
          slidesPerView: 2
        }
      }
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      grabCursor: true,
      slidesPerView: 4,
      loopAdditionalSlides: 4,
      slideToClickedSlide: true,
      loop: true,
      loopedSlides: 1,
      breakpoints: {
        320: {
          slidesPerView: 2,
          loopedSlides: 1,
          loopAdditionalSlides: 4
        },
        560: {
          slidesPerView: 2,
          loopedSlides: 1,
          loopAdditionalSlides: 4
        },
        1200: {
          slidesPerView: 4,
          loopedSlides: 1,
          loopAdditionalSlides: 4
        },
        1365: {
          slidesPerView: 4,
          loopedSlides: 1,
          loopAdditionalSlides: 4
        }
      }
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
  }
})();
"use strict";

;

(function () {
  if (document.getElementById('map')) {
    var init = function init() {
      myMap = new ymaps.Map('map', {
        center: [55.775429, 37.764204],
        zoom: 16,
        controls: []
      });
      var myGeoObjects = [];
      myMap.behaviors.enable('scrollZoom');
      myMap.behaviors.enable('drag');
      myGeoObjects = new ymaps.Placemark([55.775429, 37.764204], {
        balloonContentBody: 'Детский сад «Ладошки»'
      }, {
        iconLayout: 'default#image',
        // Путь до нашей картинки
        iconImageHref: './wp-content/themes/twentytwenty-child/img/map-marker.png',
        // Размер по ширине и высоте
        iconImageSize: [40, 40],
        // Смещение левого верхнего угла иконки относительно
        // её «ножки» (точки привязки).
        iconImageOffset: [-20, -20]
      });
      var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: false
      });
      clusterer.add(myGeoObjects);
      myMap.geoObjects.add(clusterer);
    };

    ymaps.ready(init);
    var myMap, myPlacemark;
  }
})();
"use strict";

;

(function () {
  var hamburger = document.getElementById('menu__button');
  var body = document.getElementsByTagName('body')[0];
  var menuLinks = document.querySelectorAll('.nav__link');
  var menu = document.querySelector('.header-menu-wrap');
  var menuTop = document.querySelector('.header-top--mobile');
  var containerMobile = document.querySelector('.container--mobile');
  var screenWidth = window.screen.availWidth;
  hamburger.addEventListener('click', mobileMenu);

  function mobileMenuLinkClick() {
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenuHide();
      });
    });
  }

  mobileMenuLinkClick();

  function mobileMenu() {
    window.addEventListener('resize', function () {
      screenWidth = window.screen.availWidth;
      mobileMenuHide();
    });

    if (!hamburger.classList.contains('active')) {
      hamburger.classList.add('active');
      menu.classList.add('header-menu-wrap--open');
      menuTop.classList.add('header-top--mobile--open');
      body.classList.add('no-scroll');
      containerMobile.classList.add('container--mobile-no-padding');
    } else {
      mobileMenuHide();
    }
  }

  function mobileMenuHide() {
    hamburger.classList.remove('active');
    menu.classList.remove('header-menu-wrap--open');
    menuTop.classList.remove('header-top--mobile--open');
    body.classList.remove('no-scroll');
    containerMobile.classList.remove('container--mobile-no-padding');
  }

  window.addEventListener('resize', function () {
    screenWidth = window.screen.availWidth;

    if (screenWidth > 1024) {
      mobileMenuHide();
    }
  });
})();
"use strict";

;

(function () {
  var body = document.getElementsByTagName('body')[0];
  var html = body.parentNode;
  var modal = '';
  var div = document.createElement('div');
  div.classList.add('current-modal');
  var options = [{
    modal_call_btn: 'call__link',
    modal_call: 'popup popup-call',
    modal_call_title: 'Закажите обратный звонок',
    modal_form_id: 'popup-call',
    phone_input_id: 'popup-call__phone'
  }, {
    modal_excursion_btn: 'btn--excursion',
    modal_excursion: 'popup popup-excursion',
    modal_excursion_title: 'Запись на экскурсию в детский сад',
    modal_form_id: 'popup-excursion',
    phone_input_id: 'popup-excursion__phone'
  }, {
    modal_lesson_btn: 'btn--lesson',
    modal_lesson: 'popup popup-lesson',
    modal_lesson_title: 'Записаться на бесплатное занятие',
    modal_form_id: 'popup-lesson',
    phone_input_id: 'popup-lesson__phone'
  }, {
    modal_camp_btn: 'btn--camp',
    modal_camp: 'popup popup-camp',
    modal_camp_title: 'Записаться в лагерь',
    modal_form_id: 'popup-camp',
    phone_input_id: 'popup-camp__phone'
  }];
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains(options[0].modal_call_btn)) {
      modalShow(options[0].modal_call, options[0].modal_call_title, options[0].modal_form_id, options[0].phone_input_id);
    }

    if (e.target.classList.contains(options[1].modal_excursion_btn)) {
      modalShow(options[1].modal_excursion, options[1].modal_excursion_title, options[1].modal_form_id, options[1].phone_input_id);
    }

    if (e.target.classList.contains(options[2].modal_lesson_btn)) {
      modalShow(options[2].modal_lesson, options[2].modal_lesson_title, options[2].modal_form_id, options[2].phone_input_id);
    }

    if (e.target.classList.contains(options[3].modal_camp_btn)) {
      modalShow(options[3].modal_camp, options[3].modal_camp_title, options[3].modal_form_id, options[3].phone_input_id);
    }

    if (e.target.classList.contains('popup__close') || e.target.classList.contains('close__icon') || e.target.classList.contains('use__icon')) {
      modalHide();
    }
  });

  function modalShow(currentModal, modalTitle, formID, phoneInputID) {
    modal += "\n            <div class=\"overlay overlay--active overlay--second\">\n                <div class=\"".concat(currentModal, "\">\n                    <h3 class=\"popup__title\">").concat(modalTitle, "</h3>\n                    <div class=\"popup__close\">\n                        <svg class=\"close__icon\">\n                            <use class=\"use__icon\" xlink:href=\"./wp-content/themes/twentytwenty-child/img/icons/sprite.svg#close\"></use>\n                        </svg>\n                    </div>\n                    <form id=\"").concat(formID, "\" class=\"popup__form\" method=\"post\" action=\"#!\">\n                        <input class=\"header-form__phone\" name=\"name\" type=\"text\" placeholder=\"\u0412\u0410\u0428\u0415 \u0418\u041C\u042F\">\n                        <input class=\"header-form__phone\" name=\"phone\" id=\"").concat(phoneInputID, "\" type=\"text\" placeholder=\"+7 (___) ___-__-__\">\n                        <input class=\"header-form__phone header-form__child\" name=\"child\" type=\"text\" placeholder=\"\u0418\u041C\u042F \u0420\u0415\u0411\u0415\u041D\u041A\u0410\">\n                        <button class=\"btn header-form__btn\" type=\"submit\">\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F</button>\n                        <div class=\"policy-block\">\n                            <input class=\"policy-block__checkbox\" name=\"policy\" type=\"checkbox\" checked>\n                            <p class=\"policy\">\u0412\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 \n                                <a href=\"#!\"> \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445</a>\n                            </p>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        ");
    div.innerHTML = modal;
    body.appendChild(div);
    body.classList.add('no-scroll');
    html.classList.add('html-overflow');
    inputMask(document.getElementById(phoneInputID));
  }

  function modalHide() {
    modal = '';
    body.removeChild(div);
    body.classList.remove('no-scroll');
    html.classList.remove('html-overflow');
  }

  function inputMask(input) {
    function setMask(event) {
      var pressedKey;
      event.keyCode && pressedKey === event.keyCode;
      input.setSelectionRange(input.value.length, input.value.length);
      var maskType = '+7 (___) ___-__-__',
          i = 0,
          replaceValue = maskType.replace(/\D/g, ''),
          prevValue = this.value.replace(/\D/g, ''),
          currentValue = maskType.replace(/[_\d]/g, function (a) {
        return i < prevValue.length ? prevValue.charAt(i++) || replaceValue.charAt(i) : a;
      });
      i = currentValue.indexOf('_');

      if (i != -1) {
        i < 5 && (i = 3);
        currentValue = currentValue.slice(0, i);
      }

      var reg = maskType.substr(0, this.value.length).replace(/_+/g, function (a) {
        return '\\d{1,' + a.length + '}';
      }).replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');

      if (!reg.test(this.value) || this.value.length < 5 || pressedKey > 47 && pressedKey < 58) {
        this.value = currentValue;
      } else if (event.type === 'blur' && this.value.length < 5) {
        this.value = '';
      }

      input.setSelectionRange(input.value.length, input.value.length);
    }

    input.addEventListener('input', setMask, false);
    input.addEventListener('focus', setMask, false);
    input.addEventListener('blur', setMask, false);
    input.addEventListener('keydown', setMask, false);
  }
})();
"use strict";

;

(function () {
  if (document.querySelector('.advantages')) {
    var popupAdvantages = document.querySelector('.popup-advantages');
    var advantagesLinks = document.querySelectorAll('.item__more');
    var popupClose = document.querySelector('.popup__close');
    var body = document.getElementsByTagName('body')[0];
    var html = body.parentNode;
    var overlay = document.createElement('div');
    advantagesLinks.forEach(function (item) {
      item.addEventListener('click', function () {
        popupAdvantages.style.display = 'block';
        body.classList.add('no-scroll');
        html.classList.add('html-overflow');
        overlay.classList.add('overlay', 'overlay--active');
        body.appendChild(overlay);
      });
    });
    popupClose.addEventListener('click', function () {
      popupClose.parentElement.style.display = 'none';
      body.classList.remove('no-scroll');
      html.classList.remove('html-overflow');
      overlay.classList.remove('overlay', 'overlay--active');
      body.removeChild(overlay);
    });
  }
})();
"use strict";

;

(function () {
  if (document.querySelector('.tabs--schedule')) {
    var tabsTitles = document.querySelectorAll('.tabs--schedule .title__item');
    var tabsContent = document.querySelectorAll('.tabs-content--schedule .content__item');
    tabsTitles.forEach(function (title, i) {
      title.addEventListener('click', function () {
        tabsContent.forEach(function (content) {
          content.style.display = 'none';
        });
        tabsTitles.forEach(function (title) {
          title.classList.remove('title__item--active');
        });
        tabsContent[i].style.display = 'block';
        title.classList.add('title__item--active');
      });
    });
  }
})();
"use strict";

;

(function () {
  if (document.querySelector('.tabs')) {
    var tabsTitles = document.querySelectorAll('.tabs .title__item');
    var tabsContent = document.querySelectorAll('.tabs .content__item');
    tabsTitles.forEach(function (title, i) {
      title.addEventListener('click', function () {
        tabsContent.forEach(function (content) {
          // content.style.display = 'none';
          content.classList.remove('content__item--active');
        });
        tabsTitles.forEach(function (title) {
          title.classList.remove('title__item--active');
        }); // tabsContent[i].style.display = 'block';

        tabsContent[i].classList.add('content__item--active');
        title.classList.add('title__item--active');
      });
    });
  }
})();
"use strict";

;

(function () {
  if (document.querySelector('.teachers-top')) {
    var galleryTop = new Swiper('.teachers-top', {
      spaceBetween: 22,
      slidesPerView: 1,
      grabCursor: true,
      loop: true,
      loopAdditionalSlides: 4,
      loopedSlides: 1,
      navigation: {
        nextEl: '.teachers-button-next',
        prevEl: '.teachers-button-prev'
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          loopedSlides: 1
        },
        1200: {
          slidesPerView: 2
        },
        1365: {
          slidesPerView: 1
        }
      }
    });
    var galleryThumbs = new Swiper('.teachers-thumbs', {
      spaceBetween: 33,
      grabCursor: true,
      slidesPerView: 4,
      loopAdditionalSlides: 4,
      slideToClickedSlide: true,
      loop: true,
      loopedSlides: 1,
      breakpoints: {
        320: {
          slidesPerView: 2,
          loopedSlides: 1,
          loopAdditionalSlides: 4
        },
        560: {
          slidesPerView: 2,
          loopedSlides: 1,
          loopAdditionalSlides: 4
        },
        1200: {
          slidesPerView: 4,
          loopedSlides: 1,
          loopAdditionalSlides: 4
        },
        1365: {
          slidesPerView: 4,
          loopedSlides: 1,
          loopAdditionalSlides: 4
        }
      }
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
  }
})();
"use strict";

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.6
 */
(function () {
  if ("undefined" !== typeof window && window.addEventListener) {
    var e = Object.create(null),
        l,
        d = function d() {
      clearTimeout(l);
      l = setTimeout(n, 100);
    },
        m = function m() {},
        t = function t() {
      window.addEventListener("resize", d, !1);
      window.addEventListener("orientationchange", d, !1);

      if (window.MutationObserver) {
        var k = new MutationObserver(d);
        k.observe(document.documentElement, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });

        m = function m() {
          try {
            k.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1);
          } catch (v) {}
        };
      } else document.documentElement.addEventListener("DOMSubtreeModified", d, !1), m = function m() {
        document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
        window.removeEventListener("resize", d, !1);
        window.removeEventListener("orientationchange", d, !1);
      };
    },
        u = function u(k) {
      function e(a) {
        if (void 0 !== a.protocol) var c = a;else c = document.createElement("a"), c.href = a;
        return c.protocol.replace(/:/g, "") + c.host;
      }

      if (window.XMLHttpRequest) {
        var d = new XMLHttpRequest();
        var m = e(location);
        k = e(k);
        d = void 0 === d.withCredentials && "" !== k && k !== m ? XDomainRequest || void 0 : XMLHttpRequest;
      }

      return d;
    };

    var n = function n() {
      function d() {
        --q;
        0 === q && (m(), t());
      }

      function l(a) {
        return function () {
          !0 !== e[a.base] && (a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash), a.useEl.hasAttribute("href") && a.useEl.setAttribute("href", "#" + a.hash));
        };
      }

      function p(a) {
        return function () {
          var c = document.body,
              b = document.createElement("x");
          a.onload = null;
          b.innerHTML = a.responseText;
          if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
          d();
        };
      }

      function n(a) {
        return function () {
          a.onerror = null;
          a.ontimeout = null;
          d();
        };
      }

      var a,
          c,
          q = 0;
      m();
      var f = document.getElementsByTagName("use");

      for (c = 0; c < f.length; c += 1) {
        try {
          var g = f[c].getBoundingClientRect();
        } catch (w) {
          g = !1;
        }

        var h = (a = f[c].getAttribute("href") || f[c].getAttributeNS("http://www.w3.org/1999/xlink", "href") || f[c].getAttribute("xlink:href")) && a.split ? a.split("#") : ["", ""];
        var b = h[0];
        h = h[1];
        var r = g && 0 === g.left && 0 === g.right && 0 === g.top && 0 === g.bottom;
        g && 0 === g.width && 0 === g.height && !r ? (f[c].hasAttribute("href") && f[c].setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), b.length && (a = e[b], !0 !== a && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0), void 0 === a && (h = u(b), void 0 !== h && (a = new h(), e[b] = a, a.onload = p(a), a.onerror = n(a), a.ontimeout = n(a), a.open("GET", b), a.send(), q += 1)))) : r ? b.length && e[b] && setTimeout(l({
          useEl: f[c],
          base: b,
          hash: h
        }), 0) : void 0 === e[b] ? e[b] = !0 : e[b].onload && (e[b].abort(), delete e[b].onload, e[b] = !0);
      }

      f = "";
      q += 1;
      d();
    };

    var p = function p() {
      window.removeEventListener("load", p, !1);
      l = setTimeout(n, 0);
    };

    "complete" !== document.readyState ? window.addEventListener("load", p, !1) : p();
  }
})();