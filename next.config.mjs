/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () =>
    process.env.NODE_ENV === "production"
      ? []
      : [
          {
            source: "/api/:path*",
            destination: "https://gluco-scan-be-production.up.railway.app/:path*",
          },
        ],
  images: {
    remotePatterns: [{ hostname: "images.openfoodfacts.org" }],
  },
};

export default nextConfig;
