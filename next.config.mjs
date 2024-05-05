/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['m.media-amazon.com'],
      },
      transpilePackages: ['@douyinfe/semi-ui', '@douyinfe/semi-icons', '@douyinfe/semi-illustrations'],
      
};

export default nextConfig;
