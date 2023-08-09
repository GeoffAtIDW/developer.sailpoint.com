"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[58684],{32510:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>_,frontMatter:()=>c,metadata:()=>b,toc:()=>y});var i=a(87462),r=(a(67294),a(3905)),s=a(26389),l=a(94891),o=a(75190),d=a(47507),p=a(24310),n=a(63303),m=(a(75035),a(85162));const c={id:"patch-profile",sidebar_label:"Update a profile by id",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"patchProfile",description:"Update a profile by id",tags:["Profiles"],parameters:[{name:"id",in:"path",description:"ID of the object to retrieve or update",required:!0,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{profile:{type:"object",properties:{name:{description:"the name",type:"string",example:"testprofile"},profile_type_id:{description:"The profile_type_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},status:{description:"The Status",type:"string",enum:["Active","Inactive","On Leave","Terminated"],example:"Active"},id_proofing_status:{description:"The id_proofing_status",type:"string",enum:["pending","pass","fail"],example:"pending"},archived:{description:"Return archived items",type:"boolean",default:!1,example:!1},attributes:{description:"The attributes",type:"object",additionalProperties:{type:"string"},example:{text_attribute_uid:"static text",date_attribute_uid:"01/15/2020",profile_select_attribute_uid:"Profile Name",multiple_profile_select_attribute_uid:"Profile Name,Second Profile Name,Third Profile Name",contributor_select_attribute_uid:"User Name",multiple_contributor_select_attribute_uid:"User Name,Second User Name,Third User Name"}}}}}}}}},responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{profile:{type:"object",properties:{id:{description:"the id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"the uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},name:{description:"the name",type:"string",example:"my profile"},profile_type_id:{description:"The profile type id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},status:{description:"the status",type:"string",enum:["Active","Inactive","On Leave","Terminated"],example:"Active"},id_proofing_status:{description:"the id profing status",type:"string",enum:["pending","pass","fail"],example:"pending"},created_at:{description:"the created at time",type:"string",format:"date-time",example:"2023-05-01T09:12:28Z"},updated_at:{description:"the updated at time",type:"string",format:"date-time",example:"2023-05-01T09:12:28Z"},attributes:{description:"the attributes",type:"object",additionalProperties:{type:"string"},example:{text_attribute_uid:"static text",date_attribute_uid:"01/15/2020",profile_select_attribute_uid:"Profile Name",multiple_profile_select_attribute_uid:"Profile Name,Second Profile Name,Third Profile Name",contributor_select_attribute_uid:"User Name",multiple_contributor_select_attribute_uid:"User Name,Second User Name,Third User Name"}}}}}}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"patch",path:"/profiles/{id}",jsonRequestBodyExample:{profile:{name:"testprofile",profile_type_id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",status:"Active",id_proofing_status:"pending",archived:!1,attributes:{text_attribute_uid:"static text",date_attribute_uid:"01/15/2020",profile_select_attribute_uid:"Profile Name",multiple_profile_select_attribute_uid:"Profile Name,Second Profile Name,Third Profile Name",contributor_select_attribute_uid:"User Name",multiple_contributor_select_attribute_uid:"User Name,Second User Name,Third User Name"}}},info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Update a profile by id",description:{content:"Update a profile by id",type:"text/plain"},url:{path:["profiles",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of the object to retrieve or update",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update a profile by id' (patch-profile)"},u=void 0,b={unversionedId:"api/patch-profile",id:"api/patch-profile",title:"patch-profile",description:"Update a profile by id",source:"@site/products/nerm/api/patch-profile.api.mdx",sourceDirName:"api",slug:"/api/patch-profile",permalink:"/nerm/api/patch-profile",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update a profile by id' (patch-profile)",tags:[],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1691598377,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{id:"patch-profile",sidebar_label:"Update a profile by id",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"patchProfile",description:"Update a profile by id",tags:["Profiles"],parameters:[{name:"id",in:"path",description:"ID of the object to retrieve or update",required:!0,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{profile:{type:"object",properties:{name:{description:"the name",type:"string",example:"testprofile"},profile_type_id:{description:"The profile_type_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},status:{description:"The Status",type:"string",enum:["Active","Inactive","On Leave","Terminated"],example:"Active"},id_proofing_status:{description:"The id_proofing_status",type:"string",enum:["pending","pass","fail"],example:"pending"},archived:{description:"Return archived items",type:"boolean",default:!1,example:!1},attributes:{description:"The attributes",type:"object",additionalProperties:{type:"string"},example:{text_attribute_uid:"static text",date_attribute_uid:"01/15/2020",profile_select_attribute_uid:"Profile Name",multiple_profile_select_attribute_uid:"Profile Name,Second Profile Name,Third Profile Name",contributor_select_attribute_uid:"User Name",multiple_contributor_select_attribute_uid:"User Name,Second User Name,Third User Name"}}}}}}}}},responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{profile:{type:"object",properties:{id:{description:"the id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"the uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},name:{description:"the name",type:"string",example:"my profile"},profile_type_id:{description:"The profile type id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},status:{description:"the status",type:"string",enum:["Active","Inactive","On Leave","Terminated"],example:"Active"},id_proofing_status:{description:"the id profing status",type:"string",enum:["pending","pass","fail"],example:"pending"},created_at:{description:"the created at time",type:"string",format:"date-time",example:"2023-05-01T09:12:28Z"},updated_at:{description:"the updated at time",type:"string",format:"date-time",example:"2023-05-01T09:12:28Z"},attributes:{description:"the attributes",type:"object",additionalProperties:{type:"string"},example:{text_attribute_uid:"static text",date_attribute_uid:"01/15/2020",profile_select_attribute_uid:"Profile Name",multiple_profile_select_attribute_uid:"Profile Name,Second Profile Name,Third Profile Name",contributor_select_attribute_uid:"User Name",multiple_contributor_select_attribute_uid:"User Name,Second User Name,Third User Name"}}}}}}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"patch",path:"/profiles/{id}",jsonRequestBodyExample:{profile:{name:"testprofile",profile_type_id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",status:"Active",id_proofing_status:"pending",archived:!1,attributes:{text_attribute_uid:"static text",date_attribute_uid:"01/15/2020",profile_select_attribute_uid:"Profile Name",multiple_profile_select_attribute_uid:"Profile Name,Second Profile Name,Third Profile Name",contributor_select_attribute_uid:"User Name",multiple_contributor_select_attribute_uid:"User Name,Second User Name,Third User Name"}}},info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Update a profile by id",description:{content:"Update a profile by id",type:"text/plain"},url:{path:["profiles",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of the object to retrieve or update",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update a profile by id' (patch-profile)"},sidebar:"nermOpenApiSidebar",previous:{title:"Find profile by id",permalink:"/nerm/api/get-profile"},next:{title:"Retrieves the URL of an attachment attribute value from a profile",permalink:"/nerm/api/get-profile-upload"}},f={},y=[{value:"Update a profile by id",id:"update-a-profile-by-id",level:2}],h={toc:y};function _(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"update-a-profile-by-id"},"Update a profile by id"),(0,r.kt)("p",null,"Update a profile by id"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve or update",required:!0,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},mdxType:"ParamsItem"})))),(0,r.kt)(l.Z,{mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"profile"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:"the name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"profile_type_id",required:!1,deprecated:void 0,schemaDescription:"The profile_type_id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:"The Status",schemaName:"string",qualifierMessage:"**Possible values:** [`Active`, `Inactive`, `On Leave`, `Terminated`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"id_proofing_status",required:!1,deprecated:void 0,schemaDescription:"The id_proofing_status",schemaName:"string",qualifierMessage:"**Possible values:** [`pending`, `pass`, `fail`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"archived",required:!1,deprecated:void 0,schemaDescription:"Return archived items",schemaName:"boolean",qualifierMessage:void 0,defaultValue:!1,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"attributes"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"The attributes")),(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("code",null,"property name*"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))))))))))))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Expected response to a valid request")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(n.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"profile"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"the id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:"the uid",schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:"the name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"profile_type_id",required:!1,deprecated:void 0,schemaDescription:"The profile type id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:"the status",schemaName:"string",qualifierMessage:"**Possible values:** [`Active`, `Inactive`, `On Leave`, `Terminated`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"id_proofing_status",required:!1,deprecated:void 0,schemaDescription:"the id profing status",schemaName:"string",qualifierMessage:"**Possible values:** [`pending`, `pass`, `fail`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"created_at",required:!1,deprecated:void 0,schemaDescription:"the created at time",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"updated_at",required:!1,deprecated:void 0,schemaDescription:"the updated at time",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"attributes"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"the attributes")),(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("code",null,"property name*"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(d.Z,{responseExample:'{\n  "profile": {\n    "id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n    "uid": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n    "name": "my profile",\n    "profile_type_id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n    "status": "Active",\n    "id_proofing_status": "pending",\n    "created_at": "2023-05-01T09:12:28Z",\n    "updated_at": "2023-05-01T09:12:28Z",\n    "attributes": {\n      "text_attribute_uid": "static text",\n      "date_attribute_uid": "01/15/2020",\n      "profile_select_attribute_uid": "Profile Name",\n      "multiple_profile_select_attribute_uid": "Profile Name,Second Profile Name,Third Profile Name",\n      "contributor_select_attribute_uid": "User Name",\n      "multiple_contributor_select_attribute_uid": "User Name,Second User Name,Third User Name"\n    }\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Bad Request - unable to complete.")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(n.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"oneOf"),(0,r.kt)(n.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)(p.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,r.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)(p.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"errors",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(d.Z,{responseExample:'{\n  "error": "Invalid JSON syntax. Please check your syntax and try again."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(n.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"A message describing the error",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(d.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}_.isMDXComponent=!0}}]);