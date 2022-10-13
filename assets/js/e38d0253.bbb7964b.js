"use strict";(self.webpackChunkaccessibleappskit_docs=self.webpackChunkaccessibleappskit_docs||[]).push([[814],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4722:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},i="Install Procedure",l={unversionedId:"getting-started/Installation",id:"getting-started/Installation",title:"Install Procedure",description:"1. Configure the Power Platform Environment for code components",source:"@site/docs/getting-started/Installation.md",sourceDirName:"getting-started",slug:"/getting-started/Installation",permalink:"/AccessibleAppsKit-Docs/docs/getting-started/Installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"gettingStartedSideBar",previous:{title:"Welcome to the Accessible Apps Kit",permalink:"/AccessibleAppsKit-Docs/docs/getting-started/introduction"}},s={},p=[],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-procedure"},"Install Procedure"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the Power Platform Environment for code components")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the Creator Kit - requires August 2022 release pre-installed."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/power-platform/guidance/creator-kit/overview"},"Get the Creator Kit Here")),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"September 2022 creator kit may fail to install if the August release is not installed first."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the latest managed solution zip file from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Trustmarque/Accessible-Apps-Kit/releases"},"Accessible Apps Kit GitHub Releases Page")," should be called something like this: ",(0,a.kt)("inlineCode",{parentName:"p"},"AccessibleAppsKit_1.0.20221013.1.zip"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import the Accessible Apps Kit solution to an environment with Dataverse database enabled"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Import Solution",src:r(9312).Z,width:"1980",height:"1080"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy the empty ",(0,a.kt)("inlineCode",{parentName:"p"},"icons.csv")," to OneDrive.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the Dataflow"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Configure Dataflow",src:r(318).Z,width:"1980",height:"1080"})))}u.isMDXComponent=!0},318:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/configure-dataflow-4201bdf56797384bbbb4f4f4df5e6cf6.gif"},9312:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/import-solution-3973e516785bfbc14f944a093846a5a6.gif"}}]);