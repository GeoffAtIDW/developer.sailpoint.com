"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[19457],{86087:(t,A,e)=>{e.r(A),e.d(A,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var n=e(87462),i=(e(67294),e(3905));const s={id:"connector-spec-list",title:"List",pagination_label:"List",sidebar_label:"List",keywords:["connectivity","connectors","connector-spec","list"],description:"Details on using the list item",slug:"/docs/saas-connectivity/connector-spec/list",tags:["Connectivity","Connector Spec"]},o=void 0,c={unversionedId:"docs/identity-now/saas-connectivity/connector-spec/connector-spec-list",id:"docs/identity-now/saas-connectivity/connector-spec/connector-spec-list",title:"List",description:"Details on using the list item",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-spec/list.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-spec",slug:"/docs/saas-connectivity/connector-spec/list",permalink:"/idn/docs/saas-connectivity/connector-spec/list",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-spec/list.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"},{label:"Connector Spec",permalink:"/idn/tags/connector-spec"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1691598377,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{id:"connector-spec-list",title:"List",pagination_label:"List",sidebar_label:"List",keywords:["connectivity","connectors","connector-spec","list"],description:"Details on using the list item",slug:"/docs/saas-connectivity/connector-spec/list",tags:["Connectivity","Connector Spec"]},sidebar:"idnDocs",previous:{title:"Key Value",permalink:"/idn/docs/saas-connectivity/connector-spec/key-value"},next:{title:"Radio",permalink:"/idn/docs/saas-connectivity/connector-spec/radio"}},l={},r=[{value:"How to use the list type in the connector spec",id:"how-to-use-the-list-type-in-the-connector-spec",level:2},{value:"Example list item type",id:"example-list-item-type",level:3}],p={toc:r};function a(t){let{components:A,...s}=t;return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:A,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-to-use-the-list-type-in-the-connector-spec"},"How to use the list type in the connector spec"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," type to allow users to enter multiple items in a single entry box. "),(0,i.kt)("p",null,"This is an example implementation: "),(0,i.kt)("h3",{id:"example-list-item-type"},"Example list item type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "key": "entitlements",\n    "label": "Entitlements",\n    "type": "list",\n    "helpKey": "Add a list of entitlements to expose via your source"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"list input type",src:e(64691).Z,width:"731",height:"134"})))}a.isMDXComponent=!0},64691:(t,A,e)=>{e.d(A,{Z:()=>n});const n="data:image/png;base64,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"}}]);