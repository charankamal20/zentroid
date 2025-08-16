/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        source: "/viewer/:path*",
        headers: [
          {
            key: "Link",
            value: "</api/preload>; rel=preload; as=script",
          },
        ],
      },
    ];
  },
  compress: true,
  devIndicators: false,
};

export default nextConfig;
