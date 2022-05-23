module.exports = ({ env }) => ({
  upload: {
      config: {
      breakpoints: {
          large: 1600,
          medium: 1100,
          small: 700,
      },
      provider: "strapi-provider-upload-digitalocean-next",
      providerOptions: {
      accessKeyId: env("AWS_ACCESS_KEY_ID"),
      secretAccessKey: env("AWS_ACCESS_SECRET"),
      endpoint: env("AWS_DOMAIN"),
      params: {
          Bucket: env("AWS_BUCKET"),
              },
          },
      },
  },
});