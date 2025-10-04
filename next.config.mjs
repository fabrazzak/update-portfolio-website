/** @type {import('next').NextConfig} */
const nextConfig = {
     output: 'export',
     images: {
    unoptimized: true, // Required for <Image /> in static export
  },
};

export default nextConfig;
