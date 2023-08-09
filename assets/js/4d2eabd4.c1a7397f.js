"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[51066],{46251:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const i={id:"sap-buildmap-rule",title:"SAP BuildMap Rule",pagination_label:"SAP BuildMap Rule",sidebar_label:"SAP BuildMap Rule",sidebar_class_name:"sapBuildMapRule",keywords:["cloud","rules","sap"],description:"This rule gathers additional attributes from SAP systems to build accounts. This rule is implemented using SAP's Java Connector (JCo) framework provided by a supplied SAP connection.",slug:"/docs/rules/connector-rules/sap-buildmap-rule",tags:["Rules"]},r=void 0,o={unversionedId:"docs/identity-now/rules/connector-rules/sap-buildmap-rule",id:"docs/identity-now/rules/connector-rules/sap-buildmap-rule",title:"SAP BuildMap Rule",description:"This rule gathers additional attributes from SAP systems to build accounts. This rule is implemented using SAP's Java Connector (JCo) framework provided by a supplied SAP connection.",source:"@site/products/idn/docs/identity-now/rules/connector-rules/sap_buildmap_rule.md",sourceDirName:"docs/identity-now/rules/connector-rules",slug:"/docs/rules/connector-rules/sap-buildmap-rule",permalink:"/idn/docs/rules/connector-rules/sap-buildmap-rule",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/rules/connector-rules/sap_buildmap_rule.md",tags:[{label:"Rules",permalink:"/idn/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1691598377,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{id:"sap-buildmap-rule",title:"SAP BuildMap Rule",pagination_label:"SAP BuildMap Rule",sidebar_label:"SAP BuildMap Rule",sidebar_class_name:"sapBuildMapRule",keywords:["cloud","rules","sap"],description:"This rule gathers additional attributes from SAP systems to build accounts. This rule is implemented using SAP's Java Connector (JCo) framework provided by a supplied SAP connection.",slug:"/docs/rules/connector-rules/sap-buildmap-rule",tags:["Rules"]},sidebar:"idnDocs",previous:{title:"JDBC Provision Rule",permalink:"/idn/docs/rules/connector-rules/jdbc-provisioning-rule"},next:{title:"SAP HR Provisioning Modify Rule",permalink:"/idn/docs/rules/connector-rules/sap-provisioning-modify-rule"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Template",id:"template",level:2},{value:"Example",id:"example",level:2},{value:"Attach to Source",id:"attach-to-source",level:2}],d={toc:u};function c(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"This rule gathers additional attributes from SAP systems to build accounts. This rule is implemented using SAP's Java Connector (JCo) framework provided by a supplied SAP connection."),(0,l.kt)("h2",{id:"execution"},"Execution"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Connector Execution")," - This rule executes within the virtual appliance. It may offer special abilities to perform connector-related functions, and it may offer managed connections to sources."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Logging")," - Logging statements are viewable within the ccg.log on the virtual appliance, and they are viewable by SailPoint personnel.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Rule Execution",src:a(25089).Z,width:"1525",height:"618"})),(0,l.kt)("h2",{id:"input"},"Input"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Attributes"),(0,l.kt)("td",{parentName:"tr",align:null},"Reference to a SailPoint attributes object (basically a map object with some added convenience methods) that holds the attributes that have been built up by the default connector implementation. The rule should modify this object to change, add, or remove attributes from the map.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connector"),(0,l.kt)("td",{parentName:"tr",align:null},"sailpoint.connector.SAPInternalConnector"),(0,l.kt)("td",{parentName:"tr",align:null},"Reference to the current SAP connector.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"java.util.Map"),(0,l.kt)("td",{parentName:"tr",align:null},"Map that can be used to store and share data between executions of this rule during a single aggregation run.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"application"),(0,l.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Application"),(0,l.kt)("td",{parentName:"tr",align:null},"Attribute value for the identity attribute before the rule runs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schema"),(0,l.kt)("td",{parentName:"tr",align:null},"sailpoint.object.Schema"),(0,l.kt)("td",{parentName:"tr",align:null},"Reference to the schema object for the delimited file source being read.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destination"),(0,l.kt)("td",{parentName:"tr",align:null},"com.sap.conn.jco.JCoDestination"),(0,l.kt)("td",{parentName:"tr",align:null},"Connected and ready-to-use SAP destination object that can be used to call BAPI function modules and call to SAP tables.")))),(0,l.kt)("h2",{id:"template"},"Template"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="SAPBuildMap">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n')),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="SAPBuildMap">\n  <Description> This example SAP Build Map rule constructs an Initials attribute from the first character of the FirstName and LastName attributes and changes the name of the \u201cInitDate\u201d attribute to \u201cHireDate\u201d. </Description>\n  <Source><![CDATA[\n  import java.util.HashMap;\n\n  // Create initials\n\n  String firstName = object.get("FirstName");\n  String lastName = object.get("LastName");\n\n  String initials = "";\n\n  if ( firstName != null && firstName.length() > 0 ) {\n    char letter = firstName.charAt(0);\n    letter = Character.toUpperCase(letter);\n    initials = letter + ".";\n  }\n\n  if ( lastName != null && lastName.length() > 0 ) {\n    letter = lastName.charAt(0);\n    letter = Character.toUpperCase(letter);\n    initials += letter + ".";\n  }\n\n  object.put("Initials", initials);\n  object.put("HireDate", object.remove("InitDate"));\n\n]]></Source>\n</Rule>\n')),(0,l.kt)("h2",{id:"attach-to-source"},"Attach to Source"),(0,l.kt)("p",null,"Refer to ",(0,l.kt)("a",{parentName:"p",href:"/idn/docs/rules/connector-rules#buildmap-rule"},"Attaching Connector-Related Rules to Sources")," for details on how to attach your rule to your source."))}c.isMDXComponent=!0},25089:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/connector_execution-da1c6db87e6d1b2b8d1f5398ce2f3501.png"}}]);