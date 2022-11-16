module.exports = {
  title: "",
  logo: {
    alt: "SailPoint Developer Community",
    src: "img/SailPoint-Developer-Community-Lockup.png",
    srcDark: "img/SailPoint-Developer-Community-Inverse-Lockup.png",
  },
  items: [
    {
      type: "dropdown",
      label: "IdentityNow",
      position: "left",
      items: [
        { to: "#", label: "API Specifications", className: "navbar__section" },
        { to: "/idn/api/v3", label: "V3 APIs", className: "indent" },
        { to: "/idn/api/beta", label: "Beta APIs", className: "indent" },
        { to: "/arm/api", label: "ARM APIs", className: "indent" },
        { to: "#", label: "Documentation", className: "navbar__section" },
        { to: "idn/docs", label: "IDN Documentation", className: "indent" },
        { to: "#", label: "External Links", className: "navbar__section" },
        {
          href: "https://documentation.sailpoint.com",
          label: "Product Documentation",
          className: "indent",
        },
        {
          href: "https://university.sailpoint.com/Saba/Web_spf/NA10P1PRD075/guest/categorydetail/categ000000000003041/true/xxemptyxx/",
          label: "IdentityNow Certifications",
          className: "indent",
        },
      ],
    },
    {
      type: "dropdown",
      label: "IdentityIQ",
      position: "left",
      items: [
        { to: "#", label: "API Specifications", className: "navbar__section" },
        { to: "/iiq/api", label: "IIQ APIs", className: "indent" },
        { to: "#", label: "External Links", className: "navbar__section" },
        {
          href: "https://documentation.sailpoint.com",
          label: "Product Documentation",
          className: "indent",
        },
        {
          href: "https://university.sailpoint.com/Saba/Web_spf/NA10P1PRD075/guest/categorydetail/categ000000000003042/true/xxemptyxx/",
          label: "IdentityIQ Certifications",
          className: "indent",
        },
      ],
    },
    {
      position: "left",
      label: "Blog",
      to: "https://medium.com/sailpointengineering",
    },
    {
      position: "left",
      label: "Ideas",
      to: "https://developer-sailpoint.ideas.aha.io/",
    },
    {
      position: "left",
      label: "Discuss",
      to: "https://developer.sailpoint.com/discuss",
    },
    {
      type: "dropdown",
      label: "Support",
      position: "right",
      items: [
        {
          label: "Submit Support Ticket",
          href: "https://support.sailpoint.com/hc/en-us/requests/new?ticket_form_id=360000629992",
        },
        { label: "Compass", href: "https://community.sailpoint.com" },
        { label: "Platform Status", href: "https://status.sailpoint.com/" },
      ],
    },
    {
      position: "right",
      to: "https://github.com/sailpoint-oss",
      className: "header-github-link",
      "aria-label": "SailPoint Open-source GitHub",
    },
  ],
};
