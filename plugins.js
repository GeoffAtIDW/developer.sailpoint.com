module.exports = [
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "idn",
      path: "products/idn",
      routeBasePath: "idn",
      editUrl:
        "https://github.com/sailpoint-oss/developer-community-site/edit/main/",
      showLastUpdateAuthor: true,
      showLastUpdateTime: true,
      sidebarPath: require.resolve("./products/idn/sidebar.js"),
      docItemComponent: "@theme/ApiItem",
    },
  ],
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "iiq",
      path: "products/iiq",
      routeBasePath: "iiq",
      editUrl:
        "https://github.com/sailpoint-oss/developer-community-site/edit/main/",
      showLastUpdateAuthor: true,
      showLastUpdateTime: true,
      sidebarPath: require.resolve("./products/iiq/sidebar.js"),
      docItemComponent: "@theme/ApiItem",
    },
  ],
  
  [
    "@docusaurus/plugin-google-gtag",
    {
      trackingID: "GTM-TSD78J",
      anonymizeIP: false,
    },
  ],
  [
    "docusaurus-plugin-openapi-docs",
    {
      id: "idn-api",
      docsPluginId: "idn",
      config: {
        idn_v3: {
          specPath: "static/api-specs/idn/sailpoint-api.v3.yaml",
          outputDir: "products/idn/api/v3",
          sidebarOptions: {
            groupPathsBy: "tag",
            categoryLinkSource: "tag",
          },
          template: "api.mustache",
        },
        idn_beta: {
          specPath: "static/api-specs/idn/sailpoint-api.beta.yaml",
          outputDir: "products/idn/api/beta",
          sidebarOptions: {
            groupPathsBy: "tag",
            categoryLinkSource: "tag",
          },
          template: "api.mustache",
        },
      },
    },
  ],
  [
    "docusaurus-plugin-openapi-docs",
    {
      id: "iiq-api",
      docsPluginId: "iiq",
      config: {
        iiq: {
          specPath: "static/api-specs/iiq/swagger.json",
          outputDir: "products/iiq/api",
          sidebarOptions: {
            groupPathsBy: "tag",
            categoryLinkSource: "tag",
          },
          template: "api.mustache",
        },
      },
    },
  ],
  [
    "docusaurus-plugin-openapi-docs",
    {
      id: "arm-api",
      docsPluginId: "arm",
      config: {
        arm_agent_management: {
          specPath: "static/api-specs/arm/swagger-agent-management.json",
          outputDir: "products/arm/api/agent-management",
          sidebarOptions: {
            groupPathsBy: "tag",
            categoryLinkSource: "tag",
          },
          template: "api.mustache",
        }
      },
    },
  ],
];
