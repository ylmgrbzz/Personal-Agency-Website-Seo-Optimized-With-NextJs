/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "images.pexels.com"],
    loader: "imgix",
    path: "",
  },
};
