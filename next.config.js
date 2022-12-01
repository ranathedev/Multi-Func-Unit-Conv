/** @type {import('next').NextConfig} */

const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

module.exports = {
  env: {
    apiKey: process.env.APIKEY,
    authDomaim: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID,
  },
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
