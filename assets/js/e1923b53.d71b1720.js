"use strict";(self.webpackChunkcanine_docs=self.webpackChunkcanine_docs||[]).push([[1947],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:3},s="Joining Testnet",i={unversionedId:"nodes/nodes/testnet",id:"nodes/nodes/testnet",title:"Joining Testnet",description:"After installing canined. You can join the testnet by following these steps:",source:"@site/docs/nodes/nodes/3_testnet.md",sourceDirName:"nodes/nodes",slug:"/nodes/nodes/testnet",permalink:"/docs/nodes/nodes/testnet",draft:!1,editUrl:"https://github.com/JackalLabs/canine-docs/blob/master/docs/nodes/nodes/3_testnet.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Installing Canined",permalink:"/docs/nodes/nodes/installation"},next:{title:"Joining Mainnet",permalink:"/docs/nodes/nodes/mainnet"}},c={},l=[],p={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"joining-testnet"},"Joining Testnet"),(0,a.kt)("p",null,"After installing ",(0,a.kt)("inlineCode",{parentName:"p"},"canined"),". You can join the testnet by following these steps:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"canined init <alias> --chain-id=<chain-id>\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"chain-id")," for testnet is currently ",(0,a.kt)("inlineCode",{parentName:"p"},"lupulella-2"),".")),(0,a.kt)("p",null,"Then we want to replace our generated genesis file with the one used to start the network. We also need to set our peers and seeds."),(0,a.kt)("p",null,"For an updated list of peers & seeds, please check ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JackalLabs/jackal-chain-assets/blob/main/testnet/seeds.md"},"this page"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'wget -O ~/.canine/config/genesis.json https://raw.githubusercontent.com/JackalLabs/jackal-chain-assets/main/testnet/genesis.json\n\nexport SEEDS="84f520678ef59ea02f942fa6323ec562ca5a3249@45.79.161.178:26656,cecc087977336da1e9ccd2c50097cd9e7d5e1874@141.95.33.39:26656"\nsed -i.bak -e "s/^seeds *=.*/seeds = \\"$SEEDS\\"/" ~/.canine/config/config.toml\n')),(0,a.kt)("p",null,"As a validator, you'll need to set a minimum gas price like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'GAS="0.002ujkl"\nsed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \\"$GAS\\"/" $HOME/.canine/config/app.toml\n')))}u.isMDXComponent=!0}}]);