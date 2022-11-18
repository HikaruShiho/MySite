/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io", "qiita-user-contents.imgix.net"],
  },
};

module.exports = nextConfig;
