/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          fs: false,
          net: false,
          dns: false,
          child_process: false,
          tls: false,
          handlebars:false,
        },
      };
    }
    return config;
  },
};

export default nextConfig;
