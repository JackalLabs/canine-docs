"use strict";(self.webpackChunkcanine_docs=self.webpackChunkcanine_docs||[]).push([[298],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),y=i,f=d["".concat(c,".").concat(y)]||d[y]||h[y]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5639:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:2},a="Encryption",s={unversionedId:"protocol/encryption",id:"protocol/encryption",title:"Encryption",description:"Jackal has two main features that rely on encryption techniques to keep user data private and secure. The two main models are file encryption and file-entry encryption. These reside in different locations within the protocol. The files themselves are stored on Storage Providers, which require files to be encrypted before they are transferred to those machines. The file entries are data structures living directly on-chain in the File Tree blockchain module, again needing to be encrypted on the client's device before being sent to the blockchain. The file encryption model is simply performed by taking the file as raw bytes and randomly generating a key in the user's client. This key is called a Symmetric Key. We then pass both the key and the file through AES256 encryption, which results in an encrypted file that can safely be sent to the Storage-Providers.",source:"@site/docs/protocol/encryption.md",sourceDirName:"protocol",slug:"/protocol/encryption",permalink:"/docs/protocol/encryption",draft:!1,editUrl:"https://github.com/JackalLabs/canine-docs/blob/master/docs/protocol/encryption.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tokens",permalink:"/docs/protocol/tokens"},next:{title:"Overview",permalink:"/docs/protocol/storageproviders/overview"}},c={},l=[],p={toc:l};function h(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"encryption"},"Encryption"),(0,i.kt)("p",null,"Jackal has two main features that rely on encryption techniques to keep user data private and secure. The two main models are file encryption and file-entry encryption. These reside in different locations within the protocol. The files themselves are stored on Storage Providers, which require files to be encrypted before they are transferred to those machines. The file entries are data structures living directly on-chain in the File Tree blockchain module, again needing to be encrypted on the client's device before being sent to the blockchain. The file encryption model is simply performed by taking the file as raw bytes and randomly generating a key in the user's client. This key is called a Symmetric Key. We then pass both the key and the file through AES256 encryption, which results in an encrypted file that can safely be sent to the Storage-Providers."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Protocol Overview",src:r(5399).Z,width:"482",height:"302"})),(0,i.kt)("p",null,"What is done with this key is equally important as the encryption performed on the file; if the key were made public, all encryption on the file itself would be naught. Therefore, we need to store this key somewhere safe and immutable. This safe place is the Jackal Chain, specifically the File Tree Module. The key is stored in the encrypted form alongside the file's location to make mapping each key to its respective file easy. To get this key into its encrypted form, we use an Integrated Encryption Scheme based on AES and the Elliptic Curve used to generate Bech32 Addresses ","[Reference]",". To do this, the protocol takes a user's public key and encrypts the private key with it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Protocol Overview",src:r(8562).Z,width:"467",height:"242"})),(0,i.kt)("p",null,"After this, the protocol ends up with an encrypted key that only the user whose public key was used can decrypt. When looking to decrypt a file, the process is reversed and instead uses the user's private key to decrypt the symmetric key. Following the retrieval of the symmetric key, we can decrypt the file stored on the Storage-Providers, leaving us with the originaly uploaded file."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Protocol Overview",src:r(9572).Z,width:"762",height:"322"})),(0,i.kt)("p",null,"When sharing files, we can semi-repeat this process by first decrypting the key from the chain. Then we can grab the public key of an external user from the chain itself and encrypt the files with that key instead of our own. Finally, we append the newly encrypted symmetric key to the file entry giving that user access to the key."))}h.isMDXComponent=!0},5399:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/enc1-a5bf8bd57de61c12dd33f5f71acf6d2b.png"},8562:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/enc2-301650ee7a3ebf09db7d546400ff51e1.png"},9572:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/enc3-cd67943d1c117087b30355af9d5994eb.png"}}]);