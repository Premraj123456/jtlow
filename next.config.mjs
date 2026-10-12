/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  outputFileTracingRoot: new URL(".", import.meta.url).pathname,
};

export default nextConfig;
