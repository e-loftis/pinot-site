"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8603],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7821:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],l={title:"Introduction to Upserts in Apache Pinot",author:"Kenny Bastani",author_title:"Kenny Bastani",author_url:"https://medium.com/apache-pinot-developer-blog",author_image_url:"https://pbs.twimg.com/profile_images/1400521020973400069/5y2UMi4r_400x400.jpg",description:"Introduction to Pinot Upsert and explain why it\u2019s exciting and how you can start using it.",keywords:["Pinot","Realtime Pipelines","Upsert","Kafka","User-Facing Analytics","Real-time data platform"],tags:["Pinot","DevBlog","Upsert","real-time data platform","Realtime","Analytics","User-Facing Analytics"]},s=void 0,p={permalink:"/blog/2021/04/08/DevBlog-UpsertsIntro",editUrl:"https://github.com/apache/pinot-site/edit/dev/website/blog/2021-04-08-DevBlog-UpsertsIntro.md",source:"@site/blog/2021-04-08-DevBlog-UpsertsIntro.md",title:"Introduction to Upserts in Apache Pinot",description:"Introduction to Pinot Upsert and explain why it\u2019s exciting and how you can start using it.",date:"2021-04-08T00:00:00.000Z",formattedDate:"April 8, 2021",tags:[{label:"Pinot",permalink:"/blog/tags/pinot"},{label:"DevBlog",permalink:"/blog/tags/dev-blog"},{label:"Upsert",permalink:"/blog/tags/upsert"},{label:"real-time data platform",permalink:"/blog/tags/real-time-data-platform"},{label:"Realtime",permalink:"/blog/tags/realtime"},{label:"Analytics",permalink:"/blog/tags/analytics"},{label:"User-Facing Analytics",permalink:"/blog/tags/user-facing-analytics"}],readingTime:.465,truncated:!1,authors:[{name:"Kenny Bastani",title:"Kenny Bastani",url:"https://medium.com/apache-pinot-developer-blog",imageURL:"https://pbs.twimg.com/profile_images/1400521020973400069/5y2UMi4r_400x400.jpg"}],prevItem:{title:"Solving for the cardinality of set intersection at scale with Pinot and Theta Sketches",permalink:"/blog/2021/04/16/LinkedIn-Theta"},nextItem:{title:"Real-time Analytics with Presto and Apache Pinot",permalink:"/blog/2021/02/02/DevBlog-PrestoPinot"}},c={authorsImageUrls:[void 0]},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Since the 0.6.0 release of Apache Pinot, a new feature was made available for stream ingestion that allows you to upsert events from an immutable log. Typically, upsert is a term used to describe inserting a record into a database if it does not already exist or update it if it does exist. In Apache Pinot\u2019s case, upsert isn\u2019t precisely the same concept, and I wanted to write this blog post to explain why it\u2019s exciting and how you can start using it."),(0,o.kt)("p",null,"Read More at ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/apache-pinot-developer-blog/introduction-to-upserts-in-apache-pinot-987c12149d93"},"https://medium.com/apache-pinot-developer-blog/introduction-to-upserts-in-apache-pinot-987c12149d93")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/0*So3GjHjLY7DJAiaP",alt:"Introduction to Upserts in Apache Pinot"})))}d.isMDXComponent=!0}}]);