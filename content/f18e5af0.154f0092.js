(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),o=(n(0),n(190)),i={id:"what_is_pinot",title:"What is Pinot",sidebar_label:"What is Pinot"},s={id:"about/what_is_pinot",title:"What is Pinot",description:"Apache Pinot is a realtime distributed OLAP datastore, which is used to deliver scalable real time analytics with low latency. It can ingest data from batch data sources (such as HDFS, S3, Azure Data Lake, Google Cloud Storage) as well as streaming sources (such as Kafka). Pinot is designed to scale horizontally, so that it can scale to larger data sets and higher query rates as needed.",source:"@site/docs/about/what_is_pinot.md",permalink:"/docs/about/what_is_pinot",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/about/what_is_pinot.md",sidebar_label:"What is Pinot",sidebar:"docs",next:{title:"Features of Pinot",permalink:"/docs/about/features_of_pinot"}},c=[{value:"When should I use it?",id:"when-should-i-use-it",children:[]},{value:"When should I not use it?",id:"when-should-i-not-use-it",children:[]},{value:"Quick example",id:"quick-example",children:[]},{value:"Who uses Pinot?",id:"who-uses-pinot",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Apache Pinot is a realtime distributed OLAP datastore, which is used to deliver scalable real time analytics with low latency. It can ingest data from batch data sources (such as HDFS, S3, Azure Data Lake, Google Cloud Storage) as well as streaming sources (such as Kafka). Pinot is designed to scale horizontally, so that it can scale to larger data sets and higher query rates as needed."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"../../static/img/pinot-overview.png",alt:"Pinot"}))),Object(o.b)("h2",{id:"when-should-i-use-it"},"When should I use it?"),Object(o.b)("p",null,"Pinot is designed to answer OLAP queries with low latency. It is suited in contexts where fast analytics, such as aggregations, are needed on immutable data, possibly, with real-time data ingestion."),Object(o.b)("h2",{id:"when-should-i-not-use-it"},"When should I not use it?"),Object(o.b)("p",null,"Pinot is not a replacement for your database, nor a search engine. It addresses fast analytics on immutable data and it is not thought by design, to handle data updates or deletions. Joins are currently not supported, but this problem can be overcome by using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"(https://prestodb.io/)"}),"PrestoDB")," for querying Pinot."),Object(o.b)("p",null,"For more information about PrestoDB connector for Pinot see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/apache/incubator-pinot/tree/master/kubernetes/examples/helm#access-pinot-using-presto"}),"Helm Chart of Pinot with Presto"),"\nPinot-Presto connector is avilable with version ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/prestodb/presto/pull/13504"}),"0.229")),Object(o.b)("h2",{id:"quick-example"},"Quick example"),Object(o.b)("p",null,"Pinot works very well for querying time series data with lots of Dimensions and Metrics.\nFilters and aggregations are easy and fast."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-SQL"}),"SELECT sum(clicks), sum(impressions) FROM AdAnalyticsTable\n  WHERE ((daysSinceEpoch >= 17849 AND daysSinceEpoch <= 17856)) AND accountId IN (123456789)\n  GROUP BY daysSinceEpoch TOP 100\n")),Object(o.b)("h2",{id:"who-uses-pinot"},"Who uses Pinot?"),Object(o.b)("p",null,"Pinot powers several big players, including LinkedIn, Uber, Factual, Weibo, Slack and more.."))}u.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,h=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);