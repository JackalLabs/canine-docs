"use strict";(self.webpackChunkcanine_docs=self.webpackChunkcanine_docs||[]).push([[92],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8348:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:2},o="Installing Canined",l={unversionedId:"nodes/nodes/installation",id:"nodes/nodes/installation",title:"Installing Canined",description:"Pre-Requisites",source:"@site/docs/nodes/nodes/2_installation.md",sourceDirName:"nodes/nodes",slug:"/nodes/nodes/installation",permalink:"/docs/nodes/nodes/installation",draft:!1,editUrl:"https://github.com/JackalLabs/canine-docs/blob/master/docs/nodes/nodes/2_installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Hardware",permalink:"/docs/nodes/nodes/hardware"},next:{title:"Joining Testnet",permalink:"/docs/nodes/nodes/testnet"}},s={},c=[{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"Firewall Configuration",id:"firewall-configuration",level:3},{value:"Creating a Service",id:"creating-a-service",level:3},{value:"Building from Source",id:"building-from-source",level:2}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-canined"},"Installing Canined"),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-Requisites"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/nodes/install"},"Set-up"),"."),(0,a.kt)("h3",{id:"firewall-configuration"},"Firewall Configuration"),(0,a.kt)("p",null,"Configure UFW to only accept traffic on ports we use."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ufw limit ssh/tcp comment 'Rate limit for openssh server'\nufw default deny incoming\nufw default allow outgoing\nufw allow 26656/tcp comment 'JACKAL - Cosmos SDK/Tendermint P2P'\nufw allow 26657/tcp comment 'JACKAL - Cosmos SDK/Tendermint P2P'\nufw enable\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Perform the next follow steps as your ",(0,a.kt)("inlineCode",{parentName:"p"},"jackal")," user with 'sudo' permissions ")),(0,a.kt)("h3",{id:"creating-a-service"},"Creating a Service"),(0,a.kt)("p",null,"You may want the daemon to run without you needing to supervise it. To turn the executable into a service follow these steps."),(0,a.kt)("p",null,"First create the service file ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/canined.service")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano /etc/systemd/system/canined.service\n")),(0,a.kt)("p",null,"Copy and paste the follow into the service file: (you may need to edit it if you've set a custom home directory location)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"[Unit]\nDescription=Jackal Validator\nAfter=network.target\n\n[Service]\nGroup=jackal\nUser=jackal\nWorkingDirectory=/home/jackal\nExecStart=/home/jackal/go/bin/canined start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=8192\n\n[Install]\nWantedBy=multi-user.target\n")),(0,a.kt)("p",null,"Update systemd and enable the service file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\nsudo systemctl enable canined.service\n")),(0,a.kt)("h2",{id:"building-from-source"},"Building from Source"),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<VERSION>")," with the current running version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/JackalLabs/canine-chain.git\ncd canine-chain\ngit fetch -a\ngit checkout <VERSION>\n\nmake install\n")),(0,a.kt)("p",null,"From there you will be able to use ",(0,a.kt)("inlineCode",{parentName:"p"},"canined"),", ex:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"canined version\n")))}d.isMDXComponent=!0}}]);