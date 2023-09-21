"use strict";(self.webpackChunkcanine_docs=self.webpackChunkcanine_docs||[]).push([[2782],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,k=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return a?o.createElement(k,l(l({ref:t},c),{},{components:a})):o.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<r;d++)l[d]=a[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1422:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=a(7462),n=(a(7294),a(3905));const r={sidebar_position:3},l="How to Delegate JKL Tokens to a Validator",i={unversionedId:"using-jackal/delegate",id:"using-jackal/delegate",title:"How to Delegate JKL Tokens to a Validator",description:"This guide will help you delegate your JKL tokens to a validator on the Jackal Protocol, which helps secure the network",source:"@site/docs/using-jackal/delegate.md",sourceDirName:"using-jackal",slug:"/using-jackal/delegate",permalink:"/docs/using-jackal/delegate",draft:!1,editUrl:"https://github.com/JackalLabs/canine-docs/blob/master/docs/using-jackal/delegate.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Accessing JKL Tokens on Osmosis and Withdrawing to Jackal Protocol",permalink:"/docs/using-jackal/fund"},next:{title:"Jackal Dashboard Guide",permalink:"/docs/using-jackal/dashboard"}},s={},d=[{value:"Step 1: Set up a Keplr Wallet",id:"step-1-set-up-a-keplr-wallet",level:2},{value:"Step 2: Choose a Dashboard",id:"step-2-choose-a-dashboard",level:2},{value:"Step 3: Choose a Validator",id:"step-3-choose-a-validator",level:2},{value:"Step 4: Delegate JKL Tokens",id:"step-4-delegate-jkl-tokens",level:2},{value:"Step 5: Monitor and Manage Your Delegation",id:"step-5-monitor-and-manage-your-delegation",level:2},{value:"Reminder",id:"reminder",level:3},{value:"Slashing by 0.01%",id:"slashing-by-001",level:4},{value:"Slashing by 5%",id:"slashing-by-5",level:4}],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-delegate-jkl-tokens-to-a-validator"},"How to Delegate JKL Tokens to a Validator"),(0,n.kt)("p",null,"This guide will help you delegate your JKL tokens to a validator on the Jackal Protocol, which helps secure the network\nand earns you staking rewards."),(0,n.kt)("h2",{id:"step-1-set-up-a-keplr-wallet"},"Step 1: Set up a Keplr Wallet"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Install the ",(0,n.kt)("a",{parentName:"li",href:"https://wallet.keplr.app/"},"Keplr Wallet")," browser extension."),(0,n.kt)("li",{parentName:"ol"},"Create a new wallet or import an existing one."),(0,n.kt)("li",{parentName:"ol"},"Make sure you have some JKL tokens in your wallet.")),(0,n.kt)("h2",{id:"step-2-choose-a-dashboard"},"Step 2: Choose a Dashboard"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://app.jackalprotocol.com/"},"Jackal Dashboard")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://ping.pub/jackal/staking"},"Ping Pub"))),(0,n.kt)("h2",{id:"step-3-choose-a-validator"},"Step 3: Choose a Validator"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Review the list of active validators and their details, such as commission, uptime, and self-delegation."),(0,n.kt)("li",{parentName:"ol"},'Choose a validator that aligns with your preferences and click on "Delegate".')),(0,n.kt)("h2",{id:"step-4-delegate-jkl-tokens"},"Step 4: Delegate JKL Tokens"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Enter the amount of JKL tokens you want to delegate."),(0,n.kt)("li",{parentName:"ol"},'Click "Delegate" and confirm the transaction in your Keplr Wallet.'),(0,n.kt)("li",{parentName:"ol"},'Once the transaction is complete, you will see your delegated JKL tokens and earned rewards in the "Staking" or "\nDelegations" tab on the dashboards.')),(0,n.kt)("h2",{id:"step-5-monitor-and-manage-your-delegation"},"Step 5: Monitor and Manage Your Delegation"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"You can redelegate your JKL tokens to another validator or undelegate (unbond) them if you want to withdraw your\ntokens. Note that there is a 14-day unbonding period during which your tokens are locked and not earning rewards.")),(0,n.kt)("p",null,"Now you have successfully delegated your JKL tokens to a validator on the Jackal Protocol, contributing to the network's\nsecurity and earning staking rewards."),(0,n.kt)("h3",{id:"reminder"},"Reminder"),(0,n.kt)("p",null,"If you possess JKL tokens, you can temporarily lock them away to secure the protocol, this is called staking or\ndelegating. In exchange for securing the network with your tokens, you receive rewards and the ability to vote on the\nProtocol\u2019s future. These rewards come from newly generated JKL tokens and transaction fees."),(0,n.kt)("p",null,"It should be noted that staking or delegating is not risk free, this is why it is important to learn about the risks and\nparticipate in sustainable staking practices."),(0,n.kt)("p",null,"To decrease risk, it\u2019s recommended that you do research on validators and select one you trust as well as delegate to\nmultiple validators."),(0,n.kt)("h4",{id:"slashing-by-001"},"Slashing by 0.01%"),(0,n.kt)("p",null,"Occurs if the validator you delegate to is offline for too long."),(0,n.kt)("h4",{id:"slashing-by-5"},"Slashing by 5%"),(0,n.kt)("p",null,"Occurs if the validator signs two different blocks at the same block height. This is often caused by bad validator\noperation practices or malicious intent by the validator."))}p.isMDXComponent=!0}}]);