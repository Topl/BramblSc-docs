"use strict";(self.webpackChunksdk_spec=self.webpackChunksdk_spec||[]).push([[4432],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return r?n.createElement(g,l(l({ref:t},d),{},{components:r})):n.createElement(g,l({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3480:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},l="getNodeConfig Tests",i={unversionedId:"Modules/Query/brambl_query_tests/getNodeConfig_test",id:"Modules/Query/brambl_query_tests/getNodeConfig_test",title:"getNodeConfig Tests",description:"The following testing scenarios are required:",source:"@site/docs/Modules/Query/brambl_query_tests/getNodeConfig_test.md",sourceDirName:"Modules/Query/brambl_query_tests",slug:"/Modules/Query/brambl_query_tests/getNodeConfig_test",permalink:"/sdk-spec/docs/Modules/Query/brambl_query_tests/getNodeConfig_test",draft:!1,editUrl:"https://github.com/topl/sdk-spec/tree/main/packages/create-docusaurus/templates/shared/docs/Modules/Query/brambl_query_tests/getNodeConfig_test.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"getIndexedTransactions Tests",permalink:"/sdk-spec/docs/Modules/Query/brambl_query_tests/getIndexedTransactions_test"},next:{title:"getTransactionByAddressStream Tests",permalink:"/sdk-spec/docs/Modules/Query/brambl_query_tests/getTransactionByAddressStream_test"}},s={},u=[{value:"Happy Path",id:"happy-path",level:5},{value:"Default Parameter Values",id:"default-parameter-values",level:5},{value:"No properly configured Bifrost node",id:"no-properly-configured-bifrost-node",level:5},{value:"Unable to send request to Bifrost Node",id:"unable-to-send-request-to-bifrost-node",level:5},{value:"The Bifrost node returned an error",id:"the-bifrost-node-returned-an-error",level:5},{value:"The Bifrost node did not return a result before the timeout happened",id:"the-bifrost-node-did-not-return-a-result-before-the-timeout-happened",level:5}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getnodeconfig-tests"},"getNodeConfig Tests"),(0,a.kt)("p",null,"The following testing scenarios are required:"),(0,a.kt)("h5",{id:"happy-path"},"Happy Path"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," that an implementation of ",(0,a.kt)("inlineCode",{parentName:"li"},"GenusBlockQuery")," is instantiated and configured to connect to a working Bifrost\nnode"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"getNodeConfig(2000)\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the call immediately returns the ",(0,a.kt)("inlineCode",{parentName:"li"},"co.topl.proto.models.node.NodeConfig"),".")),(0,a.kt)("h5",{id:"default-parameter-values"},"Default Parameter Values"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"getNodeConfig()\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the value passed to the gRPC library for ",(0,a.kt)("inlineCode",{parentName:"li"},"timeoutMillis")," is 2000")),(0,a.kt)("h5",{id:"no-properly-configured-bifrost-node"},"No properly configured Bifrost node"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," that there is no properly configured bifrost node"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"getNodeConfig(2000)\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating there is no properly configured Bifrost node.")),(0,a.kt)("h5",{id:"unable-to-send-request-to-bifrost-node"},"Unable to send request to Bifrost Node"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And")," mocked calls to the gRPC library are configured to return an error indicating that the request could not be\nsent"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"getNodeConfig(2000)\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that the request could not be sent")),(0,a.kt)("h5",{id:"the-bifrost-node-returned-an-error"},"The Bifrost node returned an error"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And")," mocked calls to the gRPC library are configured to return an error indicating that there was a problem\nprocessing the request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"getNodeConfig(2000)\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that there was a problem processing the request.")),(0,a.kt)("h5",{id:"the-bifrost-node-did-not-return-a-result-before-the-timeout-happened"},"The Bifrost node did not return a result before the timeout happened"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And")," mocked calls to the gRPC library are configured to never return"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"getNodeConfig(2000)\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that there was a timeout error.")))}p.isMDXComponent=!0}}]);