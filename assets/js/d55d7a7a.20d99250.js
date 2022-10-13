"use strict";(self.webpackChunkaccessibleappskit_docs=self.webpackChunkaccessibleappskit_docs||[]).push([[838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),m=o,u=g["".concat(s,".").concat(m)]||g[m]||d[m]||r;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={title:"Google Material Design",description:"",date:new Date("2022-09-23T00:37:28.709Z"),preview:"",draft:!1,tags:["Icons","Google","Material Design","Icons"],categories:["Icon Sets"],sidebar_position:4,displayed_sidebar:"iconsSideBar"},i="Loading Google Material Design Icons",l={unversionedId:"icons/google-material-design",id:"icons/google-material-design",title:"Google Material Design",description:"",source:"@site/docs/icons/google-material-design.md",sourceDirName:"icons",slug:"/icons/google-material-design",permalink:"/AccessibleAppsKit-Docs/docs/icons/google-material-design",draft:!1,tags:[{label:"Icons",permalink:"/AccessibleAppsKit-Docs/docs/tags/icons"},{label:"Google",permalink:"/AccessibleAppsKit-Docs/docs/tags/google"},{label:"Material Design",permalink:"/AccessibleAppsKit-Docs/docs/tags/material-design"}],version:"current",sidebarPosition:4,frontMatter:{title:"Google Material Design",description:"",date:"2022-09-23T00:37:28.709Z",preview:"",draft:!1,tags:["Icons","Google","Material Design","Icons"],categories:["Icon Sets"],sidebar_position:4,displayed_sidebar:"iconsSideBar"},sidebar:"iconsSideBar",previous:{title:"Fluent UI Emoji",permalink:"/AccessibleAppsKit-Docs/docs/icons/fluentui-emoji"}},s={},c=[{value:"Create the Icons.csv file",id:"create-the-iconscsv-file",level:2},{value:"Upload the Icons.csv file",id:"upload-the-iconscsv-file",level:2},{value:"Create the Icon Set in the App",id:"create-the-icon-set-in-the-app",level:2},{value:"Create Icon Color Transforms",id:"create-icon-color-transforms",level:2},{value:"View transformed icons",id:"view-transformed-icons",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"loading-google-material-design-icons"},"Loading Google Material Design Icons"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New Icon Set",src:n(2589).Z,width:"1758",height:"960"})),(0,o.kt)("p",null,"Open a folder where you want to download to, and use the command ",(0,o.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/google/material-design-icons")," (you will need Git installed.)"),(0,o.kt)("h2",{id:"create-the-iconscsv-file"},"Create the Icons.csv file"),(0,o.kt)("p",null,"Once you have cloned the repository run the following Power Shell to create the ",(0,o.kt)("strong",{parentName:"p"},"Icons.CSV")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},'# Material Design - \n# Create CSV for Import from GitHub Repo\n# https://github.com/google/material-design-icons\n\n$counter = 1\n$setName = "google-material-design"\n$file = "H:\\Trustmarque\\accessible-app-kit\\IconSets\\material-design-icons\\icons.csv"\n$path = "H:\\Trustmarque\\accessible-app-kit\\IconSets\\material-design-icons\\src\\*.svg"\n\n\n$icons = get-childitem -File $path -recurse\nForEach($icon in $icons){\n    [string]$string = Get-Content $icon.FullName\n    $trimmedFileName = $icon.Name.Replace("materialicons_","").Replace(".svg","").Split("_")\n    $splitNumber = $trimmedFileName.Count\n    $objResults = New-Object PSObject -Property @{\n        tm_id = $counter;\n        tm_name = $icon.Name.Replace("materialicons","").Replace("_"," ").Replace(".svg","");\n        tm_icon = $string.Replace("""","\'");\n        tm_set = $setName.Replace("materialicons","")\n        tm_description =  $trimmedFileName[$splitNumber -2].Replace("materialicons","")\n        tm_size =  $trimmedFileName[$splitNumber -1].Replace("px","")\n    }\n    $counter++\n    $objResults | Export-CSV $file -Append -NoTypeInformation -force\n}\n\n')),(0,o.kt)("h2",{id:"upload-the-iconscsv-file"},"Upload the Icons.csv file"),(0,o.kt)("p",null,"Upload the ",(0,o.kt)("inlineCode",{parentName:"p"},"icons.csv")," to the location you configured the Dataflow to use, overwriting the existing file."),(0,o.kt)("h2",{id:"create-the-icon-set-in-the-app"},"Create the Icon Set in the App"),(0,o.kt)("p",null,"In the app on the home screen click the settings icon in the top right to Navigate to the 'Icon Set Admin Screen', click the ",(0,o.kt)("inlineCode",{parentName:"p"},"+ New Icon Set")," button and complete the form as follows:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Column Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Name"),(0,o.kt)("td",{parentName:"tr",align:null},"Google Material Design")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ShortCode"),(0,o.kt)("td",{parentName:"tr",align:null},"google-material-design")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Author"),(0,o.kt)("td",{parentName:"tr",align:null},"Google")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Github Link"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/google/material-design-icons"},"https://github.com/google/material-design-icons"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Icon SVG"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<svg viewBox='0 0 24 24' width='24' height='24' xmlns='http://www.w3.org/2000/svg'>  <g transform='matrix(1, 0, 0, 1, 27.009001, -39.238998)'><path fill='#4285F4' d='M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z'/> <path fill='#34A853' d='M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z'/><path fill='#FBBC05' d='M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z'/><path fill='#EA4335' d='M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z'/></g></svg>"))))),(0,o.kt)("p",null,"Click OK, once the Icon Set is saved the Power Automate flow will trigger a refresh of the dataflow loading the icons into the Dataverse."),(0,o.kt)("h2",{id:"create-icon-color-transforms"},"Create Icon Color Transforms"),(0,o.kt)("p",null,"To get the Iconography Workbench to color the icons, the following transforms need to be created."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"New Icon Set",src:n(1552).Z,width:"1934",height:"1208"})),(0,o.kt)("p",null,"To create a new transform, on the ",(0,o.kt)("strong",{parentName:"p"},"Icon Set Administration Screen")," click on Edit on the set you have just added.\n",(0,o.kt)("img",{alt:"icon-set-edit",src:n(7566).Z,width:"1975",height:"1078"})),(0,o.kt)("p",null,"On the ",(0,o.kt)("strong",{parentName:"p"}," Icon Set Edit Screen")," click on ",(0,o.kt)("strong",{parentName:"p"},"+ Add Transform")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"icon-set-transform",src:n(5647).Z,width:"1910",height:"1043"})),(0,o.kt)("p",null,"Add the following transforms:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Transfrom from"),(0,o.kt)("th",{parentName:"tr",align:null},"Transfrom to"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rect h"),(0,o.kt)("td",{parentName:"tr",align:null},"rect fill='{{IconColor}}' h")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"circle cx"),(0,o.kt)("td",{parentName:"tr",align:null},"circle fill='{{IconColor}} cx'")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"#135100"),(0,o.kt)("td",{parentName:"tr",align:null},"{{Color1}}")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"z'/>"),(0,o.kt)("td",{parentName:"tr",align:null},"z fill='{{IconColor}}' />")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"polygon"),(0,o.kt)("td",{parentName:"tr",align:null},"polygon fill= '{{IconColor}}'")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"opacity='.3'"),(0,o.kt)("td",{parentName:"tr",align:null},"opacity='.1'")))),(0,o.kt)("h2",{id:"view-transformed-icons"},"View transformed icons"),(0,o.kt)("p",null,"Navigate back to the Iconography Workbench and select Google Material Design in the Icon set gallery, select an icon and the colours will be changed, when you change the color of the icon, the icon will automatically be updated."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Google Icons",src:n(5573).Z,width:"1758",height:"960"})))}d.isMDXComponent=!0},1552:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/edit-google-material-design-c70a79674692d370a6715d6b4dd7f819.png"},2589:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/google-icon-set-aaf6c5060f5776c18b1bdcd732a7aed1.png"},5573:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/google-transformed-f760c17f36bd1449ad254915b83bc4dc.png"},7566:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/icon-set-edit-64dbd20c736bb0f681c29428557100c3.png"},5647:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/icon-set-transform-bbd485543c67780ce8ca2c577f72e324.png"}}]);