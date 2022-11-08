"use strict";(self.webpackChunksdk_spec=self.webpackChunksdk_spec||[]).push([[623],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(a),d=s,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},148:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=a(7462),s=(a(7294),a(3905));const r={},i="Assumptions",o={unversionedId:"Overview/Assumptions",id:"Overview/Assumptions",title:"Assumptions",description:"This specification contains descriptions of the SDK interfaces. The descriptions are documented in a way that assumes",source:"@site/docs/Overview/Assumptions.md",sourceDirName:"Overview",slug:"/Overview/Assumptions",permalink:"/sdk-spec/docs/Overview/Assumptions",draft:!1,editUrl:"https://github.com/topl/sdk-spec/tree/main/packages/create-docusaurus/templates/shared/docs/Overview/Assumptions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"getTxosByAssetLabel Tests",permalink:"/sdk-spec/docs/Modules/Query/brambl_query_tests/getTxosByAssetLabel_test"},next:{title:"Hiding Nondeterminism and Organizing TxO State",permalink:"/sdk-spec/docs/Overview/HidingNonDeterminism"}},c={},l=[],u={toc:l};function p(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"assumptions"},"Assumptions"),(0,s.kt)("p",null,"This specification contains descriptions of the SDK interfaces. The descriptions are documented in a way that assumes\nall languages used for implementations have a common set of features related to supporting the object-oriented paradigm:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Classes that can be used to create instances or objects. The objects have functions/methods and attributes. We do not\nassume that there is inheritance between classes."),(0,s.kt)("li",{parentName:"ul"},"Some implementation languages allow functions or methods to throw exceptions or panic when something unexpected\nhappens that is outside of the assumptions, requirements and behaviors documented here. This way of dealing with\nunexpected behavior is not be documented as part of any interface documented here. If implementations need to respond\nto an unexpected situation in this way, the implementation must document this behavior."),(0,s.kt)("li",{parentName:"ul"},"Interfaces describe a set of functions/methods provided by classes that implement the interfaces. We do not assume\nthat interfaces can inherit from interfaces."),(0,s.kt)("li",{parentName:"ul"},"We assume that classes can implement multiple interfaces."),(0,s.kt)("li",{parentName:"ul"},"The type of a parameter or return value can be a class, interface or primitive type."),(0,s.kt)("li",{parentName:"ul"},"We do not assume that classes can have more than one public constructor."),(0,s.kt)("li",{parentName:"ul"},"We assume that there are static functions/methods that can be associated with a class that can be called without\nhaving an instance of the class. These will be primarily used to create instances of their associated class or to set\nglobal parameters."),(0,s.kt)("li",{parentName:"ul"},"We assume that the language is either dynamically typed or statically typed with classes and interfaces can be\ngeneric/parametric. Generic/parametric classes and interfaces have type parameters used to specify the types of method\nparameters and return values."),(0,s.kt)("li",{parentName:"ul"},"We assume that the language provides a future or promise type that encapsulates values that are computed\nasynchronously. The minimal functionality assumed for the future or promise type is that it has methods to query\nwhether the computation has finished and a blocking operation to get the value of the computation.",(0,s.kt)("br",{parentName:"li"}),"In the rest of this document, we consider \u201cfuture\u201d and \u201cpromise\u201d to be synonyms and use \u201cfuture\u201d to refer to both."),(0,s.kt)("li",{parentName:"ul"},"We assume that methods/functions can have parameters whose values are methods/functions (first-class functions)."),(0,s.kt)("li",{parentName:"ul"},"Though this specification describes some methods/functions as having optional parameters, we do not assume that all\nimplementation languages support method/function signatures with optional parameters. For this reason, if a\nmethod/function is described in this specification as having an optional parameter then",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"the parameter must be described as having a default value"),(0,s.kt)("li",{parentName:"ul"},"optional parameters must appear towards the end of the formal parameter list. This is to support languages that\nonly allow positional parameters. The more likely a parameter is to be omitted, the closer it should be to the end\nof the formal parameter list.")))))}p.isMDXComponent=!0}}]);