/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.BASE_URL || 'https://your-site.com',
  generateRobotsTxt: false, // We're using app/robots.ts instead
  exclude: ['/api/*'],
  generateIndexSitemap: false,
  
  transform: async (config: { changefreq: any; priority: any; autoLastmod: any; }, path: any) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};