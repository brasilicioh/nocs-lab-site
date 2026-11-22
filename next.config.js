/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  turbopack: {
    root: __dirname
  },
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
