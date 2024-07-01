/** @type {import('next').NextConfig} */
const nextConfig = {

      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'mymoviereviewbucket.s3.us-east-1.amazonaws.com',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'm.media-amazon.com',
            pathname: '/**',

          }
        ],
      },
      transpilePackages: ['@douyinfe/semi-ui', '@douyinfe/semi-icons', '@douyinfe/semi-illustrations'],
      
};

export default nextConfig;
