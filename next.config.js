/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // images: {
    //     remotePatterns: ['res.cloudinary.com']
    // }
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'www.surakshanet.com',
            pathname: '**',
          },
        ],
      },
  }

module.exports = nextConfig
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//       domains: ["res.cloudinary.com"],
//     },
// }

// module.exports = nextConfig
