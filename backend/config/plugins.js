module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AKIA44HSMMH3DD7COI52'),
        secretAccessKey: env('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'),
        region: env('us-west-1'),
        params: {
          Bucket: env('next-strapi-bucket.s3.us-west-1.amazonaws.com'),
        },
      },
    },
  },
  // ...s
});