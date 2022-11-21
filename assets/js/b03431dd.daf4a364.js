"use strict";(self.webpackChunksdk_spec=self.webpackChunksdk_spec||[]).push([[623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={},o="Assumptions",s={unversionedId:"Overview/Assumptions",id:"Overview/Assumptions",title:"Assumptions",description:"This specification contains descriptions of the SDK interfaces. The descriptions are documented in a way that assumes",source:"@site/docs/Overview/Assumptions.md",sourceDirName:"Overview",slug:"/Overview/Assumptions",permalink:"/sdk-spec/docs/Overview/Assumptions",draft:!1,editUrl:"https://github.com/topl/sdk-spec/tree/main/packages/create-docusaurus/templates/shared/docs/Overview/Assumptions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/sdk-spec/docs/Overview/"},next:{title:"Hiding Nondeterminism and Organizing TxO State",permalink:"/sdk-spec/docs/Overview/HidingNonDeterminism"}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"assumptions"},"Assumptions"),(0,i.kt)("p",null,"This specification contains descriptions of the SDK interfaces. The descriptions are documented in a way that assumes\nall languages used for implementations have a common set of features related to supporting the object-oriented paradigm:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Classes that can be used to create instances or objects. The objects have functions/methods and attributes. We do not\nassume that there is inheritance between classes."),(0,i.kt)("li",{parentName:"ul"},"Some implementation languages allow functions or methods to throw exceptions or panic when something unexpected\nhappens that is outside of the assumptions, requirements and behaviors documented here. This way of dealing with\nunexpected behavior is not be documented as part of any interface documented here. If implementations need to respond\nto an unexpected situation in this way, the implementation must document this behavior."),(0,i.kt)("li",{parentName:"ul"},"Interfaces describe a set of functions/methods provided by classes that implement the interfaces. We do not assume\nthat interfaces can inherit from interfaces."),(0,i.kt)("li",{parentName:"ul"},"We assume that classes can implement multiple interfaces."),(0,i.kt)("li",{parentName:"ul"},"The type of a parameter or return value can be a class, interface or primitive type."),(0,i.kt)("li",{parentName:"ul"},"We do not assume that classes can have more than one public constructor."),(0,i.kt)("li",{parentName:"ul"},"We assume that there are static functions/methods that can be associated with a class that can be called without\nhaving an instance of the class. These will be primarily used to create instances of their associated class or to set\nglobal parameters."),(0,i.kt)("li",{parentName:"ul"},"We assume that the language is either dynamically typed or statically typed with classes and interfaces can be\ngeneric/parametric. Generic/parametric classes and interfaces have type parameters used to specify the types of method\nparameters and return values."),(0,i.kt)("li",{parentName:"ul"},"We assume that the language provides a future or promise type that encapsulates values that are computed\nasynchronously. The minimal functionality assumed for the future or promise type is that it has methods to query\nwhether the computation has finished and a blocking operation to get the value of the computation.",(0,i.kt)("br",{parentName:"li"}),"In the rest of this document, we consider \u201cfuture\u201d and \u201cpromise\u201d to be synonyms and use \u201cfuture\u201d to refer to both."),(0,i.kt)("li",{parentName:"ul"},"We assume that methods/functions can have parameters whose values are methods/functions (first-class functions).")),(0,i.kt)("p",null,"Various data types are used to describe the parameters and return types of functions/methods. Most of these are defined\nin protobuf specifications from which language specific definitions are generated. A few collection types are not\ndefined in the protobuf specs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Option"),"\nThis is a very simple collection that either contains one element or None. It is used to indicate that a field or\nparameter may not have a value. For implementation languages that do not have an equivalent, ",(0,i.kt)("inlineCode",{parentName:"li"},"Option")," can be\nimplemented by the use of null values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Array")," a fixed length ordered collection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Collection"),"\nThis is an unordered collection. It provides operations to iterate over its contents and to determine if an object\nis an element of the collection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"List"),"\nThis is an ordered collection. It provides operations to iterate over its contents in their order and to determine if\nan object is an element of the collection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Stream"),"\nis a first-in-first-out data structure to which data can be asynchronously added and removed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Map"),"\nis a map/dictionary/associative array that associated keys with values.")),(0,i.kt)("p",null,"Most implementation types will have commonly used equivalents of these. The most appropriate equivalent should be used.\nBecause some implementation languages will provide collection types that take type parameters, the declarations include\ntype parameters for these."),(0,i.kt)("p",null,"For implementation using strongly typed languages, we use all of these in our specification with a data type indicating\nthe type of content that the collection has. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"Array[byte]"),"."),(0,i.kt)("p",null,"For specifying integer types we use these:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"byte")," an 8 bit quantity that we do not do arithmetic or inequality comparisons (",(0,i.kt)("inlineCode",{parentName:"li"},"<"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"<="),", ",(0,i.kt)("inlineCode",{parentName:"li"},">=")," or ",(0,i.kt)("inlineCode",{parentName:"li"},">"),") on."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uint8")," an unsigned 8 bit quantity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int8")," a signed 8 bit quantity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uint16")," an unsigned 16 bit quantity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int16")," a signed 16 bit quantity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uint32")," an unsigned 32 bit quantity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int32")," a signed 32 bit quantity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uint64")," an unsigned 64 bit quantity."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int64")," a signed 64 bit quanity.")))}u.isMDXComponent=!0}}]);