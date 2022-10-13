"use strict";(self.webpackChunkaccessibleappskit_docs=self.webpackChunkaccessibleappskit_docs||[]).push([[963],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var s=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=s.createContext({}),l=function(e){var t=s.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return s.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(a,".").concat(d)]||m[d]||u[d]||r;return n?s.createElement(f,o(o({ref:t},p),{},{components:n})):s.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(7462),i=(n(7294),n(3905));const r={title:"FluentUI System Icons",description:"",date:new Date("2022-09-23T00:37:28.709Z"),preview:"",draft:!1,tags:["Icons","Fluent UI"],categories:["Icon Sets"],sidebar_position:3,slug:"fluentui-system-icons",displayed_sidebar:"iconsSideBar"},o="Loading Fluent UI System Icons",c={unversionedId:"icons/fluentui-system-icons",id:"icons/fluentui-system-icons",title:"FluentUI System Icons",description:"",source:"@site/docs/icons/fluentui-system-icons.md",sourceDirName:"icons",slug:"/icons/fluentui-system-icons",permalink:"/AccessibleAppsKit-Docs/docs/icons/fluentui-system-icons",draft:!1,tags:[{label:"Icons",permalink:"/AccessibleAppsKit-Docs/docs/tags/icons"},{label:"Fluent UI",permalink:"/AccessibleAppsKit-Docs/docs/tags/fluent-ui"}],version:"current",sidebarPosition:3,frontMatter:{title:"FluentUI System Icons",description:"",date:"2022-09-23T00:37:28.709Z",preview:"",draft:!1,tags:["Icons","Fluent UI"],categories:["Icon Sets"],sidebar_position:3,slug:"fluentui-system-icons",displayed_sidebar:"iconsSideBar"},sidebar:"iconsSideBar",previous:{title:"Popular Icon Sets",permalink:"/AccessibleAppsKit-Docs/docs/category/popular-icon-sets"},next:{title:"Fluent UI Emoji",permalink:"/AccessibleAppsKit-Docs/docs/icons/fluentui-emoji"}},a={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"loading-fluent-ui-system-icons"},"Loading Fluent UI System Icons"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fluent UI System Icons",src:n(1714).Z,width:"1757",height:"1083"}),"\nClone the repository from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/fluentui-system-icons"},"Github")," in to the IconSets folder."),(0,i.kt)("p",null,"Run the following PowerShell script to create the Icons.csv."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'# Fluent UI - \n# Create CSV for Import from GitHub Repo\n# https://github.com/microsoft/fluentui-system-icons.git\n\n$counter = 1\n$setName = "fluentui-system-icons"\n$file = "./fluentui-system-icons.csv"\n$path = "./IconSets/fluentui-system-icons/assets/*.svg"\n\n$icons = get-childitem -File $path -recurse\nForEach($icon in $icons){\n    [string]$string = Get-Content $icon.FullName\n    $trimmedFileName = $icon.Name.Replace("ic_fluent","").Replace(".svg","").Split("_")\n    $splitNumber = $trimmedFileName.Count\n    $objResults = New-Object PSObject -Property @{\n        tm_id = $counter;\n        tm_name = $icon.Name.Replace("ic_","").Replace("_"," ").Replace(".svg","");\n        tm_icon = $string.Replace("""","\'");\n        tm_set = $setName\n        tm_description =  $trimmedFileName[$splitNumber -1]\n        tm_size =  $trimmedFileName[$splitNumber -2]\n    }\n    $counter++\n    $objResults | Export-CSV $file -Append -NoTypeInformation -force\n}\n')),(0,i.kt)("p",null,"Upload the created  ",(0,i.kt)("strong",{parentName:"p"},"icons.csv")," to OneDrive overwriting the existing file."),(0,i.kt)("p",null,"Open the Accessible Apps Kit and click on the settings icon in the top right-hand corner.\n",(0,i.kt)("img",{alt:"Open Icon Set Admin",src:n(7622).Z,width:"1756",height:"960"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Icon Set",src:n(7671).Z,width:"484",height:"1049"})))}u.isMDXComponent=!0},7671:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/create-icon-set-4c71e47de5dd9aceda1285fac279ffc3.png"},1714:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/fluentui-systems-icons-e146e4a8bde503e96cd737686ccea5c1.png"},7622:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/open-iconset-admin-8c6eb819acc5665d9d15d27ad0a302e8.png"}}]);