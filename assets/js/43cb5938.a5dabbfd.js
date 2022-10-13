"use strict";(self.webpackChunkaccessibleappskit_docs=self.webpackChunkaccessibleappskit_docs||[]).push([[1963],{1838:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>r});var n=s(7462),i=(s(7294),s(3905));s(1839);const c={title:"FluentUI System Icons",description:"",date:new Date("2022-09-23T00:37:28.709Z"),preview:"",draft:!1,tags:["Icons","Fluent UI"],categories:["Icon Sets"],sidebar_position:3,slug:"fluentui-system-icons",displayed_sidebar:"iconsSideBar"},o="Loading Fluent UI System Icons",l={unversionedId:"icons/fluentui-system-icons",id:"icons/fluentui-system-icons",title:"FluentUI System Icons",description:"",source:"@site/docs/icons/fluentui-system-icons.md",sourceDirName:"icons",slug:"/icons/fluentui-system-icons",permalink:"/AccessibleAppsKit-Docs/docs/icons/fluentui-system-icons",draft:!1,tags:[{label:"Icons",permalink:"/AccessibleAppsKit-Docs/docs/tags/icons"},{label:"Fluent UI",permalink:"/AccessibleAppsKit-Docs/docs/tags/fluent-ui"}],version:"current",sidebarPosition:3,frontMatter:{title:"FluentUI System Icons",description:"",date:"2022-09-23T00:37:28.709Z",preview:"",draft:!1,tags:["Icons","Fluent UI"],categories:["Icon Sets"],sidebar_position:3,slug:"fluentui-system-icons",displayed_sidebar:"iconsSideBar"},sidebar:"iconsSideBar",previous:{title:"Popular Icon Sets",permalink:"/AccessibleAppsKit-Docs/docs/category/popular-icon-sets"},next:{title:"Fluent UI Emoji",permalink:"/AccessibleAppsKit-Docs/docs/icons/fluentui-emoji"}},a={},r=[],p={toc:r};function u(e){let{components:t,...c}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"loading-fluent-ui-system-icons"},"Loading Fluent UI System Icons"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fluent UI System Icons",src:s(6854).Z,width:"1757",height:"1083"}),"\nClone the repository from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/fluentui-system-icons"},"Github")," in to the IconSets folder."),(0,i.kt)("p",null,"Run the following PowerShell script to create the Icons.csv."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-powershell"},'# Fluent UI - \n# Create CSV for Import from GitHub Repo\n# https://github.com/microsoft/fluentui-system-icons.git\n\n$counter = 1\n$setName = "fluentui-system-icons"\n$file = "./fluentui-system-icons.csv"\n$path = "./IconSets/fluentui-system-icons/assets/*.svg"\n\n$icons = get-childitem -File $path -recurse\nForEach($icon in $icons){\n    [string]$string = Get-Content $icon.FullName\n    $trimmedFileName = $icon.Name.Replace("ic_fluent","").Replace(".svg","").Split("_")\n    $splitNumber = $trimmedFileName.Count\n    $objResults = New-Object PSObject -Property @{\n        tm_id = $counter;\n        tm_name = $icon.Name.Replace("ic_","").Replace("_"," ").Replace(".svg","");\n        tm_icon = $string.Replace("""","\'");\n        tm_set = $setName\n        tm_description =  $trimmedFileName[$splitNumber -1]\n        tm_size =  $trimmedFileName[$splitNumber -2]\n    }\n    $counter++\n    $objResults | Export-CSV $file -Append -NoTypeInformation -force\n}\n')),(0,i.kt)("p",null,"Upload the created  ",(0,i.kt)("strong",{parentName:"p"},"icons.csv")," to OneDrive overwriting the existing file."),(0,i.kt)("p",null,"Open the Accessible Apps Kit and click on the settings icon in the top right-hand corner.\n",(0,i.kt)("img",{alt:"Open Icon Set Admin",src:s(2953).Z,width:"1756",height:"960"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Icon Set",src:s(7110).Z,width:"484",height:"1049"})))}u.isMDXComponent=!0},7110:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/create-icon-set-4c71e47de5dd9aceda1285fac279ffc3.png"},6854:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/fluentui-systems-icons-e146e4a8bde503e96cd737686ccea5c1.png"},2953:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/open-iconset-admin-8c6eb819acc5665d9d15d27ad0a302e8.png"}}]);