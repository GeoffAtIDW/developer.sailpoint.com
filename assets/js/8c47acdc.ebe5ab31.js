"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[87483],{48607:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>y,frontMatter:()=>c,metadata:()=>u,toc:()=>f});var a=i(87462),r=(i(67294),i(3905)),s=i(26389),d=i(94891),o=(i(75190),i(47507)),p=i(24310),l=i(63303),n=(i(75035),i(85162));const c={id:"patch-user-profiles",sidebar_label:"Update multiple user-profile contributor relationships",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"patchUserProfiles",description:"Update multiple user-profile contributor relationships",tags:["User Profiles"],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{user_profiles:{type:"array",items:{type:"object",properties:{id:{description:"the id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},user_id:{description:"the user id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},profile_id:{description:"the profile id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},ne_attribute_id:{description:"the ne_attribute_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},relationship_type:{description:"the relationship_type",type:"string",enum:["owner","contributor"],example:"owner"}}}}}}}}},responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{user_profiles:{type:"array",items:{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"the uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},user_id:{description:"The user id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},profile_id:{description:"The profile_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},ne_attribute_id:{description:"The ne_attribute_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},relationship_type:{description:"the relationship_type",type:"string",enum:["owner","contributor"],example:"owner"}}},example:[{id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",uid:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",user_id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",profile_id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",ne_attribute_id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",relationship_type:"owner"}]}}},{type:"object",properties:{info:{description:"info about the job",type:"string",example:"job has started"},job_status:{description:"the status of the job",type:"object",properties:{job_id:{description:"the job id",type:"string",example:"3ce88e47ad6dba2ddf349d21"},status:{description:"the status",type:"string",example:"queued"}}},status:{description:"the status",type:"integer",format:"int32",example:200}}}]}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"patch",path:"/user_profiles",jsonRequestBodyExample:{user_profiles:[{id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",user_id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",profile_id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",ne_attribute_id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",relationship_type:"owner"}]},info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Update multiple user-profile contributor relationships",description:{content:"Update multiple user-profile contributor relationships",type:"text/plain"},url:{path:["user_profiles"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update multiple user-profile contributor relationships' (patch-user-profiles)"},m=void 0,u={unversionedId:"api/patch-user-profiles",id:"api/patch-user-profiles",title:"patch-user-profiles",description:"Update multiple user-profile contributor relationships",source:"@site/products/nerm/api/patch-user-profiles.api.mdx",sourceDirName:"api",slug:"/api/patch-user-profiles",permalink:"/nerm/api/patch-user-profiles",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update multiple user-profile contributor relationships' (patch-user-profiles)",tags:[],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1691598377,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{id:"patch-user-profiles",sidebar_label:"Update multiple user-profile contributor relationships",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"patchUserProfiles",description:"Update multiple user-profile contributor relationships",tags:["User Profiles"],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{user_profiles:{type:"array",items:{type:"object",properties:{id:{description:"the id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},user_id:{description:"the user id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},profile_id:{description:"the profile id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},ne_attribute_id:{description:"the ne_attribute_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},relationship_type:{description:"the relationship_type",type:"string",enum:["owner","contributor"],example:"owner"}}}}}}}}},responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{user_profiles:{type:"array",items:{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"the uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},user_id:{description:"The user id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},profile_id:{description:"The profile_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},ne_attribute_id:{description:"The ne_attribute_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},relationship_type:{description:"the relationship_type",type:"string",enum:["owner","contributor"],example:"owner"}}},example:[{id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",uid:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",user_id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",profile_id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",ne_attribute_id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",relationship_type:"owner"}]}}},{type:"object",properties:{info:{description:"info about the job",type:"string",example:"job has started"},job_status:{description:"the status of the job",type:"object",properties:{job_id:{description:"the job id",type:"string",example:"3ce88e47ad6dba2ddf349d21"},status:{description:"the status",type:"string",example:"queued"}}},status:{description:"the status",type:"integer",format:"int32",example:200}}}]}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"patch",path:"/user_profiles",jsonRequestBodyExample:{user_profiles:[{id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",user_id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",profile_id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",ne_attribute_id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",relationship_type:"owner"}]},info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Update multiple user-profile contributor relationships",description:{content:"Update multiple user-profile contributor relationships",type:"text/plain"},url:{path:["user_profiles"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PATCH",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"patch api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update multiple user-profile contributor relationships' (patch-user-profiles)"},sidebar:"nermOpenApiSidebar",previous:{title:"Create multiple user-profile contributor relationships",permalink:"/nerm/api/post-user-profiles"},next:{title:"Find user-profile contributor relationship by id",permalink:"/nerm/api/get-user-profile"}},b={},f=[{value:"Update multiple user-profile contributor relationships",id:"update-multiple-user-profile-contributor-relationships",level:2}],h={toc:f};function y(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"update-multiple-user-profile-contributor-relationships"},"Update multiple user-profile contributor relationships"),(0,r.kt)("p",null,"Update multiple user-profile contributor relationships"),(0,r.kt)(d.Z,{mdxType:"MimeTabs"},(0,r.kt)(n.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"user_profiles"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"the id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"user_id",required:!1,deprecated:void 0,schemaDescription:"the user id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"profile_id",required:!1,deprecated:void 0,schemaDescription:"the profile id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"ne_attribute_id",required:!1,deprecated:void 0,schemaDescription:"the ne_attribute_id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"relationship_type",required:!1,deprecated:void 0,schemaDescription:"the relationship_type",schemaName:"string",qualifierMessage:"**Possible values:** [`owner`, `contributor`]",defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(n.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Expected response to a valid request")),(0,r.kt)("div",null,(0,r.kt)(d.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(n.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(n.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"oneOf"),(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(n.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"user_profiles"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"The id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:"the uid",schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"user_id",required:!1,deprecated:void 0,schemaDescription:"The user id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"profile_id",required:!1,deprecated:void 0,schemaDescription:"The profile_id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"ne_attribute_id",required:!1,deprecated:void 0,schemaDescription:"The ne_attribute_id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"relationship_type",required:!1,deprecated:void 0,schemaDescription:"the relationship_type",schemaName:"string",qualifierMessage:"**Possible values:** [`owner`, `contributor`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)(n.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)(p.Z,{collapsible:!1,name:"info",required:!1,deprecated:void 0,schemaDescription:"info about the job",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"job_status"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"the status of the job")),(0,r.kt)(p.Z,{collapsible:!1,name:"job_id",required:!1,deprecated:void 0,schemaDescription:"the job id",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:"the status",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(p.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:"the status",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,r.kt)(n.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "user_profiles": [\n    {\n      "id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "uid": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "user_id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "profile_id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "ne_attribute_id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "relationship_type": "owner"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(n.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Bad Request - unable to complete.")),(0,r.kt)("div",null,(0,r.kt)(d.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(n.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(n.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"oneOf"),(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(n.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)(p.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,r.kt)(n.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)(p.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"errors",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,r.kt)(n.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "error": "Invalid JSON syntax. Please check your syntax and try again."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(n.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,r.kt)("div",null,(0,r.kt)(d.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(n.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(n.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"A message describing the error",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(n.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0}}]);