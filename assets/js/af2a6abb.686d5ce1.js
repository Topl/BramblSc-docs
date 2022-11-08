"use strict";(self.webpackChunksdk_spec=self.webpackChunksdk_spec||[]).push([[25],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),d=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,g=c["".concat(i,".").concat(m)]||c[m]||p[m]||s;return r?a.createElement(g,l(l({ref:t},u),{},{components:r})):a.createElement(g,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var d=2;d<s;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5747:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const s={},l="getTxosByAddressStream Tests",o={unversionedId:"Modules/Query/brambl_query_tests/getTxosByAddressStream_test",id:"Modules/Query/brambl_query_tests/getTxosByAddressStream_test",title:"getTxosByAddressStream Tests",description:"The following testing scenarios are required:",source:"@site/docs/Modules/Query/brambl_query_tests/getTxosByAddressStream_test.md",sourceDirName:"Modules/Query/brambl_query_tests",slug:"/Modules/Query/brambl_query_tests/getTxosByAddressStream_test",permalink:"/sdk-spec/docs/Modules/Query/brambl_query_tests/getTxosByAddressStream_test",draft:!1,editUrl:"https://github.com/topl/sdk-spec/tree/main/packages/create-docusaurus/templates/shared/docs/Modules/Query/brambl_query_tests/getTxosByAddressStream_test.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"getTransactionById Tests",permalink:"/sdk-spec/docs/Modules/Query/brambl_query_tests/getTransactionById_test"},next:{title:"getTxosByAddress Tests",permalink:"/sdk-spec/docs/Modules/Query/brambl_query_tests/getTxosByAddress_test"}},i={},d=[{value:"Happy Path",id:"happy-path",level:5},{value:"Default Parameter Values",id:"default-parameter-values",level:5},{value:"No properly configured Genus service",id:"no-properly-configured-genus-service",level:5},{value:"Unable to send request to Genus service",id:"unable-to-send-request-to-genus-service",level:5},{value:"The genus service returned an error",id:"the-genus-service-returned-an-error",level:5},{value:"The Genus service did not return a result before the timeout happened",id:"the-genus-service-did-not-return-a-result-before-the-timeout-happened",level:5},{value:"Confidence Factor is out of range",id:"confidence-factor-is-out-of-range",level:5}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"gettxosbyaddressstream-tests"},"getTxosByAddressStream Tests"),(0,n.kt)("p",null,"The following testing scenarios are required:"),(0,n.kt)("h5",{id:"happy-path"},"Happy Path"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Given")," that there are already TxOs (spent and unspent) associated with the specified addresses in the Genus\nservice's database"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"And")," these transaction have a confidence factor greater than 0.99"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"And")," ",(0,n.kt)("inlineCode",{parentName:"li"},"addresses")," is the list of addresses"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"When"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"getTxosByAddressStream(addresses, 0.9)\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Then")," the call immediately returns the matching TxOs in the database"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Then")," additional transactions are added to the genus database that have UTxOs or STxOs that match the request"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"When")," these new transactions are deep enough in the blockchain to have a confidence factor greater than .9"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Then")," a map of the new TxOs is returned as part of the stream.")),(0,n.kt)("h5",{id:"default-parameter-values"},"Default Parameter Values"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"When"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"getTxosByAddressStream(addresses)\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Then")," the value passed to the gRPC library for ",(0,n.kt)("inlineCode",{parentName:"li"},"confidenceFactor")," is 0.9999999")),(0,n.kt)("h5",{id:"no-properly-configured-genus-service"},"No properly configured Genus service"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Given")," that there is no properly configured genus service"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"When"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"getTxosByAddressStream(addresses, 0.9)\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating there is no properly configured genus service")),(0,n.kt)("h5",{id:"unable-to-send-request-to-genus-service"},"Unable to send request to Genus service"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"And")," mocked calls to the gRPC library are configured to return an error indicating that the request could not be\nsent"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"When"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"getTxosByAddressStream(addresses, 0.9)\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that the request could not be sent")),(0,n.kt)("h5",{id:"the-genus-service-returned-an-error"},"The genus service returned an error"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"And")," mocked calls to the gRPC library are configured to return an error indicating that there was a problem\nprocessing the request"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"When"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"getTxosByAddressStream(addresses, 0.9)\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that there was a problem processing the request.")),(0,n.kt)("h5",{id:"the-genus-service-did-not-return-a-result-before-the-timeout-happened"},"The Genus service did not return a result before the timeout happened"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"And")," mocked calls to the gRPC library are configured to never return"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"When"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"getTxosByAddressStream(addresses, 50, 0.99)\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that there was a timeout error.")),(0,n.kt)("h5",{id:"confidence-factor-is-out-of-range"},"Confidence Factor is out of range"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"When"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"getTxosByAddressStream(addresses, 50, 1.001)\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that ",(0,n.kt)("inlineCode",{parentName:"li"},"confidenceFactor")," is out of range."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"When"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"getTxosByAddressStream(addresses, 50, -0.001)\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that ",(0,n.kt)("inlineCode",{parentName:"li"},"confidenceFactor")," is out of range.")))}p.isMDXComponent=!0}}]);