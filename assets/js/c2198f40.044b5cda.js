"use strict";(self.webpackChunksdk_spec=self.webpackChunksdk_spec||[]).push([[6773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},l="getIndexedTransactions Tests",s={unversionedId:"Modules/Query/brambl_query_tests/getIndexedTransactions_test",id:"Modules/Query/brambl_query_tests/getIndexedTransactions_test",title:"getIndexedTransactions Tests",description:"The following testing scenarios are required:",source:"@site/docs/Modules/Query/brambl_query_tests/getIndexedTransactions_test.md",sourceDirName:"Modules/Query/brambl_query_tests",slug:"/Modules/Query/brambl_query_tests/getIndexedTransactions_test",permalink:"/sdk-spec/docs/Modules/Query/brambl_query_tests/getIndexedTransactions_test",draft:!1,editUrl:"https://github.com/topl/sdk-spec/tree/main/packages/create-docusaurus/templates/shared/docs/Modules/Query/brambl_query_tests/getIndexedTransactions_test.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"getExistingTransactionIndexes Tests",permalink:"/sdk-spec/docs/Modules/Query/brambl_query_tests/getExistingTransactionIndexes_test"},next:{title:"getNodeConfig Tests",permalink:"/sdk-spec/docs/Modules/Query/brambl_query_tests/getNodeConfig_test"}},o={},p=[{value:"Happy Path for paging",id:"happy-path-for-paging",level:5},{value:"Default Parameter Values",id:"default-parameter-values",level:5},{value:"No properly configured Genus service",id:"no-properly-configured-genus-service",level:5},{value:"Unable to send request to Genus service",id:"unable-to-send-request-to-genus-service",level:5},{value:"The genus service returned an error",id:"the-genus-service-returned-an-error",level:5},{value:"The Genus service did not return a result before the timeout happened",id:"the-genus-service-did-not-return-a-result-before-the-timeout-happened",level:5},{value:"Confidence Factor is out of range",id:"confidence-factor-is-out-of-range",level:5}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getindexedtransactions-tests"},"getIndexedTransactions Tests"),(0,a.kt)("p",null,"The following testing scenarios are required:"),(0,a.kt)("h5",{id:"happy-path-for-paging"},"Happy Path for paging"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," the tests for ",(0,a.kt)("inlineCode",{parentName:"li"},"createOnChainTransactionIndex")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"getExistingTransactionIndexes")," have successfully\ncompleted."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And")," there is an index in the database named ",(0,a.kt)("inlineCode",{parentName:"li"},"bigIndex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And")," there are at least exactly 25 transactions that are covered by ",(0,a.kt)("inlineCode",{parentName:"li"},"bigIndex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And")," ",(0,a.kt)("inlineCode",{parentName:"li"},"emptyList")," is an empty list of ",(0,a.kt)("inlineCode",{parentName:"li"},"IndexMatchValue")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'getIndexedTransactions("bigIndex", emptyList, 10, 0, 0.0)\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the call returns 10 transactions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'getIndexedTransactions("bigIndex", emptyList, 10, 10, 0.0)\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the call returns 10 transactions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},' getIndexedTransactions("bigIndex", emptyList, 10, 20, 0.0)\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the call returns 5 transactions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'  getIndexedTransactions("bigIndex", emptyList, 10, 25, 0.0)\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the call returns no transactions")),(0,a.kt)("h5",{id:"default-parameter-values"},"Default Parameter Values"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'getIndexedTransactions("csvIndex")\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the values passed to the gRPC library are:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"for ",(0,a.kt)("inlineCode",{parentName:"li"},"keys")," an empty list of ",(0,a.kt)("inlineCode",{parentName:"li"},"IndexMatchValue")),(0,a.kt)("li",{parentName:"ul"},"for ",(0,a.kt)("inlineCode",{parentName:"li"},"maxResults")," 2147483647"),(0,a.kt)("li",{parentName:"ul"},"for ",(0,a.kt)("inlineCode",{parentName:"li"},"skipResults")," 0"),(0,a.kt)("li",{parentName:"ul"},"for ",(0,a.kt)("inlineCode",{parentName:"li"},"confidenceFactor")," 0.9999999"),(0,a.kt)("li",{parentName:"ul"},"for ",(0,a.kt)("inlineCode",{parentName:"li"},"timeoutMillis")," 1000")))),(0,a.kt)("h5",{id:"no-properly-configured-genus-service"},"No properly configured Genus service"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," that there is no properly configured genus service"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'getIndexedTransactions("bigIndex", emptyList, 10, 25)\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating there is no properly configured genus service")),(0,a.kt)("h5",{id:"unable-to-send-request-to-genus-service"},"Unable to send request to Genus service"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And")," mocked calls to the gRPC library are configured to return an error indicating that the request could not be\nsent"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'getIndexedTransactions("bigIndex", emptyList, 10, 25)\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that the request could not be sent")),(0,a.kt)("h5",{id:"the-genus-service-returned-an-error"},"The genus service returned an error"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And")," mocked calls to the gRPC library are configured to return an error indicating that there was a problem\nprocessing the request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'getIndexedTransactions("bigIndex", emptyList, 10, 25)\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that there was a problem processing the request.")),(0,a.kt)("h5",{id:"the-genus-service-did-not-return-a-result-before-the-timeout-happened"},"The Genus service did not return a result before the timeout happened"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And")," mocked calls to the gRPC library are configured to never return"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'getIndexedTransactions("bigIndex", emptyList, 10, 25, 99)\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that there was a timeout error.")),(0,a.kt)("h5",{id:"confidence-factor-is-out-of-range"},"Confidence Factor is out of range"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'getIndexedTransactions("bigIndex", emptyList, 10, 20, 1.001)\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that ",(0,a.kt)("inlineCode",{parentName:"li"},"confidenceFactor")," is out of range."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'getIndexedTransactions("bigIndex", emptyList, 10, 20, -0.001)\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that ",(0,a.kt)("inlineCode",{parentName:"li"},"confidenceFactor")," is out of range.")))}d.isMDXComponent=!0}}]);