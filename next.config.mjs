// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: "res.cloudinary.com", protocol: "https", port: ""}
        ]
    }
};

export default nextConfig;
