/** @type {import('next').NextConfig} */
const nextConfig = {};



export default   {
    reactStrictMode: true,
    serverRuntimeConfig: {
      apiUrl: 'http://localhost:8000',
    },
  };