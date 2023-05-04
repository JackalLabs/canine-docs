"use strict";(self.webpackChunkcanine_docs=self.webpackChunkcanine_docs||[]).push([[3523],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return r?n.createElement(f,s(s({ref:t},m),{},{components:r})):n.createElement(f,s({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4824:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4},s="Name Service Module",i={unversionedId:"protocol/modules/rns",id:"protocol/modules/rns",title:"Name Service Module",description:"The rns (Reverse Name Service) module is an essential component of the Jackal Protocol, providing a user-friendly naming system for blockchain addresses. The RNS module simplifies the process of interacting with complex addresses by mapping them to human-readable names. This module allows users to transfer tokens and permissions to files/folders stored on the Jackal Protocol using human readable names.",source:"@site/docs/protocol/modules/rns.md",sourceDirName:"protocol/modules",slug:"/protocol/modules/rns",permalink:"/docs/protocol/modules/rns",draft:!1,editUrl:"https://github.com/JackalLabs/canine-docs/blob/master/docs/protocol/modules/rns.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"LP Module (Coming Soon)",permalink:"/docs/protocol/modules/lp"},next:{title:"WASM Module",permalink:"/docs/protocol/modules/wasm"}},l={},c=[{value:"Overview",id:"overview",level:2}],m={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"name-service-module"},"Name Service Module"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rns")," (Reverse Name Service) module is an essential component of the Jackal Protocol, providing a user-friendly naming system for blockchain addresses. The RNS module simplifies the process of interacting with complex addresses by mapping them to human-readable names. This module allows users to transfer tokens and permissions to files/folders stored on the Jackal Protocol using human readable names. "),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rns")," module manages the following aspects of the Reverse Name Service:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Name Registration"),": Allows users to register unique names for their blockchain addresses."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Name Management"),": Facilitates updating, renewing, and transferring RNS names."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Name Resolution"),": Provides a mechanism for resolving RNS names to their corresponding addresses."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Name Sales"),": Enables users to buy and sell RNS names through the RNS Marketplace."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Name Transfers"),": Enables users to transfer RNS names.")),(0,o.kt)("p",null,"For a more detailed guide on integrating the rns module into your application, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/JackalLabs/canine-chain/blob/master/x/README.md"},"module documentation")," on GitHub."))}u.isMDXComponent=!0}}]);