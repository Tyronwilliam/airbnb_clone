/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoibWF1am9qby1qbyIsImEiOiJjbDAyZmgzcW4wMGtwM2pwMjg3cG5nOXdhIn0.MW1qeoiiyl3LKew2yOlr1g",
  },
};

module.exports = nextConfig;
