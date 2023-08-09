"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[74857],{72969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"source-account-updated",title:"Source Account Updated",pagination_label:"Source Account Updated",sidebar_label:"Source Account Updated",sidebar_class_name:"sourceAccountUpdated",keywords:["event","trigger","source","account","updated","early access"],description:"Fires after a source account is updated.",pagination_next:"docs/identity-now/event-triggers/event-triggers",slug:"/docs/event-triggers/triggers/source-account-updated",tags:["Event Triggers","Early Access Event Triggers","Fire and Forget"]},o=void 0,c={unversionedId:"docs/identity-now/event-triggers/early-access/source-account-updated",id:"docs/identity-now/event-triggers/early-access/source-account-updated",title:"Source Account Updated",description:"Fires after a source account is updated.",source:"@site/products/idn/docs/identity-now/event-triggers/early-access/source-account-updated.md",sourceDirName:"docs/identity-now/event-triggers/early-access",slug:"/docs/event-triggers/triggers/source-account-updated",permalink:"/idn/docs/event-triggers/triggers/source-account-updated",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/early-access/source-account-updated.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"},{label:"Early Access Event Triggers",permalink:"/idn/tags/early-access-event-triggers"},{label:"Fire and Forget",permalink:"/idn/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1691598377,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{id:"source-account-updated",title:"Source Account Updated",pagination_label:"Source Account Updated",sidebar_label:"Source Account Updated",sidebar_class_name:"sourceAccountUpdated",keywords:["event","trigger","source","account","updated","early access"],description:"Fires after a source account is updated.",pagination_next:"docs/identity-now/event-triggers/event-triggers",slug:"/docs/event-triggers/triggers/source-account-updated",tags:["Event Triggers","Early Access Event Triggers","Fire and Forget"]},sidebar:"idnDocs",previous:{title:"Source Account Deleted",permalink:"/idn/docs/event-triggers/triggers/source-account-deleted"},next:{title:"Event Triggers",permalink:"/idn/docs/event-triggers"}},s={},d=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and links",id:"additional-information-and-links",level:2}],u={toc:d};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This is an early access event trigger. Please contact support to have it enabled in your tenant.")),(0,r.kt)("h2",{id:"event-context"},"Event Context"),(0,r.kt)("p",null,"Source Account Updated events occur whenever one or more account attributes change on a single account during an account aggregation operation. The trigger cannot determine whether the account update happened on a source or in IdentityNow. It omits events related to IdentityNow accounts, such as the IdentityNow Admin. The following actions are considered updates:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update account attributes"),(0,r.kt)("li",{parentName:"ul"},"Enable or disable an account"),(0,r.kt)("li",{parentName:"ul"},"Lock or unlock source accounts"),(0,r.kt)("li",{parentName:"ul"},"Change source account password")),(0,r.kt)("p",null,"Use this event trigger to watch for updates to accounts that add highly privileged access, such as an account that is granted privileged access on a sensitive source."),(0,r.kt)("p",null,"This is an example input from this trigger:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "b7264868-7201-415f-9118-b581d431c688",\n  "id": "ee769173319b41d19ccec35ba52f237b",\n  "nativeIdentifier": "E009",\n  "sourceId": "2c918082814e693601816e09471b29b6",\n  "sourceName": "Active Directory",\n  "identityId": "ee769173319b41d19ccec6c235423237b",\n  "identityName": "john.doe",\n  "attributes": {\n    "firstname": "John",\n    "lastname": "Doe",\n    "email": "john.doe@gmail.com",\n    "department": "Sales",\n    "displayName": "John Doe",\n    "created": "2020-04-27T16:48:33.597Z",\n    "employeeNumber": "E009",\n    "uid": "E009",\n    "inactive": "true",\n    "phone": null,\n    "identificationNumber": "E009"\n  }\n}\n')),(0,r.kt)("h2",{id:"additional-information-and-links"},"Additional Information and links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,r.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET"))))}l.isMDXComponent=!0}}]);