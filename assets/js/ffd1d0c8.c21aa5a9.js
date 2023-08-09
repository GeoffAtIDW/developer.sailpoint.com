"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[44354],{83212:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>f,toc:()=>b});var a=i(87462),r=(i(67294),i(3905)),n=i(26389),o=i(94891),d=i(75190),s=i(47507),l=i(24310),p=i(63303),m=(i(75035),i(85162));const c={id:"get-identity-proofing-results",sidebar_label:"Get identity proofing result data in bulk",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getIdentityProofingResults",description:"This endpoint can retrieve identity proofing result data in bulk from Lifecycle",tags:["Identity Proofing Results"],parameters:[{name:"query",in:"query",description:"Allows for pagination and sorting using the deepObject notation.\n\n</br>\n\n`resource?query[limit]=50&query[offset]=0&query[order]=label`\n\n</br>\n\n<table><thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead><tbody>\n<tr>\n<td>limit</td>\n<td>Limits the number of results returned</td>\n<td>100</td>\n</tr>\n<tr>\n<td>offset</td>\n<td>Returns the results starting at the value provided</td>\n<td>0</td>\n</tr>\n<tr>\n<td>order</td>\n<td>Allows you to determine the order in which the data is returned (not available on profile attributes)</td>\n<td>id</td>\n</tr>\n</tbody></table>\n",required:!1,schema:{type:"object",properties:{limit:{type:"integer",description:"The limit of results to return",example:100},offset:{type:"integer",description:"The number of records to offset",example:50},order:{type:"string",description:"The attribute to order by",example:"created_at"}}},style:"deepObject",explode:!0,example:"query[limit]=100&query[offset]=50&query[order]=created_at"},{name:"profile_id",in:"query",description:"Profile ID to filter by",required:!1,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},{name:"workflow_session_id",in:"query",description:"Workflow Session ID to filter by",required:!1,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},{name:"result",in:"query",description:"ID Proofing Result to filter by",required:!1,schema:{type:"string",enum:["pass","fail"]},example:"fail"},{name:"metadata",in:"query",description:"Returns batching metadata in the response",required:!1,example:!0,schema:{type:"boolean",default:!1}}],responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{identity_proofing_results:{type:"array",items:{type:"object",properties:{id:{description:"the id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},identity_proofing_action_id:{description:"The identity_proofing_action_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},workflow_session_id:{description:"the workflow_session_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},profile_id:{description:"the profile_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},proofing_workflow:{description:"the proofing workflow id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},result:{description:"the result of the identity proofing",type:"string",enum:["pending","pass","fail"],example:"pass"},proofing_attributes:{description:"Any additional attributes associated with the proofing",type:"object",additionalProperties:{type:"string"},example:{result:"approve"}},created_at:{description:"The created at time",type:"string",format:"date-time",example:"2023-05-01T09:12:28Z"},updated_at:{description:"The updated at time",type:"string",format:"date-time",example:"2023-05-01T09:12:28Z"}}}},_metadata:{type:"object",properties:{limit:{description:"The limit",type:"integer",format:"int32",example:50},offset:{description:"The offset",type:"integer",format:"int32",example:100},total:{description:"The total",type:"integer",format:"int32",example:1e4},next:{description:"The link to the next page of data",type:"string",example:"/endpoint?limit=10&offset=60"},previous:{description:"The link to the previous page of data",type:"string",example:"/endpoint?limit=10&offset=40"}}}}}}}}},method:"get",path:"/identity_proofing_results",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Get identity proofing result data in bulk",description:{content:"This endpoint can retrieve identity proofing result data in bulk from Lifecycle",type:"text/plain"},url:{path:["identity_proofing_results"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Profile ID to filter by",type:"text/plain"},key:"profile_id",value:""},{disabled:!1,description:{content:"Workflow Session ID to filter by",type:"text/plain"},key:"workflow_session_id",value:""},{disabled:!1,description:{content:"ID Proofing Result to filter by",type:"text/plain"},key:"result",value:""},{disabled:!1,description:{content:"Returns batching metadata in the response",type:"text/plain"},key:"metadata",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get identity proofing result data in bulk' (get-identity-proofing-results)"},u=void 0,f={unversionedId:"api/get-identity-proofing-results",id:"api/get-identity-proofing-results",title:"get-identity-proofing-results",description:"Get identity proofing result data in bulk",source:"@site/products/nerm/api/get-identity-proofing-results.api.mdx",sourceDirName:"api",slug:"/api/get-identity-proofing-results",permalink:"/nerm/api/get-identity-proofing-results",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get identity proofing result data in bulk' (get-identity-proofing-results)",tags:[],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1691598377,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{id:"get-identity-proofing-results",sidebar_label:"Get identity proofing result data in bulk",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getIdentityProofingResults",description:"This endpoint can retrieve identity proofing result data in bulk from Lifecycle",tags:["Identity Proofing Results"],parameters:[{name:"query",in:"query",description:"Allows for pagination and sorting using the deepObject notation.\n\n</br>\n\n`resource?query[limit]=50&query[offset]=0&query[order]=label`\n\n</br>\n\n<table><thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead><tbody>\n<tr>\n<td>limit</td>\n<td>Limits the number of results returned</td>\n<td>100</td>\n</tr>\n<tr>\n<td>offset</td>\n<td>Returns the results starting at the value provided</td>\n<td>0</td>\n</tr>\n<tr>\n<td>order</td>\n<td>Allows you to determine the order in which the data is returned (not available on profile attributes)</td>\n<td>id</td>\n</tr>\n</tbody></table>\n",required:!1,schema:{type:"object",properties:{limit:{type:"integer",description:"The limit of results to return",example:100},offset:{type:"integer",description:"The number of records to offset",example:50},order:{type:"string",description:"The attribute to order by",example:"created_at"}}},style:"deepObject",explode:!0,example:"query[limit]=100&query[offset]=50&query[order]=created_at"},{name:"profile_id",in:"query",description:"Profile ID to filter by",required:!1,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},{name:"workflow_session_id",in:"query",description:"Workflow Session ID to filter by",required:!1,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},{name:"result",in:"query",description:"ID Proofing Result to filter by",required:!1,schema:{type:"string",enum:["pass","fail"]},example:"fail"},{name:"metadata",in:"query",description:"Returns batching metadata in the response",required:!1,example:!0,schema:{type:"boolean",default:!1}}],responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{identity_proofing_results:{type:"array",items:{type:"object",properties:{id:{description:"the id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},identity_proofing_action_id:{description:"The identity_proofing_action_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},workflow_session_id:{description:"the workflow_session_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},profile_id:{description:"the profile_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},proofing_workflow:{description:"the proofing workflow id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},result:{description:"the result of the identity proofing",type:"string",enum:["pending","pass","fail"],example:"pass"},proofing_attributes:{description:"Any additional attributes associated with the proofing",type:"object",additionalProperties:{type:"string"},example:{result:"approve"}},created_at:{description:"The created at time",type:"string",format:"date-time",example:"2023-05-01T09:12:28Z"},updated_at:{description:"The updated at time",type:"string",format:"date-time",example:"2023-05-01T09:12:28Z"}}}},_metadata:{type:"object",properties:{limit:{description:"The limit",type:"integer",format:"int32",example:50},offset:{description:"The offset",type:"integer",format:"int32",example:100},total:{description:"The total",type:"integer",format:"int32",example:1e4},next:{description:"The link to the next page of data",type:"string",example:"/endpoint?limit=10&offset=60"},previous:{description:"The link to the previous page of data",type:"string",example:"/endpoint?limit=10&offset=40"}}}}}}}}},method:"get",path:"/identity_proofing_results",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Get identity proofing result data in bulk",description:{content:"This endpoint can retrieve identity proofing result data in bulk from Lifecycle",type:"text/plain"},url:{path:["identity_proofing_results"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Profile ID to filter by",type:"text/plain"},key:"profile_id",value:""},{disabled:!1,description:{content:"Workflow Session ID to filter by",type:"text/plain"},key:"workflow_session_id",value:""},{disabled:!1,description:{content:"ID Proofing Result to filter by",type:"text/plain"},key:"result",value:""},{disabled:!1,description:{content:"Returns batching metadata in the response",type:"text/plain"},key:"metadata",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get identity proofing result data in bulk' (get-identity-proofing-results)"},sidebar:"nermOpenApiSidebar",previous:{title:"Uploads a new attachment attribute value to a workflow session",permalink:"/nerm/api/post-workflow-session-upload"},next:{title:"Get saved advanced search queries",permalink:"/nerm/api/get-advanced-search"}},y={},b=[{value:"Get identity proofing result data in bulk",id:"get-identity-proofing-result-data-in-bulk",level:2}],h={toc:b};function g(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-identity-proofing-result-data-in-bulk"},"Get identity proofing result data in bulk"),(0,r.kt)("p",null,"This endpoint can retrieve identity proofing result data in bulk from Lifecycle"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"query",in:"query",description:"Allows for pagination and sorting using the deepObject notation.\n\n</br>\n\n`resource?query[limit]=50&query[offset]=0&query[order]=label`\n\n</br>\n\n<table><thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead><tbody>\n<tr>\n<td>limit</td>\n<td>Limits the number of results returned</td>\n<td>100</td>\n</tr>\n<tr>\n<td>offset</td>\n<td>Returns the results starting at the value provided</td>\n<td>0</td>\n</tr>\n<tr>\n<td>order</td>\n<td>Allows you to determine the order in which the data is returned (not available on profile attributes)</td>\n<td>id</td>\n</tr>\n</tbody></table>\n",required:!1,schema:{type:"object",properties:{limit:{type:"integer",description:"The limit of results to return",example:100},offset:{type:"integer",description:"The number of records to offset",example:50},order:{type:"string",description:"The attribute to order by",example:"created_at"}}},style:"deepObject",explode:!0,example:"query[limit]=100&query[offset]=50&query[order]=created_at"},mdxType:"ParamsItem"}),(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"profile_id",in:"query",description:"Profile ID to filter by",required:!1,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},mdxType:"ParamsItem"}),(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"workflow_session_id",in:"query",description:"Workflow Session ID to filter by",required:!1,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},mdxType:"ParamsItem"}),(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"result",in:"query",description:"ID Proofing Result to filter by",required:!1,schema:{type:"string",enum:["pass","fail"]},example:"fail"},mdxType:"ParamsItem"}),(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"metadata",in:"query",description:"Returns batching metadata in the response",required:!1,example:!0,schema:{type:"boolean",default:!1}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Expected response to a valid request")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"identity_proofing_results"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"the id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"identity_proofing_action_id",required:!1,deprecated:void 0,schemaDescription:"The identity_proofing_action_id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"workflow_session_id",required:!1,deprecated:void 0,schemaDescription:"the workflow_session_id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"profile_id",required:!1,deprecated:void 0,schemaDescription:"the profile_id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"proofing_workflow",required:!1,deprecated:void 0,schemaDescription:"the proofing workflow id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:"the result of the identity proofing",schemaName:"string",qualifierMessage:"**Possible values:** [`pending`, `pass`, `fail`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"proofing_attributes"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Any additional attributes associated with the proofing")),(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("code",null,"property name*"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string")))))),(0,r.kt)(l.Z,{collapsible:!1,name:"created_at",required:!1,deprecated:void 0,schemaDescription:"The created at time",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"updated_at",required:!1,deprecated:void 0,schemaDescription:"The updated at time",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"_metadata"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"limit",required:!1,deprecated:void 0,schemaDescription:"The limit",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"offset",required:!1,deprecated:void 0,schemaDescription:"The offset",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"total",required:!1,deprecated:void 0,schemaDescription:"The total",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"next",required:!1,deprecated:void 0,schemaDescription:"The link to the next page of data",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"previous",required:!1,deprecated:void 0,schemaDescription:"The link to the previous page of data",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(s.Z,{responseExample:'{\n  "identity_proofing_results": [\n    {\n      "id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "identity_proofing_action_id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "workflow_session_id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "profile_id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "proofing_workflow": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "result": "pass",\n      "proofing_attributes": {\n        "result": "approve"\n      },\n      "created_at": "2023-05-01T09:12:28Z",\n      "updated_at": "2023-05-01T09:12:28Z"\n    }\n  ],\n  "_metadata": {\n    "limit": 50,\n    "offset": 100,\n    "total": 10000,\n    "next": "/endpoint?limit=10&offset=60",\n    "previous": "/endpoint?limit=10&offset=40"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);