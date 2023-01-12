"use strict";(self.webpackChunksdk_spec=self.webpackChunksdk_spec||[]).push([[9066],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return r?n.createElement(h,l(l({ref:t},d),{},{components:r})):n.createElement(h,l({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4089:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={},l="NodeUtils",a={unversionedId:"Modules/Util/NodeUtils/NodeUtils",id:"Modules/Util/NodeUtils/NodeUtils",title:"NodeUtils",description:"This page describes interfaces and helper classes that are used to work with a Bifrost node. The descriptions are in a",source:"@site/docs/Modules/Util/NodeUtils/NodeUtils.md",sourceDirName:"Modules/Util/NodeUtils",slug:"/Modules/Util/NodeUtils/",permalink:"/sdk-spec/docs/Modules/Util/NodeUtils/",draft:!1,editUrl:"https://github.com/topl/sdk-spec/tree/main/packages/create-docusaurus/templates/shared/docs/Modules/Util/NodeUtils/NodeUtils.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Util",permalink:"/sdk-spec/docs/Modules/Util/"},next:{title:"BifrostConnection.getUrl Tests",permalink:"/sdk-spec/docs/Modules/Util/NodeUtils/BifrostConnection Tests/getUrl_test"}},s={},u=[{value:"Interface BifrostConnection",id:"interface-bifrostconnection",level:2},{value:"method getUrl",id:"method-geturl",level:3},{value:"Signature(s)",id:"signatures",level:4},{value:"Description",id:"description",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Errors",id:"errors",level:4},{value:"Testing Procedure",id:"testing-procedure",level:4},{value:"Class NodeCache",id:"class-nodecache",level:2},{value:"Constructor",id:"constructor",level:3},{value:"Signature(s)",id:"signatures-1",level:4},{value:"Description",id:"description-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Errors",id:"errors-1",level:4},{value:"Testing Procedure",id:"testing-procedure-1",level:4},{value:"method getGenesisBlock",id:"method-getgenesisblock",level:3},{value:"Signature(s)",id:"signatures-2",level:4},{value:"Description",id:"description-2",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Errors",id:"errors-2",level:4},{value:"Testing Procedure",id:"testing-procedure-2",level:4},{value:"method getNodeConfig",id:"method-getnodeconfig",level:3},{value:"Signature(s)",id:"signatures-3",level:4},{value:"Description",id:"description-3",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Errors",id:"errors-3",level:4},{value:"Testing Procedure",id:"testing-procedure-3",level:4},{value:"Class SlotUtil",id:"class-slotutil",level:2},{value:"method SlotUtil Constructor",id:"method-slotutil-constructor",level:3},{value:"Signature(s)",id:"signatures-4",level:4},{value:"Description",id:"description-4",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Errors",id:"errors-4",level:4},{value:"Testing Procedure",id:"testing-procedure-4",level:4},{value:"method slotNumberToTimestamp",id:"method-slotnumbertotimestamp",level:3},{value:"Signature(s)",id:"signatures-5",level:4},{value:"Description",id:"description-5",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Errors",id:"errors-5",level:4},{value:"Testing Procedure",id:"testing-procedure-5",level:4},{value:"method timestampToSlotNumber",id:"method-timestamptoslotnumber",level:3},{value:"Signature(s)",id:"signatures-6",level:4},{value:"Description",id:"description-6",level:4},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Errors",id:"errors-6",level:4},{value:"Testing Procedure",id:"testing-procedure-6",level:4}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nodeutils"},"NodeUtils"),(0,o.kt)("p",null,"This page describes interfaces and helper classes that are used to work with a Bifrost node. The descriptions are in a\nlanguage-neutral form. To be language-neutral, we ",(0,o.kt)("a",{parentName:"p",href:"../../Overview/Assumptions"},"follow a set of assumptions"),"."),(0,o.kt)("p",null,"The interfaces and classes documented on this page are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#interface-bifrostconnection"},"BifrostConnection")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#class-nodecache"},"NodeCache")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#class-slotutil"},"SlotUtil"))),(0,o.kt)("h2",{id:"interface-bifrostconnection"},"Interface BifrostConnection"),(0,o.kt)("p",null,"Objects that implement this interface are responsible for providing connections used for gRPC calls from a client to a\nBifrost node. Such objects also provide information about how the connections are configured."),(0,o.kt)("p",null,"All classes that implement this interface will implementation specific. In particular, this interface does not specify\nanything about how connections are managed. The expectation is that all details related to connection management will be\ndetermined by the gRPC implementation used, as that will be the main consumer of this interface's implementation."),(0,o.kt)("p",null,"Here is a summary of the methods/functions in this interface:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#geturl"},"getUrl")," \u2014 Get the URL of the Bifrost node that a BifrostConnection works with.")),(0,o.kt)("h3",{id:"method-geturl"},"method getUrl"),(0,o.kt)("h4",{id:"signatures"},"Signature(s)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"getUrl() returns String\n")),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,"Return the URL of the Bifrost node that this object connects to."),(0,o.kt)("h4",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"No Parameters")),(0,o.kt)("h4",{id:"returns"},"Returns"),(0,o.kt)("p",null,"A string that is the URL of the Bifrost node this object connect to."),(0,o.kt)("h4",{id:"errors"},"Errors"),(0,o.kt)("p",null,"The errors that the method/function will produce include:"),(0,o.kt)("p",null,"No expected errors"),(0,o.kt)("h4",{id:"testing-procedure"},"Testing Procedure"),(0,o.kt)("p",null,"The testing procedure for ",(0,o.kt)("inlineCode",{parentName:"p"},"getNodeConfig"),"\nis ",(0,o.kt)("a",{parentName:"p",href:"NodeUtils/BifrostConnection%20Tests/getUrl_test"},"described on a separate page")),(0,o.kt)("h2",{id:"class-nodecache"},"Class NodeCache"),(0,o.kt)("p",null,"This class is responsible for caching various information from a BiFrost node."),(0,o.kt)("p",null,"Here is a summary of the methods/functions in this class:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#constructor"},"Constructor")," \u2014 Construct a ",(0,o.kt)("inlineCode",{parentName:"li"},"NodeCache")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#getgenesisblock"},"getGenesisBlock")," \u2014 Get the Bifrost node's genesis block"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#getnodeconfig"},"getNodeConfig")," \u2014 Get the Bifrost node's configuration information.")),(0,o.kt)("h3",{id:"constructor"},"Constructor"),(0,o.kt)("h4",{id:"signatures-1"},"Signature(s)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NodeCache(connection: BifrostConnection, timeoutMillis: uint64)\n")),(0,o.kt)("h4",{id:"description-1"},"Description"),(0,o.kt)("p",null,"Construct an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeCache")," that gets data from the bifrost node that the given ",(0,o.kt)("inlineCode",{parentName:"p"},"BifrostConnection")," object\nconnects to. The constructor must initiate the pre-fetch of the node's configuration and Genesis block information."),(0,o.kt)("p",null,"The pre-fetch may be synchronous or asynchronous. It is recommended, but not required, that the pre-fetch be\nasynchronous. If the pre-fetch is synchronous, then the constructor will be expected to produce the errors noted below.\nIf the pre-fetch is asynchronous, then any errors encountered will not be returned from this constructor, but from the\nfunctions/methods that attempt to access the information from the constructed object."),(0,o.kt)("h4",{id:"parameters-1"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connection")," the ",(0,o.kt)("inlineCode",{parentName:"li"},"BifrostConnection")," object that will be used to communicate with the Bifrost node.")),(0,o.kt)("h4",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,"The constructed object."),(0,o.kt)("h4",{id:"errors-1"},"Errors"),(0,o.kt)("p",null,"The errors that the method/function will produce include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Unable to connect to Bifrost node."),(0,o.kt)("li",{parentName:"ul"},"Bifrost node returned an error.")),(0,o.kt)("h4",{id:"testing-procedure-1"},"Testing Procedure"),(0,o.kt)("p",null,"The testing procedure for ",(0,o.kt)("inlineCode",{parentName:"p"},"getNodeConfig")," is ",(0,o.kt)("a",{parentName:"p",href:"NodeUtils/NodeCache%20Tests/constructor_test"},"described on a separate page")),(0,o.kt)("h3",{id:"method-getgenesisblock"},"method getGenesisBlock"),(0,o.kt)("h4",{id:"signatures-2"},"Signature(s)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"getGenesisBlock() returns co.topl.proto.models.FullBlock\n")),(0,o.kt)("h4",{id:"description-2"},"Description"),(0,o.kt)("p",null,"Get a cached version of the genesis block. This cached object is obtained by the ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeCache")," constructor initiating a\ncall to calling ",(0,o.kt)("inlineCode",{parentName:"p"},"BifrostQuery.getBlockByHeight(1)"),"."),(0,o.kt)("h4",{id:"parameters-2"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"No Parameters")),(0,o.kt)("h4",{id:"returns-2"},"Returns"),(0,o.kt)("p",null,"The cached ",(0,o.kt)("inlineCode",{parentName:"p"},"co.topl.proto.models.FullBlock")," object."),(0,o.kt)("h4",{id:"errors-2"},"Errors"),(0,o.kt)("p",null,"The errors that the method/function will produce as a result of a failed asynchronous query initiated by the constructor\ninclude:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Unable to connect to Bifrost node."),(0,o.kt)("li",{parentName:"ul"},"Bifrost node returned an error."),(0,o.kt)("li",{parentName:"ul"},"The Bifrost node returned an error ."),(0,o.kt)("li",{parentName:"ul"},"The Bifrost node did not return a result before the timeout happened")),(0,o.kt)("h4",{id:"testing-procedure-2"},"Testing Procedure"),(0,o.kt)("p",null,"The testing procedure for the constructor\nis ",(0,o.kt)("a",{parentName:"p",href:"NodeUtils/NodeCache%20Tests/getgenesisblock_test"},"described on a separate page")),(0,o.kt)("h3",{id:"method-getnodeconfig"},"method getNodeConfig"),(0,o.kt)("h4",{id:"signatures-3"},"Signature(s)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"getNodeConfig(connection: BifrostConnection, timeoutMillis: uint64, maxAgeMillis: uint64)\n    returns co.topl.proto.models.node.NodeConfig\n")),(0,o.kt)("h4",{id:"description-3"},"Description"),(0,o.kt)("p",null,"Get a possibly cached version of the Bifrost node's configuration information. It gets the ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeConfig")," object by\ncalling ",(0,o.kt)("inlineCode",{parentName:"p"},"BifrostQuery.getNodeConfig")," if there is no cached object or the cached object is too old."),(0,o.kt)("h4",{id:"parameters-3"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connection")," the ",(0,o.kt)("inlineCode",{parentName:"li"},"BifrostConnection")," object that will be used to communicate with the Bifrost node."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeoutMillis")," ",(0,o.kt)("em",{parentName:"li"},"(optional)")," The maximum number of milliseconds to wait. The default value is 2000 (2 seconds)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"maxAgeMillis")," ",(0,o.kt)("em",{parentName:"li"},"(optional)")," The maximum age of the object to be returned. The default value is 86,400,000 (1 day). If\nthe ",(0,o.kt)("inlineCode",{parentName:"li"},"NodeConfig")," object is older than this, it will be refreshed by calling ",(0,o.kt)("inlineCode",{parentName:"li"},"BifrostQuery.getNodeConfig"),".")),(0,o.kt)("h4",{id:"returns-3"},"Returns"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"co.topl.proto.models.node.NodeConfig")," that contains the node's configuration. The encapsulated configuration must\ninclude the configured slot duration."),(0,o.kt)("p",null,"The value is cached. The implementation is expected to refresh the information when it"),(0,o.kt)("h4",{id:"errors-3"},"Errors"),(0,o.kt)("p",null,"The errors that the method/function will produce include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Unable to connect to Bifrost node."),(0,o.kt)("li",{parentName:"ul"},"Bifrost node returned an error."),(0,o.kt)("li",{parentName:"ul"},"The Bifrost node returned an error ."),(0,o.kt)("li",{parentName:"ul"},"The Bifrost node did not return a result before the timeout happened")),(0,o.kt)("h4",{id:"testing-procedure-3"},"Testing Procedure"),(0,o.kt)("p",null,"The testing procedure for the constructor\nis ",(0,o.kt)("a",{parentName:"p",href:"NodeUtils/NodeCache%20Tests/getnodeconfig_test"},"described on a separate page")),(0,o.kt)("h2",{id:"class-slotutil"},"Class SlotUtil"),(0,o.kt)("p",null,"This a class for working with ",(0,o.kt)("a",{parentName:"p",href:"../../Overview/Glossary#Slot"},"slot")," numbers."),(0,o.kt)("p",null,"Here is a summary of the methods/functions in this class:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#slotutil-constructor"},"Constructor")," \u2014 Construct an instance of ",(0,o.kt)("inlineCode",{parentName:"li"},"SlotUtil")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#slotnumbertotimestamp"},"slotNumberToTimestamp")," \u2014 Convert a slot number to a Unix Timestamp"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#timestamptoslotnumber"},"timestampToSlotNumber")," \u2014 Convert a Unix timestamp to a slot number.")),(0,o.kt)("h3",{id:"method-slotutil-constructor"},"method SlotUtil Constructor"),(0,o.kt)("h4",{id:"signatures-4"},"Signature(s)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"SlotUtil(nodeCache: NodeCache)\n")),(0,o.kt)("h4",{id:"description-4"},"Description"),(0,o.kt)("p",null,"Construct an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"SlotUtil")," that gets the duration of slots\nfrom ",(0,o.kt)("a",{parentName:"p",href:"#getnodeconfig"},"nodeCache.getNodeConfig.slotDuration")," and the start of slot 0\nfrom",(0,o.kt)("a",{parentName:"p",href:"#getgenesisblock"},"nodeCache.getGenesisBlock().header.timestamp"),"."),(0,o.kt)("h4",{id:"parameters-4"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connection")," the ",(0,o.kt)("inlineCode",{parentName:"li"},"BifrostConnection")," object that will be used to communicate with the Bifrost node.")),(0,o.kt)("h4",{id:"returns-4"},"Returns"),(0,o.kt)("p",null,"The constructed object."),(0,o.kt)("h4",{id:"errors-4"},"Errors"),(0,o.kt)("p",null,"The errors that the method/function will produce include:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"No Errors")),(0,o.kt)("h4",{id:"testing-procedure-4"},"Testing Procedure"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"No Prescribed Tests")),(0,o.kt)("h3",{id:"method-slotnumbertotimestamp"},"method slotNumberToTimestamp"),(0,o.kt)("h4",{id:"signatures-5"},"Signature(s)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"slotNumberToTimestamp(slotNumber: uint64) returns int64\n")),(0,o.kt)("h4",{id:"description-5"},"Description"),(0,o.kt)("p",null,"Convert a slot number to a timestamp using the slot duration and start of slot 0 obtained from this object's ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeCache"),"\n."),(0,o.kt)("h4",{id:"parameters-5"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"slotNumber")," a number that identifies a slot in a Topl blockchain network.")),(0,o.kt)("h4",{id:"returns-5"},"Returns"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://www.unixtimestamp.com/"},"Unix timestamp")),(0,o.kt)("h4",{id:"errors-5"},"Errors"),(0,o.kt)("p",null,"The errors that the method/function will produce include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Slot number translates to a time too far in the future to be represented as a Unix timestamp (overflow).")),(0,o.kt)("h4",{id:"testing-procedure-5"},"Testing Procedure"),(0,o.kt)("p",null,"The testing procedure for the constructor\nis ",(0,o.kt)("a",{parentName:"p",href:"NodeUtils/SlotUtil%20Tests/slot_timestamp_conversion_test"},"described on a separate page")),(0,o.kt)("h3",{id:"method-timestamptoslotnumber"},"method timestampToSlotNumber"),(0,o.kt)("h4",{id:"signatures-6"},"Signature(s)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"timestampToSlotNumber(timestamp: int64) returns uint64\n")),(0,o.kt)("h4",{id:"description-6"},"Description"),(0,o.kt)("p",null,"Convert a timestamp to a slot number using the slot duration and start of slot 0 obtained from this object's\n",(0,o.kt)("inlineCode",{parentName:"p"},"nodeCache"),"."),(0,o.kt)("h4",{id:"parameters-6"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timestamp")," a ",(0,o.kt)("a",{parentName:"li",href:"https://www.unixtimestamp.com/"},"Unix timestamp"))),(0,o.kt)("h4",{id:"returns-6"},"Returns"),(0,o.kt)("p",null,"The slot number that includes the given timestamp."),(0,o.kt)("h4",{id:"errors-6"},"Errors"),(0,o.kt)("p",null,"The errors that the method/function will produce include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Timestamp is before slot 0")),(0,o.kt)("h4",{id:"testing-procedure-6"},"Testing Procedure"),(0,o.kt)("p",null,"The testing procedure for the constructor\nis ",(0,o.kt)("a",{parentName:"p",href:"NodeUtils/SlotUtil%20Tests/slot_timestamp_conversion_test"},"described on a separate page")))}c.isMDXComponent=!0}}]);