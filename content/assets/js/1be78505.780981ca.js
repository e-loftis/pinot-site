(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9514,9793,0],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,b=m["".concat(c,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(b,i(i({ref:t},d),{},{components:n})):a.createElement(b,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9950:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var a=n(7294),r=n(4137),o=n(9962),i=n(7401),l=n(6265),c=n(2122),s=n(9756),d=n(6010),u=n(2433),m=n(9729),p=n(3301),b=n(5717),f=n(2511),h=n(2735),v=n(2827),E=function(e){return a.createElement("svg",(0,c.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=n(6416),_=n(6681),y=n(7130),k="sidebar_15mo",Z="sidebarWithHideableNavbar_267A",C="sidebarHidden_2kNb",N="sidebarLogo_3h0W",S="menu_Bmed",I="menuLinkText_2aKo",w="menuWithAnnouncementBar_2WvA",O="collapseSidebarButton_1CGd",T="collapseSidebarButtonIcon_3E-R",P="sidebarMenuIcon_fgN0",x="sidebarMenuCloseIcon_1lpH",M=["items"],A=["item","onItemClick","collapsible","activePath"],L=["item","onItemClick","activePath","collapsible"],R=function e(t,n){return"link"===t.type?(0,u.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},D=(0,a.memo)((function(e){var t=e.items,n=(0,s.Z)(e,M);return t.map((function(e,t){return a.createElement(j,(0,c.Z)({key:t,item:e},n))}))}));function j(e){switch(e.item.type){case"category":return a.createElement(B,e);case"link":default:return a.createElement(H,e)}}function B(e){var t,n=e.item,r=e.onItemClick,o=e.collapsible,i=e.activePath,l=(0,s.Z)(e,A),m=n.items,p=n.label,b=R(n,i),f=(0,u.D9)(b),h=(0,a.useState)((function(){return!!o&&(!b&&n.collapsed)})),v=h[0],E=h[1],g=(0,a.useRef)(null),_=(0,a.useState)(void 0),y=_[0],k=_[1],Z=function(e){var t;void 0===e&&(e=!0),k(e?(null==(t=g.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){b&&!f&&v&&E(!1)}),[b,f,v]);var C=(0,a.useCallback)((function(e){e.preventDefault(),y||Z(),setTimeout((function(){return E((function(e){return!e}))}),100)}),[y]);return 0===m.length?null:a.createElement("li",{className:(0,d.Z)("menu__list-item",{"menu__list-item--collapsed":v})},a.createElement("a",(0,c.Z)({className:(0,d.Z)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&b},t[I]=!o,t)),onClick:o?C:void 0,href:o?"#":void 0},l),p),a.createElement("ul",{className:"menu__list",ref:g,style:{height:y},onTransitionEnd:function(){v||Z(!1)}},a.createElement(D,{items:m,tabIndex:v?"-1":"0",onItemClick:r,collapsible:o,activePath:i})))}function H(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=(e.collapsible,(0,s.Z)(e,L)),i=t.href,l=t.label,u=R(t,r);return a.createElement("li",{className:"menu__list-item",key:l},a.createElement(f.Z,(0,c.Z)({className:(0,d.Z)("menu__link",{"menu__link--active":u}),to:i},(0,h.Z)(i)&&{isNavLink:!0,exact:!0,onClick:n},o),(0,h.Z)(i)?l:a.createElement("span",null,l,a.createElement(_.Z,null))))}function W(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,y.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,y.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,d.Z)("button button--secondary button--outline",O),onClick:t},a.createElement(E,{className:T}))}function F(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,y.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,y.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,d.Z)(P,x)},"\xd7"):a.createElement(g.Z,{className:P,height:24,width:24}))}var U=function(e){var t,n,r=e.path,o=e.sidebar,i=e.sidebarCollapsible,l=void 0===i||i,c=e.onCollapse,s=e.isHidden,f=function(){var e=(0,u.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,b.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),h=(0,u.LU)(),E=h.navbar.hideOnScroll,g=h.hideableSidebar,_=(0,u.nT)().isClosed,I=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,m.Z)(t);var r=(0,p.Z)();return(0,a.useEffect)((function(){r===p.D.desktop&&n(!1)}),[r]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),O=I.showResponsiveSidebar,T=I.closeResponsiveSidebar,P=I.toggleResponsiveSidebar;return a.createElement("div",{className:(0,d.Z)(k,(t={},t[Z]=E,t[C]=s,t))},E&&a.createElement(v.Z,{tabIndex:-1,className:N}),a.createElement("nav",{className:(0,d.Z)("menu","menu--responsive","thin-scrollbar",S,(n={"menu--show":O},n[w]=!_&&f,n)),"aria-label":(0,y.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},a.createElement(F,{responsiveSidebarOpened:O,onClick:P}),a.createElement("ul",{className:"menu__list"},a.createElement(D,{items:o,onItemClick:T,collapsible:l,activePath:r}))),g&&a.createElement(W,{onClick:c}))},K=n(5386),V=n(8177),z=n(5977),J={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainer:"docSidebarContainer_3Kbt",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function X(e){var t,n,i,c,s,m=e.currentDocRoute,p=e.versionMetadata,b=e.children,f=(0,o.Z)(),h=f.siteConfig,v=f.isClient,g=p.pluginId,_=p.version,k=function(e){var t,n=e.versionMetadata,a=e.currentDocRoute,r=n.permalinkToSidebar,o=n.docsSidebars,i=r[a.path]||r[(t=a.path,t.endsWith("/")?t:t+"/")]||r[function(e){return e.endsWith("/")?e.slice(0,-1):e}(a.path)];return{sidebar:o[i],sidebarName:i}}({versionMetadata:p,currentDocRoute:m}),Z=k.sidebarName,C=k.sidebar,N=(0,a.useState)(!1),S=N[0],I=N[1],w=(0,a.useState)(!1),O=w[0],T=w[1],P=(0,a.useCallback)((function(){O&&T(!1),I(!S)}),[O]);return a.createElement(l.Z,{key:v,wrapperClassName:u.kM.wrapper.docPages,pageClassName:u.kM.page.docPage,searchMetadatas:{version:_,tag:(0,u.os)(g,_)}},a.createElement("div",{className:J.docPage},C&&a.createElement("aside",{className:(0,d.Z)(J.docSidebarContainer,(t={},t[J.docSidebarContainerHidden]=S,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(J.docSidebarContainer)&&S&&T(!0)}},a.createElement(U,{key:Z,sidebar:C,path:m.path,sidebarCollapsible:null==(n=null==(i=h.themeConfig)?void 0:i.sidebarCollapsible)||n,onCollapse:P,isHidden:O}),O&&a.createElement("div",{className:J.collapsedDocSidebar,title:(0,y.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,y.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:P,onClick:P},a.createElement(E,{className:J.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,d.Z)(J.docMainContainer,(c={},c[J.docMainContainerEnhanced]=S||!C,c))},a.createElement("div",{className:(0,d.Z)("container padding-top--md padding-bottom--lg",J.docItemWrapper,(s={},s[J.docItemWrapperEnhanced]=S,s))},a.createElement(r.Zo,{components:K.Z},b)))))}var Y=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,z.LX)(r.pathname,e)}));return o?a.createElement(X,{currentDocRoute:o,versionMetadata:n},(0,i.Z)(t,{versionMetadata:n})):a.createElement(V.default,e)}},5386:function(e,t,n){"use strict";var a=n(7294),r=n(2511),o=n(2210),i=n(5607),l={code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(o.Z,e):a.createElement("code",e)},a:function(e){return a.createElement(r.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:a.createElement(o.Z,(0,a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:(0,i.Z)("h1"),h2:(0,i.Z)("h2"),h3:(0,i.Z)("h3"),h4:(0,i.Z)("h4"),h5:(0,i.Z)("h5"),h6:(0,i.Z)("h6")};t.Z=l},8177:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(6265),o=n(7130);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},283:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var a=n(2122),r=n(9756),o=n(7294),i=n(6010),l=n(2511),c=n(2433),s=n(9524),d="footerLogoLink_qW4Z",u="footerCopyright_2yvt",m=n(4087),p=["to","href","label","prependBaseUrlToHref"];function b(e){var t=e.to,n=e.href,i=e.label,c=e.prependBaseUrlToHref,d=(0,r.Z)(e,p),u=(0,s.Z)(t),m=(0,s.Z)(n,{forcePrependBaseUrl:!0});return o.createElement(l.Z,(0,a.Z)({className:"footer__link-item"},n?{href:c?m:n}:{to:u},d),i)}var f=function(e){var t=e.sources,n=e.alt;return o.createElement(m.Z,{className:"footer__logo",alt:n,sources:t})};var h=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,a=t.links,r=void 0===a?[]:a,m=t.logo,p=void 0===m?{}:m,h={light:(0,s.Z)(p.src),dark:(0,s.Z)(p.srcDark||p.src)};return e?o.createElement("footer",{className:(0,i.Z)("footer",{"footer--dark":"dark"===e.style})},o.createElement("div",{className:"container"},r&&r.length>0&&o.createElement("div",{className:"row footer__links"},r.map((function(e,t){return o.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.createElement("li",{key:e.href||e.to,className:"footer__item"},o.createElement(b,e))}))):null)}))),(p||n)&&o.createElement("div",{className:"footer__bottom text--center"},p&&(p.src||p.srcDark)&&o.createElement("div",{className:"margin-bottom--sm"},p.href?o.createElement(l.Z,{href:p.href,className:d},o.createElement(f,{alt:p.alt,sources:h})):o.createElement(f,{alt:p.alt,sources:h})),n?o.createElement("div",{className:u,dangerouslySetInnerHTML:{__html:n}}):null))):null}}}]);