(window.webpackJsonp=window.webpackJsonp||[]).push([[11,26,66],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(145),l=a(16),o=a(28),i=a(160),s=a(3),m=a(8),u=a(147),d=a(148),b=a(155),p=a(192),f=a(193),h=a(191),v=a(146),E=a(151),O=a(194),j=function(e){return r.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=a(195),k=a(153),N=a(85),C=a.n(N),_=["items"],S=["item","onItemClick","collapsible","activePath"],y=["item","onItemClick","activePath","collapsible"];var T=function e(t,a){return"link"===t.type?Object(d.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},I=Object(n.memo)((function(e){var t=e.items,a=Object(m.a)(e,_);return t.map((function(e,t){return r.a.createElement(w,Object(s.a)({key:t,item:e},a))}))}));function w(e){switch(e.item.type){case"category":return r.a.createElement(x,e);case"link":default:return r.a.createElement(A,e)}}function x(e){var t,a,c,l=e.item,o=e.onItemClick,i=e.collapsible,d=e.activePath,b=Object(m.a)(e,S),p=l.items,f=l.label,h=T(l,d),v=(a=h,c=Object(n.useRef)(a),Object(n.useEffect)((function(){c.current=a}),[a]),c.current),E=Object(n.useState)((function(){return!!i&&(!h&&l.collapsed)})),O=E[0],j=E[1],g=Object(n.useRef)(null),k=Object(n.useState)(void 0),N=k[0],_=k[1],y=function(e){var t;void 0===e&&(e=!0),_(e?(null===(t=g.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){h&&!v&&O&&j(!1)}),[h,v,O]);var w=Object(n.useCallback)((function(e){e.preventDefault(),N||y(),setTimeout((function(){return j((function(e){return!e}))}),100)}),[N]);return 0===p.length?null:r.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":O})},r.a.createElement("a",Object(s.a)({className:Object(u.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&h},t[C.a.menuLinkText]=!i,t)),onClick:i?w:void 0,href:i?"#!":void 0},b),f),r.a.createElement("ul",{className:"menu__list",ref:g,style:{height:N},onTransitionEnd:function(){O||y(!1)}},r.a.createElement(I,{items:p,tabIndex:O?"-1":"0",onItemClick:o,collapsible:i,activePath:d})))}function A(e){var t,a=e.item,n=e.onItemClick,c=e.activePath,l=(e.collapsible,Object(m.a)(e,y)),o=a.href,i=a.label,d=T(a,c);return r.a.createElement("li",{className:"menu__list-item",key:i},r.a.createElement(v.a,Object(s.a)({className:Object(u.a)("menu__link",(t={"menu__link--active":d},t[C.a.menuLinkExternal]=!Object(E.a)(o),t)),to:o},Object(E.a)(o)&&{isNavLink:!0,exact:!0,onClick:n},l),i))}function L(e){var t=e.onClick;return r.a.createElement("button",{type:"button",title:Object(k.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(k.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(u.a)("button button--secondary button--outline",C.a.collapseSidebarButton),onClick:t},r.a.createElement(j,{className:C.a.collapseSidebarButtonIcon}))}function B(e){var t=e.responsiveSidebarOpened,a=e.onClick;return r.a.createElement("button",{"aria-label":t?Object(k.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(k.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?r.a.createElement("span",{className:Object(u.a)(C.a.sidebarMenuIcon,C.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(g.a,{className:C.a.sidebarMenuIcon,height:24,width:24}))}var P=function(e){var t,a,c=e.path,l=e.sidebar,o=e.sidebarCollapsible,i=void 0===o||o,s=e.onCollapse,m=e.isHidden,v=function(){var e=Object(b.a)().isAnnouncementBarClosed,t=Object(n.useState)(!e),a=t[0],r=t[1];return Object(h.a)((function(t){var a=t.scrollY;e||r(0===a)})),a}(),E=Object(d.useThemeConfig)(),j=E.navbar.hideOnScroll,g=E.hideableSidebar,k=Object(b.a)().isAnnouncementBarClosed,N=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];Object(p.a)(t);var r=Object(f.a)();return Object(n.useEffect)((function(){r===f.b.desktop&&a(!1)}),[r]),{showResponsiveSidebar:t,closeResponsiveSidebar:Object(n.useCallback)((function(e){e.target.blur(),a(!1)}),[a]),toggleResponsiveSidebar:Object(n.useCallback)((function(){a((function(e){return!e}))}),[a])}}(),_=N.showResponsiveSidebar,S=N.closeResponsiveSidebar,y=N.toggleResponsiveSidebar;return r.a.createElement("div",{className:Object(u.a)(C.a.sidebar,(t={},t[C.a.sidebarWithHideableNavbar]=j,t[C.a.sidebarHidden]=m,t))},j&&r.a.createElement(O.a,{tabIndex:-1,className:C.a.sidebarLogo}),r.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",C.a.menu,(a={"menu--show":_},a[C.a.menuWithAnnouncementBar]=!k&&v,a))},r.a.createElement(B,{responsiveSidebarOpened:_,onClick:y}),r.a.createElement("ul",{className:"menu__list"},r.a.createElement(I,{items:l,onItemClick:S,collapsible:i,activePath:c}))),g&&r.a.createElement(L,{onClick:s}))},R=a(171),M=a(183),H=a(23),D=a(86),F=a.n(D);function W(e){var t,a,o,s,m,b=e.currentDocRoute,p=e.versionMetadata,f=e.children,h=Object(l.default)(),v=h.siteConfig,E=h.isClient,O=p.pluginId,g=p.permalinkToSidebar,N=p.docsSidebars,C=p.version,_=g[b.path],S=N[_],y=Object(n.useState)(!1),T=y[0],I=y[1],w=Object(n.useState)(!1),x=w[0],A=w[1],L=Object(n.useCallback)((function(){x&&A(!1),I(!T)}),[x]);return r.a.createElement(i.a,{key:E,wrapperClassName:d.ThemeClassNames.wrapper.docPages,pageClassName:d.ThemeClassNames.page.docPage,searchMetadatas:{version:C,tag:Object(d.docVersionSearchTag)(O,C)}},r.a.createElement("div",{className:F.a.docPage},S&&r.a.createElement("div",{className:Object(u.a)(F.a.docSidebarContainer,(t={},t[F.a.docSidebarContainerHidden]=T,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(F.a.docSidebarContainer)&&T&&A(!0)},role:"complementary"},r.a.createElement(P,{key:_,sidebar:S,path:b.path,sidebarCollapsible:null===(a=null===(o=v.themeConfig)||void 0===o?void 0:o.sidebarCollapsible)||void 0===a||a,onCollapse:L,isHidden:x}),x&&r.a.createElement("div",{className:F.a.collapsedDocSidebar,title:Object(k.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(k.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:L,onClick:L},r.a.createElement(j,{className:F.a.expandSidebarButtonIcon}))),r.a.createElement("main",{className:Object(u.a)(F.a.docMainContainer,(s={},s[F.a.docMainContainerEnhanced]=T||!S,s))},r.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",F.a.docItemWrapper,(m={},m[F.a.docItemWrapperEnhanced]=T,m))},r.a.createElement(c.a,{components:R.a},f)))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,c=t.find((function(e){return Object(H.matchPath)(n.pathname,e)}));return c?r.a.createElement(W,{currentDocRoute:c,versionMetadata:a},Object(o.a)(t)):r.a.createElement(M.default,e)}},162:function(e,t,a){"use strict";var n=a(3),r=a(8),c=a(0),l=a.n(c),o=a(147),i=a(146),s=a(148),m=a(150),u=a(58),d=a.n(u),b=a(159),p=["to","href","label","prependBaseUrlToHref"];function f(e){var t=e.to,a=e.href,c=e.label,o=e.prependBaseUrlToHref,s=Object(r.a)(e,p),u=Object(m.a)(t),d=Object(m.a)(a,{forcePrependBaseUrl:!0});return l.a.createElement(i.a,Object(n.a)({className:"footer__link-item"},a?{href:o?d:a}:{to:u},s),c)}var h=function(e){var t=e.sources,a=e.alt;return l.a.createElement(b.a,{className:"footer__logo",alt:a,sources:t})};t.a=function(){var e=Object(s.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,c=t.logo,u=void 0===c?{}:c,b={light:Object(m.a)(u.src),dark:Object(m.a)(u.srcDark||u.src)};return e?l.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===e.style})},l.a.createElement("div",{className:"container"},r&&r.length>0&&l.a.createElement("div",{className:"row footer__links"},r.map((function(e,t){return l.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(f,e))}))):null)}))),(u||a)&&l.a.createElement("div",{className:"footer__bottom text--center"},u&&(u.src||u.srcDark)&&l.a.createElement("div",{className:"margin-bottom--sm"},u.href?l.a.createElement(i.a,{href:u.href,className:d.a.footerLogoLink},l.a.createElement(h,{alt:u.alt,sources:b})):l.a.createElement(h,{alt:u.alt,sources:b})),a?l.a.createElement("div",{className:d.a.footerCopyright,dangerouslySetInnerHTML:{__html:a}}):null))):null}},183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(160),l=a(153);t.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},r.a.createElement(l.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.a.createElement("p",null,r.a.createElement(l.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.a.createElement("p",null,r.a.createElement(l.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);