"use strict";(self.webpackChunksdk_spec=self.webpackChunksdk_spec||[]).push([[507],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||s;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9440:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={},i="BifrostConnection.getUrl Tests",l={unversionedId:"Modules/Util/NodeUtils/bifrost_connection_tests/getUrl_test",id:"Modules/Util/NodeUtils/bifrost_connection_tests/getUrl_test",title:"BifrostConnection.getUrl Tests",description:"The following testing scenarios are required:",source:"@site/docs/Modules/Util/NodeUtils/bifrost_connection_tests/getUrl_test.md",sourceDirName:"Modules/Util/NodeUtils/bifrost_connection_tests",slug:"/Modules/Util/NodeUtils/bifrost_connection_tests/getUrl_test",permalink:"/sdk-spec/docs/Modules/Util/NodeUtils/bifrost_connection_tests/getUrl_test",draft:!1,editUrl:"https://github.com/topl/sdk-spec/tree/main/packages/create-docusaurus/templates/shared/docs/Modules/Util/NodeUtils/bifrost_connection_tests/getUrl_test.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NodeUtils",permalink:"/sdk-spec/docs/Modules/Util/NodeUtils/"},next:{title:"NodeCache Constructor Test",permalink:"/sdk-spec/docs/Modules/Util/NodeUtils/nodecache_tests/constructor_test"}},a={},c=[{value:"Happy Path",id:"happy-path",level:5}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bifrostconnectiongeturl-tests"},"BifrostConnection.getUrl Tests"),(0,o.kt)("p",null,"The following testing scenarios are required:"),(0,o.kt)("h5",{id:"happy-path"},"Happy Path"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Given")," There exists an object that implements this interface and it is configured with the URL of the Bifrost node\nit will connect with"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"When"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"getUrl()\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Then")," the call returns the configured URL as a string")))}u.isMDXComponent=!0}}]);