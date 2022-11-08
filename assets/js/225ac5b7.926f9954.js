"use strict";(self.webpackChunksdk_spec=self.webpackChunksdk_spec||[]).push([[227],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),g=a,m=d["".concat(o,".").concat(g)]||d[g]||p[g]||s;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1858:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const s={},i="getExistingTransactionIndexes Tests",l={unversionedId:"Modules/Query/brambl_query_tests/getExistingTransactionIndexes_test",id:"Modules/Query/brambl_query_tests/getExistingTransactionIndexes_test",title:"getExistingTransactionIndexes Tests",description:"The following testing scenarios are required:",source:"@site/docs/Modules/Query/brambl_query_tests/getExistingTransactionIndexes_test.md",sourceDirName:"Modules/Query/brambl_query_tests",slug:"/Modules/Query/brambl_query_tests/getExistingTransactionIndexes_test",permalink:"/sdk-spec/docs/Modules/Query/brambl_query_tests/getExistingTransactionIndexes_test",draft:!1,editUrl:"https://github.com/topl/sdk-spec/tree/main/packages/create-docusaurus/templates/shared/docs/Modules/Query/brambl_query_tests/getExistingTransactionIndexes_test.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"getBlockById Tests",permalink:"/sdk-spec/docs/Modules/Query/brambl_query_tests/getBlockById_test"},next:{title:"getIndexedTransactions Tests",permalink:"/sdk-spec/docs/Modules/Query/brambl_query_tests/getIndexedTransactions_test"}},o={},u=[{value:"Default Parameter Values",id:"default-parameter-values",level:5},{value:"No properly configured Genus service",id:"no-properly-configured-genus-service",level:5},{value:"Unable to send request to Genus service",id:"unable-to-send-request-to-genus-service",level:5},{value:"The genus service returned an error",id:"the-genus-service-returned-an-error",level:5},{value:"The Genus service did not return a result before the timeout happened",id:"the-genus-service-did-not-return-a-result-before-the-timeout-happened",level:5}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getexistingtransactionindexes-tests"},"getExistingTransactionIndexes Tests"),(0,a.kt)("p",null,"The following testing scenarios are required:"),(0,a.kt)("h5",{id:"default-parameter-values"},"Default Parameter Values"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"getExistingTransactionIndexes()\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the value passed to the gRPC library for ",(0,a.kt)("inlineCode",{parentName:"li"},"confidenceFactor")," is 0.9999999")),(0,a.kt)("h5",{id:"no-properly-configured-genus-service"},"No properly configured Genus service"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," that there is no properly configured genus service"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"getExistingTransactionIndexes(99999)\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating there is no properly configured genus service")),(0,a.kt)("h5",{id:"unable-to-send-request-to-genus-service"},"Unable to send request to Genus service"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And")," mocked calls to the gRPC library are configured to return an error indicating that the request could not be\nsent"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"getExistingTransactionIndexes(99999)\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that the request could not be sent")),(0,a.kt)("h5",{id:"the-genus-service-returned-an-error"},"The genus service returned an error"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And")," mocked calls to the gRPC library are configured to return an error indicating that there was a problem\nprocessing the request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"getExistingTransactionIndexes(99999)\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that there was a problem processing the request.")),(0,a.kt)("h5",{id:"the-genus-service-did-not-return-a-result-before-the-timeout-happened"},"The Genus service did not return a result before the timeout happened"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And")," mocked calls to the gRPC library are configured to never return"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"getExistingTransactionIndexes(99)\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that there was a timeout error.")))}p.isMDXComponent=!0}}]);