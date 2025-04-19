/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'lh3.googleusercontent.com',
            'googleusercontent.com',
            'storage.googleapis.com',
            'www.google.com',
            'images.google.com',
            'photos.google.com'
        ],
    },
};

export default nextConfig;
