"use strict";

// const galleryThumbs = new Swiper('.gallery-thumbs', {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   centeredSlides: true,
//   loop: true,
//   freeMode: true,
//   loopedSlides: 4,
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true
// });
// const galleryTop = new Swiper('.gallery-top', {
//   spaceBetween: 22,
//   slidesPerView: 3,
//   slidesOffsetAfter: 200,
//   slidesOffsetBefore: 200,
//   grabCursor: true,
//   loop: true,
//   freeMode: true,
//   loopedSlides: 2,
//   normalizeSlideIndex: true,
//   slideVisibleClass: 	'swiper-slide-visible',
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   thumbs: {
//     swiper: {
//       el: '.gallery-thumbs',
//       slidesPerView: 2,
//       spaceBetween: 10,
//       loop: true
//     },
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1
//     },
//     1920: {
//       slidesPerView: 3
//     }
//   }
// });
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  loop: true,
  loopedSlides: 1,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      loopedSlides: 1
    }
  }
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 22,
  slidesPerView: 2,
  loop: true,
  loopedSlides: 1,
  // autoplay: {
  //   delay: 3000,
  // },
  navigation: {
    nextEl: '.kindergarten-button-next',
    prevEl: '.kindergarten-button-prev'
  },
  thumbs: {
    swiper: {
      el: '.gallery-thumbs',
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      loopedSlides: 1,
      centeredSlides: true,
      breakpoints: {
        320: {
          slidesPerView: 2,
          loopedSlides: 1
        }
      }
    }
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
"use strict";

;

(function () {
  var hamburger = document.getElementById('menu__button');
  var body = document.getElementsByTagName('body')[0];
  var menuLinks = document.querySelectorAll('.nav__link');
  var menu = document.querySelector('.header-menu-wrap');
  var menuTop = document.querySelector('.header-top--mobile');
  var headerContent = document.querySelector('.header-content');
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
      hamburger.classList.remove('active');
      menu.classList.remove('header-menu-wrap--open');
      menuTop.classList.remove('header-top--mobile--open');
      body.classList.remove('no-scroll');
      body.classList.remove('overlay');
    });

    if (!hamburger.classList.contains('active')) {
      hamburger.classList.add('active');
      menu.classList.add('header-menu-wrap--open');
      menuTop.classList.add('header-top--mobile--open');
      headerContent.classList.add('header-content--open');
      body.classList.add('no-scroll');
      body.classList.add('overlay');
    } else {
      hamburger.classList.remove('active');
      menu.classList.remove('header-menu-wrap--open');
      menuTop.classList.remove('header-top--mobile--open');
      body.classList.remove('no-scroll');
      body.classList.remove('overlay');
    }
  }

  function mobileMenuHide() {
    hamburger.classList.remove('active');
    menu.classList.remove('header-menu-wrap--open');
    menuTop.classList.remove('header-top--mobile--open');
    body.classList.remove('no-scroll');
    body.classList.remove('overlay');
  }

  window.addEventListener('resize', function () {
    screenWidth = window.screen.availWidth;

    if (screenWidth > 1024) {
      hamburger.classList.remove('active');
      menu.classList.remove('header-menu-wrap--open');
      menuTop.classList.remove('header-top--mobile--open');
      body.classList.remove('no-scroll');
      body.classList.remove('overlay');
    }
  });
})();
"use strict";

;

(function () {
  var btnExcursionHead = document.querySelector('.header-top__btn');
  var popupExcursion = document.querySelector('.popup-excursion');
  var popupClose = document.querySelectorAll('.popup-close');
  btnExcursionHead.addEventListener('click', popupExcursionShow);
  popupClose.forEach(function (close) {
    close.addEventListener('click', function () {
      close.parentElement.style.display = 'none';
    });
  });

  function popupExcursionShow() {
    popupExcursion.style.display = 'block';
  }
})();
"use strict";

;

(function () {
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
})();
"use strict";

// const teachersThumbs = new Swiper('.teachers-thumbs', {
//     spaceBetween: 33,
//     slidesPerView: 4,
//     loop: true,
//     freeMode: true,
//     loopedSlides: 5,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
//   });
//   const teachersTop = new Swiper('.teachers-top', {
//     speed: 400,
//     spaceBetween: 22,
//     slidesPerView: 1,
//     loop: true,
//     freeMode: true,
//     loopedSlides: 5,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     thumbs: {
//       swiper: {
//         el: '.teachers-thumbs',
//         slidesPerView: 2,
//         spaceBetween: 5,
//         loop: true
//       }
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 1
//       }
//     }
// });
var galleryThumbs = new Swiper('.teachers-thumbs', {
  spaceBetween: 14,
  slidesPerView: 4,
  loop: true,
  loopedSlides: 1,
  breakpoints: {
    320: {
      slidesPerView: 2,
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
var galleryTop = new Swiper('.teachers-top', {
  spaceBetween: 22,
  slidesPerView: 2,
  loop: true,
  loopedSlides: 1,
  // autoplay: {
  //   delay: 3000,
  // },
  navigation: {
    nextEl: '.teachers-button-next',
    prevEl: '.teachers-button-prev'
  },
  thumbs: {
    swiper: {
      el: '.teachers-thumbs',
      slidesPerView: 4,
      spaceBetween: 10,
      loop: true,
      loopedSlides: 1,
      breakpoints: {
        320: {
          slidesPerView: 2,
          loopedSlides: 1
        },
        1200: {
          slidesPerView: 2
        },
        1365: {
          slidesPerView: 2
        }
      }
    }
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