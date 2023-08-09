"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[18635],{25765:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>b,toc:()=>y});var i=a(87462),s=(a(67294),a(3905)),r=a(26389),l=a(94891),o=a(75190),n=a(47507),p=a(24310),d=a(63303),m=(a(75035),a(85162));const c={id:"get-user",sidebar_label:"Find user by id",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getUser",description:"Info for a specific user",tags:["Users"],parameters:[{name:"id",in:"path",description:"ID of the object to retrieve or update",required:!0,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}],responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{user:{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readonly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"The uid",type:"string",minLength:32,maxLength:32,readonly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},name:{description:"The name",type:"string",example:"bob"},email:{description:"The email",type:"string",format:"email",example:"example@sailpoint.com"},type:{description:"The type",type:"string",enum:["NeprofileUser","NeaccessUser"],default:"NeprofileUser",example:"NeprofileUser"},title:{description:"The title",type:"string",example:"mytitle"},status:{description:"The status",type:"string",enum:["Active","Disabled"],example:"Active"},login:{description:"The login",type:"string",example:"bob"},last_login:{description:"The last login time",type:"string",format:"date-time",readOnly:!0,example:"2023-05-01T09:12:28Z"},cookies_accepted_at:{description:"The time the cookies were accepted at",type:"string",format:"date-time",readOnly:!0,example:"2023-05-01T09:12:28Z"},preferred_language:{description:"The preferred language",type:"string",example:"en-US"}}}}}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"get",path:"/users/{id}",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Find user by id",description:{content:"Info for a specific user",type:"text/plain"},url:{path:["users",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of the object to retrieve or update",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find user by id' (get-user)"},u=void 0,b={unversionedId:"api/get-user",id:"api/get-user",title:"get-user",description:"Find user by id",source:"@site/products/nerm/api/get-user.api.mdx",sourceDirName:"api",slug:"/api/get-user",permalink:"/nerm/api/get-user",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find user by id' (get-user)",tags:[],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1691598377,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{id:"get-user",sidebar_label:"Find user by id",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getUser",description:"Info for a specific user",tags:["Users"],parameters:[{name:"id",in:"path",description:"ID of the object to retrieve or update",required:!0,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}],responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{user:{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readonly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"The uid",type:"string",minLength:32,maxLength:32,readonly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},name:{description:"The name",type:"string",example:"bob"},email:{description:"The email",type:"string",format:"email",example:"example@sailpoint.com"},type:{description:"The type",type:"string",enum:["NeprofileUser","NeaccessUser"],default:"NeprofileUser",example:"NeprofileUser"},title:{description:"The title",type:"string",example:"mytitle"},status:{description:"The status",type:"string",enum:["Active","Disabled"],example:"Active"},login:{description:"The login",type:"string",example:"bob"},last_login:{description:"The last login time",type:"string",format:"date-time",readOnly:!0,example:"2023-05-01T09:12:28Z"},cookies_accepted_at:{description:"The time the cookies were accepted at",type:"string",format:"date-time",readOnly:!0,example:"2023-05-01T09:12:28Z"},preferred_language:{description:"The preferred language",type:"string",example:"en-US"}}}}}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"get",path:"/users/{id}",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Find user by id",description:{content:"Info for a specific user",type:"text/plain"},url:{path:["users",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of the object to retrieve or update",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find user by id' (get-user)"},sidebar:"nermOpenApiSidebar",previous:{title:"Update multiple users",permalink:"/nerm/api/patch-users"},next:{title:"Update a user by id",permalink:"/nerm/api/patch-user"}},h={},y=[{value:"Find user by id",id:"find-user-by-id",level:2}],g={toc:y};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"find-user-by-id"},"Find user by id"),(0,s.kt)("p",null,"Info for a specific user"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve or update",required:!0,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Expected response to a valid request")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"user"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"The id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:"The uid",schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:"The name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"email",required:!1,deprecated:void 0,schemaDescription:"The email",schemaName:"email",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:"The type",schemaName:"string",qualifierMessage:"**Possible values:** [`NeprofileUser`, `NeaccessUser`]",defaultValue:"NeprofileUser",mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"title",required:!1,deprecated:void 0,schemaDescription:"The title",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:"The status",schemaName:"string",qualifierMessage:"**Possible values:** [`Active`, `Disabled`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"login",required:!1,deprecated:void 0,schemaDescription:"The login",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"last_login",required:!1,deprecated:void 0,schemaDescription:"The last login time",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"cookies_accepted_at",required:!1,deprecated:void 0,schemaDescription:"The time the cookies were accepted at",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"preferred_language",required:!1,deprecated:void 0,schemaDescription:"The preferred language",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "user": {\n    "id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n    "uid": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n    "name": "bob",\n    "email": "example@sailpoint.com",\n    "type": "NeprofileUser",\n    "title": "mytitle",\n    "status": "Active",\n    "login": "bob",\n    "last_login": "2023-05-01T09:12:28Z",\n    "cookies_accepted_at": "2023-05-01T09:12:28Z",\n    "preferred_language": "en-US"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request - unable to complete.")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(p.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,s.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(p.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"errors",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "error": "Invalid JSON syntax. Please check your syntax and try again."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"A message describing the error",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);