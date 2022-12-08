"use strict";(self.webpackChunkcanine_docs=self.webpackChunkcanine_docs||[]).push([[7026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},a="Creating Provider",s={unversionedId:"nodes/providers/building",id:"nodes/providers/building",title:"Creating Provider",description:"Disclaimer",source:"@site/docs/nodes/providers/1_building.md",sourceDirName:"nodes/providers",slug:"/nodes/providers/building",permalink:"/docs/nodes/providers/building",draft:!1,editUrl:"https://github.com/JackalLabs/canine-docs/blob/master/docs/nodes/providers/1_building.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Creating Validator",permalink:"/docs/nodes/validators/joining"},next:{title:"Setting Up JProvd",permalink:"/docs/nodes/providers/setting_up"}},l={},d=[{value:"Disclaimer",id:"disclaimer",level:2},{value:"Networking",id:"networking",level:2},{value:"Setting up ZFS Without Mirroring",id:"setting-up-zfs-without-mirroring",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-provider"},"Creating Provider"),(0,i.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,i.kt)("p",null,"This guide assumes you either have access to a full node over a network connection or are using the same machine as the full node."),(0,i.kt)("h2",{id:"networking"},"Networking"),(0,i.kt)("p",null,"To allow your provider to be used by the Jackal Protocol Dashboard, please ensure you have a reverse proxy system setup and have a registered domain name pointing to your provider. We recommend using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/"},"Nginx"),"."),(0,i.kt)("p",null,"If you have UPNP enabled on your router, your provider will be open to the internet by default at port ",(0,i.kt)("inlineCode",{parentName:"p"},"3333"),". You can find the address it can be connected to by running ",(0,i.kt)("inlineCode",{parentName:"p"},"canined network ip"),"."),(0,i.kt)("h2",{id:"setting-up-zfs-without-mirroring"},"Setting up ZFS Without Mirroring"),(0,i.kt)("p",null,"Setting up ZFS allows us to combine multiple drives together, in this case we are merging two drives. We don't recommend you only merge drives with striping and instead we recommend mirroring. However mirroring is a longer process and different for each configuration. In our case, this machine is only running with 24TB across 2 drives. We are less concerned about a drive failing as that would wipe half our storage anyways."),(0,i.kt)("p",null,"List all drives with :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo fdisk -l\n")),(0,i.kt)("p",null,"You should end up seeing something like this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"...\n\nDisk /dev/sda: 12.75 TiB, 14000519643136 bytes, 27344764928 sectors\nDisk model: ST14000NM001G-2K\nUnits: sectors of 1 * 512 = 512 bytes\nSector size (logical/physical): 512 bytes / 4096 bytes\nI/O size (minimum/optimal): 4096 bytes / 4096 bytes\nDisklabel type: gpt\nDisk identifier: 4DE192A1-7AFF-F64D-93D5-CA48B806DAA0\n\nDisk /dev/sdb: 12.75 TiB, 14000519643136 bytes, 27344764928 sectors\nDisk model: ST14000NM001G-2K\nUnits: sectors of 1 * 512 = 512 bytes\nSector size (logical/physical): 512 bytes / 4096 bytes\nI/O size (minimum/optimal): 4096 bytes / 4096 bytes\nDisklabel type: gpt\nDisk identifier: D2827F71-7F0A-EE4A-BB12-1B2172641DBE\n\n...\n")),(0,i.kt)("p",null,"Note down the Disk paths that you wish to use for your storage provider, in this case it is ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/sdb")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/sda"),". Now we create a new pool as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo zpool create {pool-name} /dev/sdb /dev/sda ...\n")),(0,i.kt)("p",null,"This folder will now have the drives mounted at ",(0,i.kt)("inlineCode",{parentName:"p"},"/{pool-name}"),". For more in-depth guides to using zfs, check out ",(0,i.kt)("a",{parentName:"p",href:"https://zfsonlinux.org/"},"this page"),"."))}c.isMDXComponent=!0}}]);