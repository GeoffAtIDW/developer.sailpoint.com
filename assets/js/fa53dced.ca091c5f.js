"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[48505],{17563:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>h,frontMatter:()=>m,metadata:()=>c,toc:()=>f});var i=a(87462),s=(a(67294),a(3905)),r=a(26389),l=a(94891),o=(a(75190),a(47507)),p=a(24310),n=a(63303),d=(a(75035),a(85162));const m={id:"delete-user-profiles",sidebar_label:"Delete multiple user-profile contributor relationships",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"deleteUserProfiles",description:"Delete multiple user-profile contributor relationships",tags:["user profiles"],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{profiles:{type:"array",items:{type:"object",properties:{id:{type:"string",format:"uuid"}}}}}}}}},responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{user_profiles:{type:"array",items:{type:"object",properties:{id:{type:"string",format:"uuid",readOnly:!0},uid:{type:"string",minLength:32,maxLength:32,readOnly:!0},user_id:{type:"string",format:"uuid"},profile_id:{type:"string",format:"uuid"},ne_attribute_id:{type:"string",format:"uuid"},relationship_type:{type:"string",enum:["owner","contributor"]}}}}}},{type:"object",properties:{info:{type:"string",example:"job has started"},job_status:{type:"object",properties:{job_id:{type:"string",example:"3ce88e47ad6dba2ddf349d21"},status:{type:"string",example:"queued"}}},status:{type:"int",example:200}}}]}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"delete",path:"/user_profiles",jsonRequestBodyExample:{profiles:[{id:"3fa85f64-5717-4562-b3fc-2c963f66afa6"}]},info:{version:"1.0.0",title:"SecZetta Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Delete multiple user-profile contributor relationships",description:{content:"Delete multiple user-profile contributor relationships",type:"text/plain"},url:{path:["user_profiles"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"DELETE",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"delete api-method",info_path:"nerm/api/seczetta-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete multiple user-profile contributor relationships' (delete-user-profiles)"},u=void 0,c={unversionedId:"api/delete-user-profiles",id:"api/delete-user-profiles",title:"delete-user-profiles",description:"Delete multiple user-profile contributor relationships",source:"@site/products/nerm/api/delete-user-profiles.api.mdx",sourceDirName:"api",slug:"/api/delete-user-profiles",permalink:"/nerm/api/delete-user-profiles",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete multiple user-profile contributor relationships' (delete-user-profiles)",tags:[],version:"current",frontMatter:{id:"delete-user-profiles",sidebar_label:"Delete multiple user-profile contributor relationships",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"deleteUserProfiles",description:"Delete multiple user-profile contributor relationships",tags:["user profiles"],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{profiles:{type:"array",items:{type:"object",properties:{id:{type:"string",format:"uuid"}}}}}}}}},responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{user_profiles:{type:"array",items:{type:"object",properties:{id:{type:"string",format:"uuid",readOnly:!0},uid:{type:"string",minLength:32,maxLength:32,readOnly:!0},user_id:{type:"string",format:"uuid"},profile_id:{type:"string",format:"uuid"},ne_attribute_id:{type:"string",format:"uuid"},relationship_type:{type:"string",enum:["owner","contributor"]}}}}}},{type:"object",properties:{info:{type:"string",example:"job has started"},job_status:{type:"object",properties:{job_id:{type:"string",example:"3ce88e47ad6dba2ddf349d21"},status:{type:"string",example:"queued"}}},status:{type:"int",example:200}}}]}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"delete",path:"/user_profiles",jsonRequestBodyExample:{profiles:[{id:"3fa85f64-5717-4562-b3fc-2c963f66afa6"}]},info:{version:"1.0.0",title:"SecZetta Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Delete multiple user-profile contributor relationships",description:{content:"Delete multiple user-profile contributor relationships",type:"text/plain"},url:{path:["user_profiles"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"DELETE",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"delete api-method",info_path:"nerm/api/seczetta-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Delete multiple user-profile contributor relationships' (delete-user-profiles)"}},y={},f=[{value:"Delete multiple user-profile contributor relationships",id:"delete-multiple-user-profile-contributor-relationships",level:2}],b={toc:f};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"delete-multiple-user-profile-contributor-relationships"},"Delete multiple user-profile contributor relationships"),(0,s.kt)("p",null,"Delete multiple user-profile contributor relationships"),(0,s.kt)(l.Z,{mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"profiles"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Expected response to a valid request")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(n.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(n.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"user_profiles"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"user_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"profile_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"ne_attribute_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"relationship_type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`owner`, `contributor`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)(d.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(p.Z,{collapsible:!1,name:"info",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"job_status"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"job_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "user_profiles": [\n    {\n      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "uid": "string",\n      "user_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "profile_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "ne_attribute_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",\n      "relationship_type": "owner"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request - unable to complete.")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(n.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("div",null,(0,s.kt)("div",null,(0,s.kt)("span",{className:"badge badge--info"},"oneOf"),(0,s.kt)(n.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,s.kt)(p.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,s.kt)(d.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,s.kt)(p.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"errors",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "error": "Invalid JSON syntax. Please check your syntax and try again."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(n.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"A message describing the error",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);