module.exports = ({ env }) => [
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "next-strapi-blog-bucket"],
          "img-src": [
            "'self'",
            "next-strapi-blog-bucket/images",
            "data:",
            "blob:",
            `${env("DO_SPACE_BUCKET")}.${env("DO_SPACE_ENDPOINT")}`,
          ],
          "media-src": [
            "'self'",
            "next-strapi-blog-bucket",
            "data:",
            "blob:",
            `${env("DO_SPACE_BUCKET")}.${env("DO_SPACE_ENDPOINT")}`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];