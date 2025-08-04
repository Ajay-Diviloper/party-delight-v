import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ✅ Enables trailing slash at the end of URLs (optional)
  trailingSlash: true,

  // ✅ Prevents automatic redirects for trailing slashes (optional)
  skipTrailingSlashRedirect: true,

  // ✅ Disable Next.js Image Optimization (useful for static hosting or external images)
  images: {
    unoptimized: true,
  },

  // ✅ Keep default build output directory (.next) — required for Vercel
  // ⚠️ Do NOT add distDir here; Vercel expects .next/

  // ✅ Optionally enable React strict mode
  reactStrictMode: true,
};

export default nextConfig;
