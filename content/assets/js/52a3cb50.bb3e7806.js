/*! For license information please see 52a3cb50.bb3e7806.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8895],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2511:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(9756),a=n(7294),i=n(3727),o=n(9962),l=n(2735),s=n(6136),u=(0,a.createContext)({collectLink:function(){}}),c=n(9524),p=n(3905),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f=e.isNavLink,m=e.to,v=e.href,h=e.activeClassName,k=e.isActive,b=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,y=void 0===g||g,O=(0,r.Z)(e,d),N=(0,o.Z)().siteConfig,E=N.trailingSlash,w=N.baseUrl,A=(0,c.C)().withBaseUrl,C=(0,a.useContext)(u),S=m||v,_=(0,l.Z)(S),P=null==S?void 0:S.replace("pathname://",""),R=void 0!==P?(n=P,y&&function(e){return e.startsWith("/")}(n)?A(n):n):void 0;R&&_&&(R=(0,p.applyTrailingSlash)(R,{trailingSlash:E,baseUrl:w}));var U,z=(0,a.useRef)(!1),j=f?i.OL:i.rU,x=s.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!x&&_&&null!=R&&window.docusaurus.prefetch(R),function(){x&&U&&U.disconnect()}}),[R,x,_]);var K=null!==(t=null==R?void 0:R.startsWith("#"))&&void 0!==t&&t,T=!R||!_||K;return R&&_&&!K&&!b&&C.collectLink(R),T?a.createElement("a",Object.assign({href:R},S&&!_&&{target:"_blank",rel:"noopener noreferrer"},O)):a.createElement(j,Object.assign({},O,{onMouseEnter:function(){z.current||null==R||(window.docusaurus.preload(R),z.current=!0)},innerRef:function(e){var t,n;x&&e&&_&&(t=e,n=function(){null!=R&&window.docusaurus.prefetch(R)},(U=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(U.unobserve(t),U.disconnect(),n())}))}))).observe(t))},to:R||""},f&&{isActive:k,activeClassName:h}))}},2735:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},9524:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var r=n(9962),a=n(2735);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8448:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},7358:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),a=n(2713);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,d=e.groupId,f=e.className,m=i(),v=m.tabGroupChoices,h=m.setTabGroupChoices,k=(0,r.useState)(a),b=k[0],g=k[1],y=r.Children.toArray(e.children),O=[];if(null!=d){var N=v[d];null!=N&&N!==b&&p.some((function(e){return e.value===N}))&&g(N)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),r=p[n].value;g(r),null!=d&&(h(d,r),setTimeout((function(){var e,n,r,a,i,o,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case c:var r=O.indexOf(e.target)+1;n=O[r]||O[0];break;case u:var a=O.indexOf(e.target)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:w,onFocus:E,onClick:E},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},2713:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},4136:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===r?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},3905:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(4136);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var i=n(3509);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},3509:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6261:function(e,t,n){"use strict";var r=n(7294),a=n(4184),i=n.n(a);t.Z=function(e){var t=e.children,n=e.classNames,a=e.fill,o=e.icon,l=e.type,s=null;switch(l){case"danger":s="alert-triangle";break;case"success":s="check-circle";break;case"warning":s="alert-triangle";break;default:s="info"}return r.createElement("div",{className:i()(n,"alert","alert--"+l,{"alert--fill":a,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.createElement("i",{className:i()("feather","icon-"+(o||s))}),t)}},9342:function(e,t,n){"use strict";var r=n(7294),a=n(2511),i=n(4184),o=n.n(i);t.Z=function(e){var t=e.children,n=e.className,i=e.badge,l=e.icon,s=e.size,u=e.target,c=e.to,p=o()("jump-to","jump-to--"+s,n),d=r.createElement("div",{className:"jump-to--inner"},r.createElement("div",{className:"jump-to--inner-2"},r.createElement("div",{className:"jump-to--main"},i?r.createElement("span",{className:"badge badge--primary badge--right"},i):"",t),r.createElement("div",{className:"jump-to--right"},r.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return u?r.createElement("a",{href:c,target:u,className:p},d):r.createElement(a.Z,{to:c,className:p},d)}},5112:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(4137)),o=(n(7358),n(8448),n(6261)),l=n(9342),s=["components"],u={title:"Azure Quickstart",sidebar_label:"Azure",description:"Run Pinot on Azure",draft:!0},c=void 0,p={unversionedId:"administration/installation/cloud/azure",id:"administration/installation/cloud/azure",isDocsHomePage:!1,title:"Azure Quickstart",description:"Run Pinot on Azure",source:"@site/docs/administration/installation/cloud/azure.md",sourceDirName:"administration/installation/cloud",slug:"/administration/installation/cloud/azure",permalink:"/docs/administration/installation/cloud/azure",editUrl:"https://github.com/apache/pinot/edit/master/website/docs/administration/installation/cloud/azure.md",version:"current",frontMatter:{title:"Azure Quickstart",sidebar_label:"Azure",description:"Run Pinot on Azure",draft:!0},sidebar:"docs",previous:{title:"GCP",permalink:"/docs/administration/installation/cloud/gcp"},next:{title:"MacOS",permalink:"/docs/administration/installation/operating-systems/macos"}},d=[{value:"Install Kubectl",id:"install-kubectl",children:[]},{value:"(Optional) Login to your Azure account",id:"optional-login-to-your-azure-account",children:[]},{value:"(Optional) Create a Resource Group",id:"optional-create-a-resource-group",children:[]},{value:"(Optional) Create a Kubernetes cluster(AKS) in Azure",id:"optional-create-a-kubernetes-clusteraks-in-azure",children:[]},{value:"Connect to an existing cluster",id:"connect-to-an-existing-cluster",children:[]},{value:"Pinot Quickstart",id:"pinot-quickstart",children:[]},{value:"Delete a Kubernetes Cluster",id:"delete-a-kubernetes-cluster",children:[]}],f={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To set up a Kubernetes Cluster on ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/kubernetes-service/"},"Azure Kubernetes Service (AKS)")),(0,i.kt)("h2",{id:"install-kubectl"},"Install Kubectl"),(0,i.kt)("p",null,"Please follow this link (",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl"},"https://kubernetes.io/docs/tasks/tools/install-kubectl"),") to install kubectl."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For Mac User")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew install kubernetes-cli\n")),(0,i.kt)("p",null,"Please check kubectl version after installation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl version\n")),(0,i.kt)(o.Z,{icon:!1,type:"info",mdxType:"Alert"},"QuickStart scripts are tested under kubectl client version v1.16.3 and server version v1.13.12"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install Helm")),(0,i.kt)("p",null,"Please follow this link (",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/using_helm/#installing-helm"},"https://helm.sh/docs/using_helm/#installing-helm"),") to install helm."),(0,i.kt)("p",null,"For Mac User"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew install kubernetes-helm\n")),(0,i.kt)("p",null,"Please check helm version after installation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm version\n")),(0,i.kt)(o.Z,{icon:!1,type:"info",mdxType:"Alert"},"This QuickStart provides helm supports for helm v3.0.0 and v2.12.1. Please pick the script based on your helm version."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install Azure CLI")),(0,i.kt)("p",null,"Please follow this link to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest"},"install Azure CLI")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For Mac User")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew update && brew install azure-cli\n")),(0,i.kt)("h2",{id:"optional-login-to-your-azure-account"},"(Optional) Login to your Azure account"),(0,i.kt)("p",null,"Below script will open default browser to sign-in to ",(0,i.kt)("strong",{parentName:"p"},"your Azure Account"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"az login\n")),(0,i.kt)("h2",{id:"optional-create-a-resource-group"},"(Optional) Create a Resource Group"),(0,i.kt)("p",null,"Below script will create a resource group in location ",(0,i.kt)("inlineCode",{parentName:"p"},"eastus"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"AKS_RESOURCE_GROUP=pinot-demo\nAKS_RESOURCE_GROUP_LOCATION=eastus\naz group create --name ${AKS_RESOURCE_GROUP} \\\n                --location ${AKS_RESOURCE_GROUP_LOCATION}\n")),(0,i.kt)("h2",{id:"optional-create-a-kubernetes-clusteraks-in-azure"},"(Optional) Create a Kubernetes cluster(AKS) in Azure"),(0,i.kt)("p",null,"Below script will create a ",(0,i.kt)("strong",{parentName:"p"},"3 nodes")," cluster named ",(0,i.kt)("strong",{parentName:"p"},"pinot-quickstart")," for demo purposes.\nPlease modify the parameters in the example command below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"AKS_RESOURCE_GROUP=pinot-demo\nAKS_CLUSTER_NAME=pinot-quickstart\naz aks create --resource-group ${AKS_RESOURCE_GROUP} \\\n              --name ${AKS_CLUSTER_NAME} \\\n              --node-count 3\n")),(0,i.kt)("p",null,"Once the command is succeed, it's ready to be used."),(0,i.kt)("h2",{id:"connect-to-an-existing-cluster"},"Connect to an existing cluster"),(0,i.kt)("p",null,"Simply run below command to get the credential for the cluster ",(0,i.kt)("strong",{parentName:"p"},"pinot-quickstart")," that you just created or your existing cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"AKS_RESOURCE_GROUP=pinot-demo\nAKS_CLUSTER_NAME=pinot-quickstart\naz aks get-credentials --resource-group ${AKS_RESOURCE_GROUP} \\\n                       --name ${AKS_CLUSTER_NAME}\n")),(0,i.kt)("p",null,"To verify the connection, you can run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes\n")),(0,i.kt)("h2",{id:"pinot-quickstart"},"Pinot Quickstart"),(0,i.kt)("p",null,"Please follow this ",(0,i.kt)("a",{parentName:"p",href:"/docs/administration/installation/cloud/on-premises"},"Kubernetes QuickStart")," to deploy your Pinot Demo."),(0,i.kt)(l.Z,{to:"/docs/administration/installation/cloud/on-premises",mdxType:"Jump"},"Kubernetes Quickstart"),(0,i.kt)("h2",{id:"delete-a-kubernetes-cluster"},"Delete a Kubernetes Cluster"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"AKS_RESOURCE_GROUP=pinot-demo\nAKS_CLUSTER_NAME=pinot-quickstart\naz aks delete --resource-group ${AKS_RESOURCE_GROUP} \\\n              --name ${AKS_CLUSTER_NAME}\n")))}m.isMDXComponent=!0},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&e.push(o)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);