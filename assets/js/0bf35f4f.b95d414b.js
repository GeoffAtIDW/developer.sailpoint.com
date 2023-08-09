"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[28070],{89797:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>f,toc:()=>h});var i=r(87462),a=(r(67294),r(3905)),o=r(26389),n=r(94891),l=r(75190),s=r(47507),d=r(24310),p=r(63303),m=(r(75035),r(85162));const c={id:"get-role-profiles",sidebar_label:"Get role-profile contributor relationships",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getRoleProfiles",description:"Get role-profile contributor relationships",tags:["Role Profiles"],parameters:[{name:"query",in:"query",description:"Allows for pagination and sorting using the deepObject notation.\n\n</br>\n\n`resource?query[limit]=50&query[offset]=0&query[order]=label`\n\n</br>\n\n<table><thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead><tbody>\n<tr>\n<td>limit</td>\n<td>Limits the number of results returned</td>\n<td>100</td>\n</tr>\n<tr>\n<td>offset</td>\n<td>Returns the results starting at the value provided</td>\n<td>0</td>\n</tr>\n<tr>\n<td>order</td>\n<td>Allows you to determine the order in which the data is returned (not available on profile attributes)</td>\n<td>id</td>\n</tr>\n</tbody></table>\n",required:!1,schema:{type:"object",properties:{limit:{type:"integer",description:"The limit of results to return",example:100},offset:{type:"integer",description:"The number of records to offset",example:50},order:{type:"string",description:"The attribute to order by",example:"created_at"}}},style:"deepObject",explode:!0,example:"query[limit]=100&query[offset]=50&query[order]=created_at"},{name:"role_id",in:"query",description:"The ID of a role for filtering",required:!1,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},{name:"profile_id",in:"query",description:"Profile ID to filter by",required:!1,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},{name:"metadata",in:"query",description:"Returns batching metadata in the response",required:!1,example:!0,schema:{type:"boolean",default:!1}}],responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{role_profiles:{type:"array",items:{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"The uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},role_id:{description:"The role id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},profile_id:{description:"The profile id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}}}},_metadata:{type:"object",properties:{limit:{description:"The limit",type:"integer",format:"int32",example:50},offset:{description:"The offset",type:"integer",format:"int32",example:100},total:{description:"The total",type:"integer",format:"int32",example:1e4},next:{description:"The link to the next page of data",type:"string",example:"/endpoint?limit=10&offset=60"},previous:{description:"The link to the previous page of data",type:"string",example:"/endpoint?limit=10&offset=40"}}}}}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"get",path:"/role_profiles",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Get role-profile contributor relationships",description:{content:"Get role-profile contributor relationships",type:"text/plain"},url:{path:["role_profiles"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The ID of a role for filtering",type:"text/plain"},key:"role_id",value:""},{disabled:!1,description:{content:"Profile ID to filter by",type:"text/plain"},key:"profile_id",value:""},{disabled:!1,description:{content:"Returns batching metadata in the response",type:"text/plain"},key:"metadata",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get role-profile contributor relationships' (get-role-profiles)"},u=void 0,f={unversionedId:"api/get-role-profiles",id:"api/get-role-profiles",title:"get-role-profiles",description:"Get role-profile contributor relationships",source:"@site/products/nerm/api/get-role-profiles.api.mdx",sourceDirName:"api",slug:"/api/get-role-profiles",permalink:"/nerm/api/get-role-profiles",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get role-profile contributor relationships' (get-role-profiles)",tags:[],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1691598377,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{id:"get-role-profiles",sidebar_label:"Get role-profile contributor relationships",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getRoleProfiles",description:"Get role-profile contributor relationships",tags:["Role Profiles"],parameters:[{name:"query",in:"query",description:"Allows for pagination and sorting using the deepObject notation.\n\n</br>\n\n`resource?query[limit]=50&query[offset]=0&query[order]=label`\n\n</br>\n\n<table><thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead><tbody>\n<tr>\n<td>limit</td>\n<td>Limits the number of results returned</td>\n<td>100</td>\n</tr>\n<tr>\n<td>offset</td>\n<td>Returns the results starting at the value provided</td>\n<td>0</td>\n</tr>\n<tr>\n<td>order</td>\n<td>Allows you to determine the order in which the data is returned (not available on profile attributes)</td>\n<td>id</td>\n</tr>\n</tbody></table>\n",required:!1,schema:{type:"object",properties:{limit:{type:"integer",description:"The limit of results to return",example:100},offset:{type:"integer",description:"The number of records to offset",example:50},order:{type:"string",description:"The attribute to order by",example:"created_at"}}},style:"deepObject",explode:!0,example:"query[limit]=100&query[offset]=50&query[order]=created_at"},{name:"role_id",in:"query",description:"The ID of a role for filtering",required:!1,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},{name:"profile_id",in:"query",description:"Profile ID to filter by",required:!1,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},{name:"metadata",in:"query",description:"Returns batching metadata in the response",required:!1,example:!0,schema:{type:"boolean",default:!1}}],responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{role_profiles:{type:"array",items:{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"The uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},role_id:{description:"The role id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},profile_id:{description:"The profile id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}}}},_metadata:{type:"object",properties:{limit:{description:"The limit",type:"integer",format:"int32",example:50},offset:{description:"The offset",type:"integer",format:"int32",example:100},total:{description:"The total",type:"integer",format:"int32",example:1e4},next:{description:"The link to the next page of data",type:"string",example:"/endpoint?limit=10&offset=60"},previous:{description:"The link to the previous page of data",type:"string",example:"/endpoint?limit=10&offset=40"}}}}}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"get",path:"/role_profiles",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Get role-profile contributor relationships",description:{content:"Get role-profile contributor relationships",type:"text/plain"},url:{path:["role_profiles"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The ID of a role for filtering",type:"text/plain"},key:"role_id",value:""},{disabled:!1,description:{content:"Profile ID to filter by",type:"text/plain"},key:"profile_id",value:""},{disabled:!1,description:{content:"Returns batching metadata in the response",type:"text/plain"},key:"metadata",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get role-profile contributor relationships' (get-role-profiles)"},sidebar:"nermOpenApiSidebar",previous:{title:"Create a role-profile contributor relationship",permalink:"/nerm/api/post-role-profile"},next:{title:"Create multiple role-profile contributor relationships",permalink:"/nerm/api/post-role-profiles"}},b={},h=[{value:"Get role-profile contributor relationships",id:"get-role-profile-contributor-relationships",level:2}],y={toc:h};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-role-profile-contributor-relationships"},"Get role-profile contributor relationships"),(0,a.kt)("p",null,"Get role-profile contributor relationships"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(l.Z,{className:"paramsItem",param:{name:"query",in:"query",description:"Allows for pagination and sorting using the deepObject notation.\n\n</br>\n\n`resource?query[limit]=50&query[offset]=0&query[order]=label`\n\n</br>\n\n<table><thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead><tbody>\n<tr>\n<td>limit</td>\n<td>Limits the number of results returned</td>\n<td>100</td>\n</tr>\n<tr>\n<td>offset</td>\n<td>Returns the results starting at the value provided</td>\n<td>0</td>\n</tr>\n<tr>\n<td>order</td>\n<td>Allows you to determine the order in which the data is returned (not available on profile attributes)</td>\n<td>id</td>\n</tr>\n</tbody></table>\n",required:!1,schema:{type:"object",properties:{limit:{type:"integer",description:"The limit of results to return",example:100},offset:{type:"integer",description:"The number of records to offset",example:50},order:{type:"string",description:"The attribute to order by",example:"created_at"}}},style:"deepObject",explode:!0,example:"query[limit]=100&query[offset]=50&query[order]=created_at"},mdxType:"ParamsItem"}),(0,a.kt)(l.Z,{className:"paramsItem",param:{name:"role_id",in:"query",description:"The ID of a role for filtering",required:!1,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},mdxType:"ParamsItem"}),(0,a.kt)(l.Z,{className:"paramsItem",param:{name:"profile_id",in:"query",description:"Profile ID to filter by",required:!1,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},mdxType:"ParamsItem"}),(0,a.kt)(l.Z,{className:"paramsItem",param:{name:"metadata",in:"query",description:"Returns batching metadata in the response",required:!1,example:!0,schema:{type:"boolean",default:!1}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(o.Z,{mdxType:"ApiTabs"},(0,a.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Expected response to a valid request")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(p.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"role_profiles"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"The id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:"The uid",schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"role_id",required:!1,deprecated:void 0,schemaDescription:"The role id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"profile_id",required:!1,deprecated:void 0,schemaDescription:"The profile id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"_metadata"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!1,name:"limit",required:!1,deprecated:void 0,schemaDescription:"The limit",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"offset",required:!1,deprecated:void 0,schemaDescription:"The offset",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"total",required:!1,deprecated:void 0,schemaDescription:"The total",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"next",required:!1,deprecated:void 0,schemaDescription:"The link to the next page of data",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"previous",required:!1,deprecated:void 0,schemaDescription:"The link to the previous page of data",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(s.Z,{responseExample:'{\n  "role_profiles": [\n    {\n      "id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "uid": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "role_id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "profile_id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"\n    }\n  ],\n  "_metadata": {\n    "limit": 50,\n    "offset": 100,\n    "total": 10000,\n    "next": "/endpoint?limit=10&offset=60",\n    "previous": "/endpoint?limit=10&offset=40"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Bad Request - unable to complete.")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(p.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)("div",null,(0,a.kt)("div",null,(0,a.kt)("span",{className:"badge badge--info"},"oneOf"),(0,a.kt)(p.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,a.kt)(d.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,a.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,a.kt)(d.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(d.Z,{collapsible:!1,name:"errors",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(s.Z,{responseExample:'{\n  "error": "Invalid JSON syntax. Please check your syntax and try again."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(p.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(d.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"A message describing the error",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(s.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);