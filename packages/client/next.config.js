/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    publicRuntimeConfig: {
        isProduction: () => {
            return process.env.ENVIRONMENT?.toLowerCase() === 'production';
        },
    },
}

module.exports = nextConfig
