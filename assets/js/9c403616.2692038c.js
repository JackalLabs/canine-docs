"use strict";(self.webpackChunkcanine_docs=self.webpackChunkcanine_docs||[]).push([[1817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:2},i="JKLmint Module",l={unversionedId:"protocol/modules/jklmint",id:"protocol/modules/jklmint",title:"JKLmint Module",description:"The jklmint module is responsible for the management of the native JKL token within the Jackal Protocol. This module handles the issuance, distribution, and inflation of JKL tokens, ensuring a stable and secure token economy.",source:"@site/docs/protocol/modules/jklmint.md",sourceDirName:"protocol/modules",slug:"/protocol/modules/jklmint",permalink:"/docs/protocol/modules/jklmint",draft:!1,editUrl:"https://github.com/JackalLabs/canine-docs/blob/master/docs/protocol/modules/jklmint.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Module Overview",permalink:"/docs/protocol/modules/module-overview"},next:{title:"LP Module (Coming Soon)",permalink:"/docs/protocol/modules/lp"}},s={},m=[{value:"Overview",id:"overview",level:2},{value:"Parameters",id:"parameters",level:3}],u={toc:m},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jklmint-module"},"JKLmint Module"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"jklmint")," module is responsible for the management of the native JKL token within the Jackal Protocol. This module handles the issuance, distribution, and inflation of JKL tokens, ensuring a stable and secure token economy."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"jklmint")," module manages the following aspects of the JKL token:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Token Issuance"),": Determines the initial token supply and distribution."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Inflation"),": Manages the annual inflation rate, maintaining a consistent token supply growth."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Rewards Distribution"),": Handles the allocation of newly minted tokens as rewards for validators and delegators.")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"jklmint")," module uses the following parameters to manage the JKL token economy:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inflation_rate"),": The annual percentage rate at which the token supply will grow."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inflation_min"),": The minimum annual inflation rate allowed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"inflation_max"),": The maximum annual inflation rate allowed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"goal_bonded"),": The desired percentage of the total token supply that should be staked by validators and delegators."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"blocks_per_year"),": The estimated number of blocks produced in a year.")))}c.isMDXComponent=!0}}]);