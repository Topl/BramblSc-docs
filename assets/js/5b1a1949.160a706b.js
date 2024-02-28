"use strict";(self.webpackChunksdk_spec=self.webpackChunksdk_spec||[]).push([[3578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={},a="Multi-Signature Spending Propositions",s={unversionedId:"Overview/MultiSignature",id:"Overview/MultiSignature",title:"Multi-Signature Spending Propositions",description:"In the case of multi-signature spending propositions, there are multiple parties that can successfully post a transaction to an account. This will necessitate having a mechanism to coordinate the signing parties in order to know the account\u2019s confidence factor and status.",source:"@site/docs/Overview/MultiSignature.md",sourceDirName:"Overview",slug:"/Overview/MultiSignature",permalink:"/sdk-spec/docs/Overview/MultiSignature",draft:!1,editUrl:"https://github.com/topl/sdk-spec/tree/main/packages/create-docusaurus/templates/shared/docs/Overview/MultiSignature.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logging Requirements",permalink:"/sdk-spec/docs/Overview/Logging"}},c={},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"multi-signature-spending-propositions"},"Multi-Signature Spending Propositions"),(0,o.kt)("p",null,"In the case of multi-signature spending propositions, there are multiple parties that can successfully post a transaction to an account. This will necessitate having a mechanism to coordinate the signing parties in order to know the account\u2019s confidence factor and status."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f The details of coordination for multiple signature spending propositions are currently an open issue.\nThe coordination mechanism will have to allow all parties that can post a transaction to an account to have a consistent value for the account\u2019s confidence factor.")))}p.isMDXComponent=!0}}]);