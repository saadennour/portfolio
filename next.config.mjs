/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "/portfolio",
	output: "export",
	images: {
		unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
	  },
	assetPrefix: "/portfolio"
};

export default nextConfig;
