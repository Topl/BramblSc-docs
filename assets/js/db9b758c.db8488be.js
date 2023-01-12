"use strict";(self.webpackChunksdk_spec=self.webpackChunksdk_spec||[]).push([[3033],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},s="Native Transaction Builder",o={unversionedId:"Modules/NativeTransactor/NativeTransactor",id:"Modules/NativeTransactor/NativeTransactor",title:"Native Transaction Builder",description:"This page describes the Brambl SDK's transaction builder. This is the portion of the SDK that is responsible for",source:"@site/docs/Modules/NativeTransactor/NativeTransactor.md",sourceDirName:"Modules/NativeTransactor",slug:"/Modules/NativeTransactor/",permalink:"/sdk-spec/docs/Modules/NativeTransactor/",draft:!1,editUrl:"https://github.com/topl/sdk-spec/tree/main/packages/create-docusaurus/templates/shared/docs/Modules/NativeTransactor/NativeTransactor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Signing",permalink:"/sdk-spec/docs/Modules/Crypto/Signing/"},next:{title:"UnprovenIoTx Tests",permalink:"/sdk-spec/docs/Modules/NativeTransactor/NativeTransactor Tests/UnprovenIoTx_test"}},l={},u=[{value:"Transaction Builder Data Flow",id:"transaction-builder-data-flow",level:2},{value:"Creating a Schedule",id:"creating-a-schedule",level:3},{value:"Selecting earliest and latest times a transaction may be included in a block",id:"selecting-earliest-and-latest-times-a-transaction-may-be-included-in-a-block",level:4},{value:"Converting Unix timestamps to slot numbers",id:"converting-unix-timestamps-to-slot-numbers",level:4},{value:"Creating the Outputs",id:"creating-the-outputs",level:3},{value:"Creating the Inputs",id:"creating-the-inputs",level:3},{value:"Application-Provided Data",id:"application-provided-data",level:3},{value:"Creating the UnprovenIoTx",id:"creating-the-unproveniotx",level:3},{value:"Structure of the Unproven Transaction Builder",id:"structure-of-the-unproven-transaction-builder",level:2},{value:"Interface Signable",id:"interface-signable",level:2},{value:"method signableBytes",id:"method-signablebytes",level:3},{value:"Signature(s)",id:"signatures",level:4},{value:"Description",id:"description",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Implementation Note",id:"implementation-note",level:4},{value:"Errors",id:"errors",level:4},{value:"Testing Procedure",id:"testing-procedure",level:4},{value:"Class Schedule",id:"class-schedule",level:2},{value:"Constructor",id:"constructor",level:3},{value:"Signature(s)",id:"signatures-1",level:4},{value:"Description",id:"description-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Errors",id:"errors-1",level:4},{value:"Testing Procedure",id:"testing-procedure-1",level:4},{value:"method signableBytes",id:"method-signablebytes-1",level:3},{value:"Signature(s)",id:"signatures-2",level:4},{value:"Description",id:"description-2",level:4},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Errors",id:"errors-2",level:4},{value:"Testing Procedure",id:"testing-procedure-2",level:4},{value:"Class UnspentOutput",id:"class-unspentoutput",level:2},{value:"Constructor",id:"constructor-1",level:3},{value:"Signature(s)",id:"signatures-3",level:4},{value:"Description",id:"description-3",level:4},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Errors",id:"errors-3",level:4},{value:"Testing Procedure",id:"testing-procedure-3",level:4},{value:"method signableBytes",id:"method-signablebytes-2",level:3},{value:"Signature(s)",id:"signatures-4",level:4},{value:"Description",id:"description-4",level:4},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Errors",id:"errors-4",level:4},{value:"Testing Procedure",id:"testing-procedure-4",level:4},{value:"Class UnprovenTransaction",id:"class-unproventransaction",level:2},{value:"Constructor",id:"constructor-2",level:3},{value:"Signature(s)",id:"signatures-5",level:4},{value:"Description",id:"description-5",level:4},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Errors",id:"errors-5",level:4},{value:"Testing Procedure",id:"testing-procedure-5",level:4},{value:"method signableBytes",id:"method-signablebytes-3",level:3},{value:"Signature(s)",id:"signatures-6",level:4},{value:"Description",id:"description-6",level:4},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Errors",id:"errors-6",level:4},{value:"Testing Procedure",id:"testing-procedure-6",level:4}],p={toc:u};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"native-transaction-builder"},"Native Transaction Builder"),(0,r.kt)("p",null,"This page describes the Brambl SDK's transaction builder. This is the portion of the SDK that is responsible for\nbuilding Topl unproven transactions."),(0,r.kt)("p",null,"This page is organized into two parts."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#transaction-builder-data-flow"},"The first part")," describes the data flow that the transaction builder supports for\nbuilding unproven transactions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#structure-of-the-unproven-transaction-builder"},"The second part")," describes the structure of the transaction builder\nin detail.")),(0,r.kt)("h2",{id:"transaction-builder-data-flow"},"Transaction Builder Data Flow"),(0,r.kt)("p",null,"The following diagram shows the typical data flow that will be used to build transactions using the\ntransaction builder. The flow of the diagram is from left to right."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Native Transaction Builder Flow",src:n(7357).Z,width:"2093",height:"1050"})),(0,r.kt)("p",null,"In the following discussion, we describe the inputs to unproven transaction constructor that produces\nan ",(0,r.kt)("inlineCode",{parentName:"p"},"UnprovenTransaction"),"."),(0,r.kt)("h3",{id:"creating-a-schedule"},"Creating a Schedule"),(0,r.kt)("p",null,"A transaction's schedule determines the earliest and latest slot number that a transaction may be incorporated into a\nblock. Slot numbers are not meaningful outside the blockchain network. Users and applications that care about when\ntransactions are incorporated into a block will generally want to express those times as timestamps. For this reason,\nthe first step in creating a schedule is to pick values for the earliest and latest times that the transaction is valid."),(0,r.kt)("h4",{id:"selecting-earliest-and-latest-times-a-transaction-may-be-included-in-a-block"},"Selecting earliest and latest times a transaction may be included in a block"),(0,r.kt)("p",null,"The earliest and latest valid times can be represented as ",(0,r.kt)("a",{parentName:"p",href:"https://www.unixtimestamp.com/"},"Unix timestamps"),". Both values\nmust be provided. For the many cases where we want a transaction to be as soon as possible, a good value for the\nearliest valid time is the current time. Our API provides the current time as a default for earliest valid time.\nChoosing a value for the latest valid time is a more complicated."),(0,r.kt)("p",null,"If the transaction author does not care about the latest time that a transaction is valid for inclusion in a block, then\na reasonable default would be 2",(0,r.kt)("sup",null,"63"),"-1 (9,223,372,036,854,775,807), which is the largest value that can be\nrepresented as a Unix timestamp. However, this is not recommended."),(0,r.kt)("p",null,"Topl recommends that transaction authors ",(0,r.kt)("em",{parentName:"p"},"do")," care about the latest valid time. The reason for this is that there is no\nway to determine that a request to add a transaction to the blockchain is successful until the transaction appears on\nthe blockchain. If the end of time is provided as the value of the transaction's latest valid time to be added, then\nclients will have to wait until the end of time before deciding that a request add a transaction to failed."),(0,r.kt)("p",null,"For now, the recommendation is to set the latest valid time to 8 minutes after the current time. In the future there may\nbe a better way to determine a default value for latest valid time."),(0,r.kt)("h4",{id:"converting-unix-timestamps-to-slot-numbers"},"Converting Unix timestamps to slot numbers"),(0,r.kt)("p",null,"Once we have Unix timestamps specifying the earliest and latest times that the transaction will be valid for including\nin a block, the next step is to convert those times into slot numbers. Slot numbers are the way that time is tracked by\nBifrost nodes."),(0,r.kt)("p",null,"To convert timestamps to slot numbers we use the\nmethod/function ",(0,r.kt)("a",{parentName:"p",href:"Util/NodeUtils#timestamptoslotnumber"},"timestampToSlotNumber"),"."),(0,r.kt)("p",null,"Once we have the two slot numbers and are given a Unix timestamp value, we use the three values to construct a\n",(0,r.kt)("inlineCode",{parentName:"p"},"Schedule")," object."),(0,r.kt)("h3",{id:"creating-the-outputs"},"Creating the Outputs"),(0,r.kt)("p",null,"Building the outputs for a transaction begins by creating an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"List[UnspentOutput]"),". After we have appended one or\nmore outputs to the list, we can use the list as one of the inputs to construct an ",(0,r.kt)("inlineCode",{parentName:"p"},"UnprovenIoTx"),"."),(0,r.kt)("p",null,"To construct an ",(0,r.kt)("inlineCode",{parentName:"p"},"UnspentOutput")," object, we begin with a quantity. To create a quantity of tokens, we use the quantity to\nconstruct a ",(0,r.kt)("inlineCode",{parentName:"p"},"Values.Token")," object."),(0,r.kt)("p",null,"We then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Values.Token")," object and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Address")," to create an ",(0,r.kt)("inlineCode",{parentName:"p"},"UnspentOutput")," object. Once created, we can append\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"UnspentOutput")," to the list of ",(0,r.kt)("inlineCode",{parentName:"p"},"UnspentOutput")," objects we are building."),(0,r.kt)("h3",{id:"creating-the-inputs"},"Creating the Inputs"),(0,r.kt)("p",null,"===================="),(0,r.kt)("h3",{id:"application-provided-data"},"Application-Provided Data"),(0,r.kt)("p",null,"An optional array of bytes may be provided by the client to be included as part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"UnprovenIoTx"),"."),(0,r.kt)("h3",{id:"creating-the-unproveniotx"},"Creating the UnprovenIoTx"),(0,r.kt)("p",null,"Once we have the ",(0,r.kt)("inlineCode",{parentName:"p"},"Schedule"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"List[UnprovenInput]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"List[UnspentOutput]")," and metadata, we construct the UnprovenIoTx."),(0,r.kt)("h2",{id:"structure-of-the-unproven-transaction-builder"},"Structure of the Unproven Transaction Builder"),(0,r.kt)("p",null,"Below, we describe the classes and interfaces that the Bramble SDK provides for building transactions. The\ndescriptions are in a language-neutral form. To be language-neutral,\nwe ",(0,r.kt)("a",{parentName:"p",href:"../Overview/Assumptions"},"follow a set of assumptions")),(0,r.kt)("p",null,"Here are the interfaces and classes that are described on this page:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#class-schedule"},"Schedule")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#interface-signable"},"Signable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#class-unproventransaction"},"UnprovenTransaction"))),(0,r.kt)("h2",{id:"interface-signable"},"Interface Signable"),(0,r.kt)("p",null,"This interface is responsible for caching various information from a BiFrost node."),(0,r.kt)("p",null,"This interface contains just one method/function."),(0,r.kt)("h3",{id:"method-signablebytes"},"method signableBytes"),(0,r.kt)("h4",{id:"signatures"},"Signature(s)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"signableBytes() returns co.topl.proto.node.SignableBytes\n")),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,"Gets a byte array representation of this object that should be used as sequence of bytes to use for hashes and\nsignatures based on this object."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"No Parameters")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,"The array of bytes."),(0,r.kt)("h4",{id:"implementation-note"},"Implementation Note"),(0,r.kt)("p",null,"Implementations of this for composite objects may call the ",(0,r.kt)("inlineCode",{parentName:"p"},"signableBytes")," method of their constituent objects. For\nexample, The implementation of the method for transactions will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"signableBytes")," methods of a transaction's\ninputs and outputs."),(0,r.kt)("p",null,"Implementing this method to return an array of bytes may result in more effort spent copying that necessary. For this\nreason, you may consider implementing this to return a smarter return type that will avoid most of the unnecessary\ncopying."),(0,r.kt)("h4",{id:"errors"},"Errors"),(0,r.kt)("p",null,"The errors that the method/function will produce include:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"None")),(0,r.kt)("h4",{id:"testing-procedure"},"Testing Procedure"),(0,r.kt)("p",null,"The exact tests used for this method will vary with the implementation, but should include a test to verify that if two\nobjects implement ",(0,r.kt)("inlineCode",{parentName:"p"},"Signable")," and compare as equal, then the ",(0,r.kt)("inlineCode",{parentName:"p"},"signableBytes")," methods of both objects returns identical\nresults."),(0,r.kt)("h2",{id:"class-schedule"},"Class Schedule"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Implements")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Signable")),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("h4",{id:"signatures-1"},"Signature(s)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Schedule(minValidSlot: uint64, maxValidSlot: uint64, timestamp: int64)\n")),(0,r.kt)("h4",{id:"description-1"},"Description"),(0,r.kt)("p",null,"Construct a ",(0,r.kt)("inlineCode",{parentName:"p"},"Schedule")," object."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"minValidSlot \u2014 the earliest slot that the containing transaction is valid for inclusion in a block."),(0,r.kt)("li",{parentName:"ul"},"maxValidSlot \u2014 the latest slot that the containing transaction is valid for inclusion in a block."),(0,r.kt)("li",{parentName:"ul"},"timestamp \u2014 A timestamp provided by the client that is stored as part of the enclosing transaction's schedule, but is\nnot otherwise used by the Topl protocol.")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"The constructed ",(0,r.kt)("inlineCode",{parentName:"p"},"Schedule")," object."),(0,r.kt)("h4",{id:"errors-1"},"Errors"),(0,r.kt)("p",null,"The errors that the method/function will produce as a result of a failed asynchronous query initiated by the constructor\ninclude:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"minValidSlot > maxValidSlot")),(0,r.kt)("h4",{id:"testing-procedure-1"},"Testing Procedure"),(0,r.kt)("p",null,"The testing procedure for the constructor\nis ",(0,r.kt)("a",{parentName:"p",href:"NativeTransactor/NativeTransactor%20Tests/schedule_test"},"described on a separate page")),(0,r.kt)("h3",{id:"method-signablebytes-1"},"method signableBytes"),(0,r.kt)("h4",{id:"signatures-2"},"Signature(s)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"signableBytes() returns co.topl.proto.node.SignableBytes\n")),(0,r.kt)("h4",{id:"description-2"},"Description"),(0,r.kt)("p",null,"Gets a byte array representation of this object that should be used as sequence of bytes to use for hashes and\nsignatures based on the contents of this object."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"No Parameters")),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,"The array of bytes."),(0,r.kt)("h4",{id:"errors-2"},"Errors"),(0,r.kt)("p",null,"The errors that the method/function will produce include:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"None")),(0,r.kt)("h4",{id:"testing-procedure-2"},"Testing Procedure"),(0,r.kt)("p",null,"the testing procedure for this method/functions\nis ",(0,r.kt)("a",{parentName:"p",href:"NativeTransactor/NativeTransactor%20Tests/schedule_test"},"described on a separate page")),(0,r.kt)("h2",{id:"class-unspentoutput"},"Class UnspentOutput"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Implements")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Signable")),(0,r.kt)("h3",{id:"constructor-1"},"Constructor"),(0,r.kt)("h4",{id:"signatures-3"},"Signature(s)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"UnspentOutput(address: Address, value: Box.Value, metadata: Option[Array[byte])\n")),(0,r.kt)("h4",{id:"description-3"},"Description"),(0,r.kt)("p",null,"Construct an ",(0,r.kt)("inlineCode",{parentName:"p"},"UnspentOutput")," object."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"address")," \u2014 the address that the output will be associated with."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," \u2014 The value that will be in the box that is created from this output."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metadata")," \u2014 optional client supplied data that is stored along with the output. Default is a value such as null or\nNone that is used in the implementation value to indicate the absence of a value.")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,"The constructed ",(0,r.kt)("inlineCode",{parentName:"p"},"UnspentOutput")," object."),(0,r.kt)("h4",{id:"errors-3"},"Errors"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"None expected")),(0,r.kt)("h4",{id:"testing-procedure-3"},"Testing Procedure"),(0,r.kt)("p",null,"The testing procedure for the constructor\nis ",(0,r.kt)("a",{parentName:"p",href:"NativeTransactor/NativeTransactor%20Tests/unspent_output_test"},"described on a separate page")),(0,r.kt)("h3",{id:"method-signablebytes-2"},"method signableBytes"),(0,r.kt)("h4",{id:"signatures-4"},"Signature(s)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"signableBytes() returns co.topl.proto.node.SignableBytes\n")),(0,r.kt)("h4",{id:"description-4"},"Description"),(0,r.kt)("p",null,"Gets a byte array representation of this object that should be used as sequence of bytes to use for hashes and\nsignatures based on the contents of this object."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"No Parameters")),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,"The array of bytes."),(0,r.kt)("h4",{id:"errors-4"},"Errors"),(0,r.kt)("p",null,"The errors that the method/function will produce include:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"None")),(0,r.kt)("h4",{id:"testing-procedure-4"},"Testing Procedure"),(0,r.kt)("p",null,"the testing procedure for this method/functions\nis ",(0,r.kt)("a",{parentName:"p",href:"NativeTransactor/NativeTransactor%20Tests/unspent_output_test"},"described on a separate page")),(0,r.kt)("h2",{id:"class-unproventransaction"},"Class UnprovenTransaction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Implements")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Signable")),(0,r.kt)("h3",{id:"constructor-2"},"Constructor"),(0,r.kt)("h4",{id:"signatures-5"},"Signature(s)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"UnprovenIoTx(inputs: List[UnprovenInput], outputs: List[UnspentOutput],\n             schedule: IoTransaction.Schedule, metadata: Metadata)\n")),(0,r.kt)("h4",{id:"description-5"},"Description"),(0,r.kt)("p",null,"Construct an ",(0,r.kt)("inlineCode",{parentName:"p"},"UnprovenIoTx")," object."),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inputs")," \u2014 A list of ",(0,r.kt)("inlineCode",{parentName:"li"},"UnprovenInput")," objects"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"outputs")," \u2014 A list of ",(0,r.kt)("inlineCode",{parentName:"li"},"UnspentOutput")," objects"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"schedule")," \u2014 A schedule object with the "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metadata")," \u2014 optional client supplied data that is stored along with the transaction. Default is a value such as null or\nNone that is used in the implementation value to indicate the absence of a value.")),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,"The constructed ",(0,r.kt)("inlineCode",{parentName:"p"},"UnprovenIoTx")," object."),(0,r.kt)("h4",{id:"errors-5"},"Errors"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"None expected")),(0,r.kt)("h4",{id:"testing-procedure-5"},"Testing Procedure"),(0,r.kt)("p",null,"The testing procedure for the constructor\nis ",(0,r.kt)("a",{parentName:"p",href:"NativeTransactor/NativeTransactor%20Tests/UnprovenIoTx_test"},"described on a separate page")),(0,r.kt)("h3",{id:"method-signablebytes-3"},"method signableBytes"),(0,r.kt)("h4",{id:"signatures-6"},"Signature(s)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"signableBytes() returns co.topl.proto.node.SignableBytes\n")),(0,r.kt)("h4",{id:"description-6"},"Description"),(0,r.kt)("p",null,"Gets a byte array representation of this object that should be used as sequence of bytes to use for hashes and\nsignatures based on the contents of this object."),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"No Parameters")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,"The array of bytes."),(0,r.kt)("h4",{id:"errors-6"},"Errors"),(0,r.kt)("p",null,"The errors that the method/function will produce include:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"None")),(0,r.kt)("h4",{id:"testing-procedure-6"},"Testing Procedure"),(0,r.kt)("p",null,"the testing procedure for this method/functions\nis ",(0,r.kt)("a",{parentName:"p",href:"NativeTransactor/NativeTransactor%20Tests/UnprovenIoTx_test"},"described on a separate page")))}d.isMDXComponent=!0},7357:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transaction_builder.drawio-8f75230e564c6833bb72daf309139ff3.png"}}]);