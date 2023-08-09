"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[50813],{56105:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const c={id:"account-delete",title:"Account Delete",pagination_label:"Account Delete",sidebar_label:"Account Delete",keywords:["connectivity","connectors","account delete"],description:"Remove account from a source.",slug:"/docs/saas-connectivity/commands/account-delete",tags:["Connectivity","Connector Command"]},i=void 0,r={unversionedId:"docs/identity-now/saas-connectivity/connector-commands/account-delete",id:"docs/identity-now/saas-connectivity/connector-commands/account-delete",title:"Account Delete",description:"Remove account from a source.",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-commands/account-delete.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-commands",slug:"/docs/saas-connectivity/commands/account-delete",permalink:"/idn/docs/saas-connectivity/commands/account-delete",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-commands/account-delete.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"},{label:"Connector Command",permalink:"/idn/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1691598377,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{id:"account-delete",title:"Account Delete",pagination_label:"Account Delete",sidebar_label:"Account Delete",keywords:["connectivity","connectors","account delete"],description:"Remove account from a source.",slug:"/docs/saas-connectivity/commands/account-delete",tags:["Connectivity","Connector Command"]},sidebar:"idnDocs",previous:{title:"Account Create",permalink:"/idn/docs/saas-connectivity/commands/account-create"},next:{title:"Account Discover",permalink:"/idn/docs/saas-connectivity/commands/account-discover"}},s={},l=[{value:"Example StdAccountDeleteInput",id:"example-stdaccountdeleteinput",level:3},{value:"Example StdAccountDeleteOutput",id:"example-stdaccountdeleteoutput",level:3},{value:"Description",id:"description",level:2}],d={toc:l};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Input"),(0,o.kt)("td",{parentName:"tr",align:"center"},"StdAccountDeleteInput")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Output"),(0,o.kt)("td",{parentName:"tr",align:"center"},"StdAccountDeleteOutput")))),(0,o.kt)("h3",{id:"example-stdaccountdeleteinput"},"Example StdAccountDeleteInput"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"example-stdaccountdeleteoutput"},"Example StdAccountDeleteOutput"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n}\n")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The account delete command sends one attribute from IDN, the identity to delete. This can be passed to your connector to delete the account from the source system."),(0,o.kt)("p",null,"Enable account delete in IDN through a BeforeProvisioning rule. The connector honors whichever operation the provisioning plan sends. For more information, see the ",(0,o.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/t5/IdentityNow-Articles/IdentityNow-Rule-Guide/ta-p/76665"},"documentation")," and an ",(0,o.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/t5/IdentityNow-Wiki/IdentityNow-Rule-Guide-Before-Provisioning-Rule/ta-p/77415"},"example implementation"),"."),(0,o.kt)("p",null,"The following snippet shows an example of account delete command implementation:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts"},"index.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},".stdAccountDelete(async (context: Context, input: StdAccountDeleteInput, res: Response<StdAccountDeleteOutput>) => {\n    const account = await airtable.getAccount(input.key)\n    res.send(await airtable.deleteAccount(account.airtableId))\n})\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts"},"airtable.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"async deleteAccount(airTableid: string): Promise<Record<string, never>> {\n    return this.airTableBase('Users').destroy(airTableid,\n    ).then(() => {\n        return {}\n    }).catch(err => {\n        throw new ConnectorError('error while deleting account: ' + err)\n    })\n}\n")))}u.isMDXComponent=!0}}]);