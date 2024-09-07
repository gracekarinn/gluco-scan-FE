/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () =>
    process.env.NODE_ENV === "production"
      ? []
      : [
          {
            source: "/api/:path*",
            destination: "http://localhost:3001/:path*",
          },
        ],
  images: {
    remotePatterns: [{ hostname: "images.openfoodfacts.org" }],
  },
};

export default nextConfig;
