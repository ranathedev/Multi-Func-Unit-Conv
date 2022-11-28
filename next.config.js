/** @type {import('next').NextConfig} */

const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

module.exports = {
  env: {},
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./"));
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
