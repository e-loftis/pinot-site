/*! For license information please see 52a3cb50.7ebb4627.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{145:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},146:function(e,t,n){"use strict";var r=n(8),a=n(0),i=n.n(a),o=n(10),c=n(151),l=n(7),s=Object(a.createContext)({collectLink:function(){}}),u=n(150),b=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];t.a=function(e){var t,n,p,d=e.isNavLink,m=e.to,f=e.href,O=e.activeClassName,v=e.isActive,h=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,j=void 0===g||g,k=Object(r.a)(e,b),y=Object(u.b)().withBaseUrl,N=Object(a.useContext)(s),E=m||f,w=Object(c.a)(E),A=null==E?void 0:E.replace("pathname://",""),C=void 0!==A?(n=A,j&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,S=Object(a.useRef)(!1),R=d?o.e:o.c,_=l.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!_&&w&&null!=C&&window.docusaurus.prefetch(C),function(){_&&p&&p.disconnect()}}),[C,_,w]);var P=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,z=!C||!w||P;return C&&w&&!P&&!h&&N.collectLink(C),z?i.a.createElement("a",Object.assign({href:C},E&&!w&&{target:"_blank",rel:"noopener noreferrer"},k)):i.a.createElement(R,Object.assign({},k,{onMouseEnter:function(){S.current||null==C||(window.docusaurus.preload(C),S.current=!0)},innerRef:function(e){var t,n;_&&e&&w&&(t=e,n=function(){null!=C&&window.docusaurus.prefetch(C)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:C||""},d&&{isActive:v,activeClassName:O}))}},147:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},149:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&e.push(o)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},150:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(16),a=n(151);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},151:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},152:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(146),o=n(149),c=n.n(o);n(57);t.a=function(e){var t=e.children,n=e.className,r=e.badge,o=e.icon,l=e.size,s=e.target,u=e.to,b=c()("jump-to","jump-to--"+l,n),p=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(o||"chevron-right")+" arrow"}))));return s?a.a.createElement("a",{href:u,target:s,className:b},p):a.a.createElement(i.a,{to:u,className:b},p)}},154:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(149),o=n.n(i);n(59);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,i=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:o()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==i}),role:"alert"},!1!==i&&a.a.createElement("i",{className:o()("feather","icon-"+(i||l))}),t)}},155:function(e,t,n){"use strict";var r=n(0),a=n(156);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},156:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},157:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(155),o=n(147),c=n(60),l=n.n(c);var s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,b=e.values,p=e.groupId,d=e.className,m=Object(i.a)(),f=m.tabGroupChoices,O=m.setTabGroupChoices,v=Object(r.useState)(c),h=v[0],g=v[1],j=r.Children.toArray(e.children),k=[];if(null!=p){var y=f[p];null!=y&&y!==h&&b.some((function(e){return e.value===y}))&&g(y)}var N=function(e){var t=e.currentTarget,n=k.indexOf(t),r=b[n].value;g(r),null!=p&&(O(p,r),setTimeout((function(){var e,n,r,a,i,o,c,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,c=o.innerHeight,s=o.innerWidth,n>=0&&i<=s&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},E=function(e){var t,n;switch(e.keyCode){case u:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case s:var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:E,onFocus:N,onClick:N},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},158:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),i=(n(0),n(145)),o=(n(157),n(158),n(154)),c=n(152),l=["components"],s={title:"Azure Quickstart",sidebar_label:"Azure",description:"Run Pinot on Azure"},u={unversionedId:"administration/installation/cloud/azure",id:"administration/installation/cloud/azure",isDocsHomePage:!1,title:"Azure Quickstart",description:"Run Pinot on Azure",source:"@site/docs/administration/installation/cloud/azure.md",sourceDirName:"administration/installation/cloud",slug:"/administration/installation/cloud/azure",permalink:"/docs/administration/installation/cloud/azure",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/administration/installation/cloud/azure.md",version:"current",sidebar_label:"Azure",frontMatter:{title:"Azure Quickstart",sidebar_label:"Azure",description:"Run Pinot on Azure"},sidebar:"docs",previous:{title:"GCP Quickstart",permalink:"/docs/administration/installation/cloud/gcp"},next:{title:"Install Pinot On MacOS",permalink:"/docs/administration/installation/operating-systems/macos"}},b=[{value:"Install Kubectl",id:"install-kubectl",children:[]},{value:"(Optional) Login to your Azure account",id:"optional-login-to-your-azure-account",children:[]},{value:"(Optional) Create a Resource Group",id:"optional-create-a-resource-group",children:[]},{value:"(Optional) Create a Kubernetes cluster(AKS) in Azure",id:"optional-create-a-kubernetes-clusteraks-in-azure",children:[]},{value:"Connect to an existing cluster",id:"connect-to-an-existing-cluster",children:[]},{value:"Pinot Quickstart",id:"pinot-quickstart",children:[]},{value:"Delete a Kubernetes Cluster",id:"delete-a-kubernetes-cluster",children:[]}],p={toc:b};function d(e){var t=e.components,n=Object(a.a)(e,l);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To set up a Kubernetes Cluster on ",Object(i.b)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/kubernetes-service/"},"Azure Kubernetes Service (AKS)")),Object(i.b)("h2",{id:"install-kubectl"},"Install Kubectl"),Object(i.b)("p",null,"Please follow this link (",Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl"},"https://kubernetes.io/docs/tasks/tools/install-kubectl"),") to install kubectl."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For Mac User")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"brew install kubernetes-cli\n")),Object(i.b)("p",null,"Please check kubectl version after installation."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"kubectl version\n")),Object(i.b)(o.a,{icon:!1,type:"info",mdxType:"Alert"},"QuickStart scripts are tested under kubectl client version v1.16.3 and server version v1.13.12"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Install Helm")),Object(i.b)("p",null,"Please follow this link (",Object(i.b)("a",{parentName:"p",href:"https://helm.sh/docs/using_helm/#installing-helm"},"https://helm.sh/docs/using_helm/#installing-helm"),") to install helm."),Object(i.b)("p",null,"For Mac User"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"brew install kubernetes-helm\n")),Object(i.b)("p",null,"Please check helm version after installation."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"helm version\n")),Object(i.b)(o.a,{icon:!1,type:"info",mdxType:"Alert"},"This QuickStart provides helm supports for helm v3.0.0 and v2.12.1. Please pick the script based on your helm version."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Install Azure CLI")),Object(i.b)("p",null,"Please follow this link to ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest"},"install Azure CLI")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For Mac User")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"brew update && brew install azure-cli\n")),Object(i.b)("h2",{id:"optional-login-to-your-azure-account"},"(Optional) Login to your Azure account"),Object(i.b)("p",null,"Below script will open default browser to sign-in to ",Object(i.b)("strong",{parentName:"p"},"your Azure Account"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"az login\n")),Object(i.b)("h2",{id:"optional-create-a-resource-group"},"(Optional) Create a Resource Group"),Object(i.b)("p",null,"Below script will create a resource group in location ",Object(i.b)("inlineCode",{parentName:"p"},"eastus"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"AKS_RESOURCE_GROUP=pinot-demo\nAKS_RESOURCE_GROUP_LOCATION=eastus\naz group create --name ${AKS_RESOURCE_GROUP} \\\n                --location ${AKS_RESOURCE_GROUP_LOCATION}\n")),Object(i.b)("h2",{id:"optional-create-a-kubernetes-clusteraks-in-azure"},"(Optional) Create a Kubernetes cluster(AKS) in Azure"),Object(i.b)("p",null,"Below script will create a ",Object(i.b)("strong",{parentName:"p"},"3 nodes")," cluster named ",Object(i.b)("strong",{parentName:"p"},"pinot-quickstart")," for demo purposes.\nPlease modify the parameters in the example command below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"AKS_RESOURCE_GROUP=pinot-demo\nAKS_CLUSTER_NAME=pinot-quickstart\naz aks create --resource-group ${AKS_RESOURCE_GROUP} \\\n              --name ${AKS_CLUSTER_NAME} \\\n              --node-count 3\n")),Object(i.b)("p",null,"Once the command is succeed, it's ready to be used."),Object(i.b)("h2",{id:"connect-to-an-existing-cluster"},"Connect to an existing cluster"),Object(i.b)("p",null,"Simply run below command to get the credential for the cluster ",Object(i.b)("strong",{parentName:"p"},"pinot-quickstart")," that you just created or your existing cluster."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"AKS_RESOURCE_GROUP=pinot-demo\nAKS_CLUSTER_NAME=pinot-quickstart\naz aks get-credentials --resource-group ${AKS_RESOURCE_GROUP} \\\n                       --name ${AKS_CLUSTER_NAME}\n")),Object(i.b)("p",null,"To verify the connection, you can run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes\n")),Object(i.b)("h2",{id:"pinot-quickstart"},"Pinot Quickstart"),Object(i.b)("p",null,"Please follow this ",Object(i.b)("a",{parentName:"p",href:"/docs/administration/installation/cloud/on-premises"},"Kubernetes QuickStart")," to deploy your Pinot Demo."),Object(i.b)(c.a,{to:"/docs/administration/installation/cloud/on-premises",mdxType:"Jump"},"Kubernetes Quickstart"),Object(i.b)("h2",{id:"delete-a-kubernetes-cluster"},"Delete a Kubernetes Cluster"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"AKS_RESOURCE_GROUP=pinot-demo\nAKS_CLUSTER_NAME=pinot-quickstart\naz aks delete --resource-group ${AKS_RESOURCE_GROUP} \\\n              --name ${AKS_CLUSTER_NAME}\n")))}d.isMDXComponent=!0}}]);