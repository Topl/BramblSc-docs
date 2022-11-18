"use strict";(self.webpackChunksdk_spec=self.webpackChunksdk_spec||[]).push([[448],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(r),d=a,N=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return r?n.createElement(N,i(i({ref:t},p),{},{components:r})):n.createElement(N,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const o={},i="Slot \u21d4 Timestamp Conversions",l={unversionedId:"Modules/Util/NodeUtils/slotutil_tests/slot_timestamp_conversion_test",id:"Modules/Util/NodeUtils/slotutil_tests/slot_timestamp_conversion_test",title:"Slot \u21d4 Timestamp Conversions",description:"This page describes the tests that must be done to verify the behavior of methods/functions that convert between slot",source:"@site/docs/Modules/Util/NodeUtils/slotutil_tests/slot_timestamp_conversion_test.md",sourceDirName:"Modules/Util/NodeUtils/slotutil_tests",slug:"/Modules/Util/NodeUtils/slotutil_tests/slot_timestamp_conversion_test",permalink:"/sdk-spec/docs/Modules/Util/NodeUtils/slotutil_tests/slot_timestamp_conversion_test",draft:!1,editUrl:"https://github.com/topl/sdk-spec/tree/main/packages/create-docusaurus/templates/shared/docs/Modules/Util/NodeUtils/slotutil_tests/slot_timestamp_conversion_test.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"getNodeConfig Tests",permalink:"/sdk-spec/docs/Modules/Util/NodeUtils/nodecache_tests/getnodeconfig_test"},next:{title:"Overview",permalink:"/sdk-spec/docs/Overview/"}},s={},m=[{value:"Happy Path",id:"happy-path",level:5},{value:"Non-Positive Slot Duration",id:"non-positive-slot-duration",level:4},{value:"Slot Number Too Big",id:"slot-number-too-big",level:4},{value:"Timestamp too Early",id:"timestamp-too-early",level:4}],p={toc:m};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"slot--timestamp-conversions"},"Slot \u21d4 Timestamp Conversions"),(0,a.kt)("p",null,"This page describes the tests that must be done to verify the behavior of methods/functions that convert between slot\nnumbers and Unix timestamps."),(0,a.kt)("p",null,"The following testing scenarios are required:"),(0,a.kt)("h5",{id:"happy-path"},"Happy Path"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," a variable named ",(0,a.kt)("inlineCode",{parentName:"li"},"zeroTime")," whose value is an arbitrary Unix timestamp"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"0 == timestampToSlotNumber(slotNumberToTimestamp(0, 1000, zeroTime), 1000, zeroTime)\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"zeroTime == slotNumberToTimestamp(timestampToSlotNumber(zeroTime, 1000, zeroTime), 1000, zeroTime)\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"zeroTime+99999 == slotNumberToTimestamp(timestampToSlotNumber(zeroTime+99999, 1000, zeroTime), 1000, zeroTime)\n")))),(0,a.kt)("h4",{id:"non-positive-slot-duration"},"Non-Positive Slot Duration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," a variable named ",(0,a.kt)("inlineCode",{parentName:"li"},"zeroTime")," whose value is an arbitrary Unix timestamp"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"slotNumberToTimestamp(0, 0, zeroTime)\n")),"produces an error"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"timestampToSlotNumber(zeroTime, 0, zeroTime)\n")),"produces an error"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"slotNumberToTimestamp(0, -1, zeroTime)\n")),"produces an error"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"timestampToSlotNumber(zeroTime, -1, zeroTime)\n")),"produces an error")),(0,a.kt)("h4",{id:"slot-number-too-big"},"Slot Number Too Big"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," a variable named ",(0,a.kt)("inlineCode",{parentName:"li"},"zeroTime")," whose value is an arbitrary Unix timestamp"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And")," a variable named ",(0,a.kt)("inlineCode",{parentName:"li"},"slotNumber")," whose value is 4,611,686,018,427,387,904"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"slotNumberToTimestamp(slotNumber, 1000, zeroTime)\n")),"produces an error indicating that the slot number is too big to be represented as a Unix timestamp.")),(0,a.kt)("h4",{id:"timestamp-too-early"},"Timestamp too Early"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given")," a variable named ",(0,a.kt)("inlineCode",{parentName:"li"},"zeroTime")," whose value is an arbitrary Unix timestamp"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And")," a variable named ",(0,a.kt)("inlineCode",{parentName:"li"},"negativeTime")," whose value is less than ",(0,a.kt)("inlineCode",{parentName:"li"},"zeroTime"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"TimestampToSlotNumber(negativeTime, 1000, zeroTime)\n")),"produces an error indicating that the timestamp is before slot 0.")))}u.isMDXComponent=!0}}]);