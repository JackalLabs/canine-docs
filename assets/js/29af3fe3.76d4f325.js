"use strict";(self.webpackChunkcanine_docs=self.webpackChunkcanine_docs||[]).push([[92],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="Installing Canined",l={unversionedId:"nodes/nodes/installation",id:"nodes/nodes/installation",title:"Installing Canined",description:"Pre-Requisites",source:"@site/docs/nodes/nodes/2_installation.md",sourceDirName:"nodes/nodes",slug:"/nodes/nodes/installation",permalink:"/docs/nodes/nodes/installation",draft:!1,editUrl:"https://github.com/JackalLabs/canine-docs/blob/master/docs/nodes/nodes/2_installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Hardware",permalink:"/docs/nodes/nodes/hardware"},next:{title:"Joining Testnet",permalink:"/docs/nodes/nodes/testnet"}},s={},c=[{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"Firewall Configuration",id:"firewall-configuration",level:3},{value:"Create Jackal user",id:"create-jackal-user",level:3},{value:"Creating a Service",id:"creating-a-service",level:3},{value:"Building from Source",id:"building-from-source",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-canined"},"Installing Canined"),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/nodes/install"},"Set-up"),"."),(0,a.kt)("h3",{id:"firewall-configuration"},"Firewall Configuration"),(0,a.kt)("p",null,"Configure UFW to only accept traffic on ports we use."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ufw limit ssh/tcp comment 'Rate limit for openssh server'\nufw default deny incoming\nufw default allow outgoing\nufw allow 26656/tcp comment 'JACKAL - Cosmos SDK/Tendermint P2P'\nufw enable\n")),(0,a.kt)("h3",{id:"create-jackal-user"},"Create Jackal user"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'sudo adduser --gecos "" jackal\n')),(0,a.kt)("h3",{id:"creating-a-service"},"Creating a Service"),(0,a.kt)("p",null,"You may want the daemon to run without you needing to supervise it. To turn the executable into a service follow these steps."),(0,a.kt)("p",null,"First create the service file ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/jackal.service")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano /etc/systemd/system/jackal.service\n")),(0,a.kt)("p",null,"Copy and paste the follow into the service file: (you may need to edit it if you've set a custom home directory location)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"[Unit]\nDescription=Jackal Validator\nAfter=network.target\n\n[Service]\nGroup=jackal\nUser=jackal\nWorkingDirectory=/home/jackal\nExecStart=/home/jackal/go/bin/canined start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=8192\n\n[Install]\nWantedBy=multi-user.target\n")),(0,a.kt)("p",null,"Update systemd and enable the service file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\nsudo systemctl enable canined.service\n")),(0,a.kt)("h2",{id:"building-from-source"},"Building from Source"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Perform the next follow steps as your ",(0,a.kt)("inlineCode",{parentName:"p"},"jackal")," user")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<VERSION>")," with the current running version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/JackalLabs/canine-chain.git\ncd canine-chain\ngit fetch -a\ngit checkout <VERSION>\n\nmake install\n")),(0,a.kt)("p",null,"From there you will be able to use ",(0,a.kt)("inlineCode",{parentName:"p"},"canined"),", ex:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"canined version\n")))}d.isMDXComponent=!0}}]);