module.exports = ({ env }) => ({
    // ...
    upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: 'us-west-1',
        params: {
          Bucket: 'next-strapi-blog-bucket',
        },
      },
    },
    // ...
  }});