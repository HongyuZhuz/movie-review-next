/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['m.media-amazon.com','mymoviereviewbucket.s3.us-east-1.amazonaws.com'],
      },
      transpilePackages: ['@douyinfe/semi-ui', '@douyinfe/semi-icons', '@douyinfe/semi-illustrations'],
      
};

export default nextConfig;
