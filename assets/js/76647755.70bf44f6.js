"use strict";(self.webpackChunksdk_spec=self.webpackChunksdk_spec||[]).push([[5801],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(a),c=r,m=h["".concat(o,".").concat(c)]||h[c]||d[c]||s;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=h;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8995:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={},l="getTxosByAssetLabel Tests",i={unversionedId:"Modules/Query/brambl_query_tests/getTxosByAssetLabel_test",id:"Modules/Query/brambl_query_tests/getTxosByAssetLabel_test",title:"getTxosByAssetLabel Tests",description:"The following testing scenarios are required:",source:"@site/docs/Modules/Query/brambl_query_tests/getTxosByAssetLabel_test.md",sourceDirName:"Modules/Query/brambl_query_tests",slug:"/Modules/Query/brambl_query_tests/getTxosByAssetLabel_test",permalink:"/sdk-spec/docs/Modules/Query/brambl_query_tests/getTxosByAssetLabel_test",draft:!1,editUrl:"https://github.com/topl/sdk-spec/tree/main/packages/create-docusaurus/templates/shared/docs/Modules/Query/brambl_query_tests/getTxosByAssetLabel_test.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"getTxosByAddress Tests",permalink:"/sdk-spec/docs/Modules/Query/brambl_query_tests/getTxosByAddress_test"},next:{title:"Util",permalink:"/sdk-spec/docs/Modules/Util/"}},o={},p=[{value:"Happy Path LVL",id:"happy-path-lvl",level:5},{value:"Happy Path TOPL",id:"happy-path-topl",level:5},{value:"Happy Path AssetV1",id:"happy-path-assetv1",level:5},{value:"Happy Path AssetV2",id:"happy-path-assetv2",level:5},{value:"Default Parameter Values",id:"default-parameter-values",level:5},{value:"No properly configured Genus service",id:"no-properly-configured-genus-service",level:5},{value:"Unable to send request to Genus service",id:"unable-to-send-request-to-genus-service",level:5},{value:"The genus service returned an error",id:"the-genus-service-returned-an-error",level:5},{value:"The Genus service did not return a result before the timeout happened",id:"the-genus-service-did-not-return-a-result-before-the-timeout-happened",level:5},{value:"Confidence Factor is out of range",id:"confidence-factor-is-out-of-range",level:5}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gettxosbyassetlabel-tests"},"getTxosByAssetLabel Tests"),(0,r.kt)("p",null,"The following testing scenarios are required:"),(0,r.kt)("h5",{id:"happy-path-lvl"},"Happy Path LVL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," that there are already TxOs (spent and unspent) that have LVL boxes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," their associated transactions have a confidence factor greater than 0.9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'getTxosByAssetLabel("LVL", 1000, 0.9)\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call immediately begins returning the matching TxOs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"After")," all the matching TxOs in the database have been returned"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," additional transactions are added to the genus database with UTxOs and STxOs that contain LVL boxes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When")," these new transactions are deep enough in the blockchain to have a confidence factor greater than .9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the new TxOs are returned as part of the stream.")),(0,r.kt)("h5",{id:"happy-path-topl"},"Happy Path TOPL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," that there are already TxOs (spent and unspent) that have TOPL boxes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," their associated transactions have a confidence factor greater than 0.9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'getTxosByAssetLabel("TOPL", 1000, 0.9)\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call immediately begins returning the matching TxOs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"After")," all the matching TxOs in the database have been returned"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," additional transactions are added to the genus database with UTxOs and STxOs that contain TOPL boxes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When")," these new transactions are deep enough in the blockchain to have a confidence factor greater than .9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the new TxOs are returned as part of the stream.")),(0,r.kt)("h5",{id:"happy-path-assetv1"},"Happy Path AssetV1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," that ",(0,r.kt)("inlineCode",{parentName:"li"},"v1Asset")," has a value that is a string that identifies a V1 asset version and minting address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," there are already TxOs (spent and unspent) that have ",(0,r.kt)("inlineCode",{parentName:"li"},"AssetV1")," boxes that match the version and minting\naddress specified by ",(0,r.kt)("inlineCode",{parentName:"li"},"v1Asset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," their associated transactions have a confidence factor greater than 0.9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"getTxosByAssetLabel(v1Asset, 1000, 0.9)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call immediately begins returning the matching TxOs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"After")," all the matching TxOs in the database have been returned"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," additional transactions are added to the genus database with UTxOs and STxOs that contain AssetV1 boxes with\nthe same minting address and version as specified in ",(0,r.kt)("inlineCode",{parentName:"li"},"v1Asset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When")," these new transactions are deep enough in the blockchain to have a confidence factor greater than .9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the new TxOs are returned as part of the stream.")),(0,r.kt)("h5",{id:"happy-path-assetv2"},"Happy Path AssetV2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," that ",(0,r.kt)("inlineCode",{parentName:"li"},"v2")," has a value that is a string that identifies an AssetV2 group and series constructor"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," there are already TxOs (spent and unspent) that have ",(0,r.kt)("inlineCode",{parentName:"li"},"AssetV2")," boxes that match the group and series\nspecified by ",(0,r.kt)("inlineCode",{parentName:"li"},"v2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," their associated transactions have a confidence factor greater than 0.9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"getTxosByAssetLabel(tam2Asset, 1000, 0.9)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call immediately begins returning the matching TxOs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"After")," all the matching TxOs in the database have been returned"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," additional transactions are added to the genus database with UTxOs and STxOs that contain AssetV2 boxes with\nthe same group and series"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When")," these new transactions are deep enough in the blockchain to have a confidence factor greater than .9"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the new TxOs are returned as part of the stream.")),(0,r.kt)("h5",{id:"default-parameter-values"},"Default Parameter Values"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'getTxosByAssetLabel("LVL")\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the value passed to the gRPC library for ",(0,r.kt)("inlineCode",{parentName:"li"},"confidenceFactor")," is 0.9999999 and the value passed\nfor ",(0,r.kt)("inlineCode",{parentName:"li"},"timeoutMillis")," is 1000.")),(0,r.kt)("h5",{id:"no-properly-configured-genus-service"},"No properly configured Genus service"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," that there is no properly configured genus service"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'getTxosByAssetLabel("LVL", 1000, 0.9)\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating there is no properly configured genus service")),(0,r.kt)("h5",{id:"unable-to-send-request-to-genus-service"},"Unable to send request to Genus service"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," mocked calls to the gRPC library are configured to return an error indicating that the request could not be\nsent"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'getTxosByAssetLabel("LVL", 1000, 0.9)\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that the request could not be sent")),(0,r.kt)("h5",{id:"the-genus-service-returned-an-error"},"The genus service returned an error"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," mocked calls to the gRPC library are configured to return an error indicating that there was a problem\nprocessing the request"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'getTxosByAssetLabel("LVL", 1000, 0.9)\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that there was a problem processing the request.")),(0,r.kt)("h5",{id:"the-genus-service-did-not-return-a-result-before-the-timeout-happened"},"The Genus service did not return a result before the timeout happened"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Given")," that calls to the underlying gRPC library are mocked"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"And")," mocked calls to the gRPC library are configured to never return"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'getTxosByAssetLabel("LVL", 50, 0.99)\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that there was a timeout error.")),(0,r.kt)("h5",{id:"confidence-factor-is-out-of-range"},"Confidence Factor is out of range"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'getTxosByAssetLabel("LVL", 1000, 1.001)\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that ",(0,r.kt)("inlineCode",{parentName:"li"},"confidenceFactor")," is out of range."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"When"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'getTxosByAssetLabel("LVL", 1000, -0.001)\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Then")," the call produces an error indicating that ",(0,r.kt)("inlineCode",{parentName:"li"},"confidenceFactor")," is out of range.")))}d.isMDXComponent=!0}}]);