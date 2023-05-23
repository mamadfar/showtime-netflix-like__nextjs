/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_APP_API_KEY: process.env.NEXT_APP_API_KEY
    },
    images: {
        domains: ["m.media-amazon.com"]
    },
    output: 'standalone'
}

module.exports = nextConfig
