(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{162:function(e,t,a){"use strict";var r=a(3),l=a(8),o=a(0),n=a.n(o),c=a(147),s=a(146),m=a(148),i=a(150),f=a(58),u=a.n(f),_=a(159),h=["to","href","label","prependBaseUrlToHref"];function d(e){var t=e.to,a=e.href,o=e.label,c=e.prependBaseUrlToHref,m=Object(l.a)(e,h),f=Object(i.a)(t),u=Object(i.a)(a,{forcePrependBaseUrl:!0});return n.a.createElement(s.a,Object(r.a)({className:"footer__link-item"},a?{href:c?u:a}:{to:f},m),o)}var E=function(e){var t=e.sources,a=e.alt;return n.a.createElement(_.a,{className:"footer__logo",alt:a,sources:t})};t.a=function(){var e=Object(m.useThemeConfig)().footer,t=e||{},a=t.copyright,r=t.links,l=void 0===r?[]:r,o=t.logo,f=void 0===o?{}:o,_={light:Object(i.a)(f.src),dark:Object(i.a)(f.srcDark||f.src)};return e?n.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},n.a.createElement("div",{className:"container"},l&&l.length>0&&n.a.createElement("div",{className:"row footer__links"},l.map((function(e,t){return n.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?n.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.a.createElement("li",{key:e.href||e.to,className:"footer__item"},n.a.createElement(d,e))}))):null)}))),(f||a)&&n.a.createElement("div",{className:"footer__bottom text--center"},f&&(f.src||f.srcDark)&&n.a.createElement("div",{className:"margin-bottom--sm"},f.href?n.a.createElement(s.a,{href:f.href,className:u.a.footerLogoLink},n.a.createElement(E,{alt:f.alt,sources:_})):n.a.createElement(E,{alt:f.alt,sources:_})),a?n.a.createElement("div",{className:u.a.footerCopyright,dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);