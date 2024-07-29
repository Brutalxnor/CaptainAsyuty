// // @ts-check
 
// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   /* config options here */
// }
 
// export default nextConfig

// next.config.js
// next.config.js




// module.exports = {
//   reactStrictMode: true,
//   env: {
//     NEXT_PUBLIC_CLERK_FRONTEND_API: process.env.NEXT_PUBLIC_CLERK_FRONTEND_API,
//     CLERK_API_KEY: process.env.CLERK_API_KEY,
//     CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
//     MONGODB_URI: process.env.MONGODB_URI,
//     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
//     JWT_SECRET: process.env.JWT_SECRET
//   },
// };



// next.config.js
// next.config.js


// module.exports = {
//   // reactStrictMode: true,
//   env: {
//     NEXT_PUBLIC_CLERK_FRONTEND_API: process.env.NEXT_PUBLIC_CLERK_FRONTEND_API,
//     CLERK_API_KEY: process.env.CLERK_API_KEY,
//     CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
//     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
//   },
//   async redirects() {
//     return [
//       {
//         source: '/sign-in',
//         destination: '/',
//         permanent: false,
//       },
//     ];
//   },
// };






/** @type {import('next').NextConfig} */


const nextConfig = {}
module.exports = nextConfig
module.exports = {
    async rewrites() {
      return [
        {
          source: '/socket.io/:path*',
          destination: '/api/socket',
        },
      ];
    },
  };

