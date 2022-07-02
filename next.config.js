/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'next-strapi-blog-bucket.s3.us-west-1.amazonaws.com'],
  },
}
