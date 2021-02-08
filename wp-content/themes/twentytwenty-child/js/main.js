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
        center: [55.848511, 37.397703],
        zoom: 16
      });
      myMap.behaviors.enable('scrollZoom');
      myMap.behaviors.enable('drag');
      myPlacemark = new ymaps.Placemark([55.848511, 37.397703], {}, {
        iconLayout: 'default#image',
        iconImageSize: [70, 70]
      });
      myMap.geoObjects.add(myPlacemark);
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
    } else {
      mobileMenuHide();
    }
  }

  function mobileMenuHide() {
    hamburger.classList.remove('active');
    menu.classList.remove('header-menu-wrap--open');
    menuTop.classList.remove('header-top--mobile--open');
    body.classList.remove('no-scroll');
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
  var btnExcursionHead = document.querySelector('.header-top__btn');
  var popupExcursion = document.querySelector('.popup-excursion');
  var popupCall = document.querySelector('.popup-call');
  var popupClose = document.querySelectorAll('.popup-close');
  var callLink = document.querySelectorAll('.call__link');
  var body = document.getElementsByTagName('body')[0];
  var html = body.parentNode;
  btnExcursionHead.addEventListener('click', popupExcursionShow);
  popupClose.forEach(function (close) {
    close.addEventListener('click', function () {
      close.parentElement.style.display = 'none';
      body.classList.remove('no-scroll');
      html.classList.remove('html-overflow');
    });
  });
  callLink.forEach(function (link) {
    link.addEventListener('click', popupCallShow);
  });

  function popupExcursionShow() {
    popupExcursion.style.display = 'block';
    body.classList.add('no-scroll');
    html.classList.add('html-overflow');
  }

  function popupCallShow() {
    popupCall.style.display = 'block';
    body.classList.add('no-scroll');
    html.classList.add('html-overflow');
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