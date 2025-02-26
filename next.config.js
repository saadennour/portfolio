/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "/portfolio",
	output: "export",
	swcMinify: true,
	reactStrictMode : false,
	images: {
		unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
	  },
	assetPrefix: "/portfolio/"
};

export default nextConfig;
