/**
 * @type {import('next').NextConfig}
 * */

const path = require('path')
// const nextBuildId = require('next-build-id')

module.exports = {
  // generateBuildId: () => nextBuildId({ dir: __dirname }),
  productionBrowserSourceMaps: true,
  generateEtags: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  trailingSlash: true,
  // basePath: `/${process.env.NEXT_PUBLIC_SERVICE_NAME}`,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'max-age=0',
          },
          {
            key: 'Surrogate-Control',
            value: 'public, max-age=300',
          },
        ],
      },
    ]
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/privacy': { page: '/privacy' },
      '/pictures': { page: '/pictures' },
      '/covid': { page: '/covid' },
      '/about': { page: '/about' },
      '/inquiry': { page: '/inquiry' },
      '/profile': { page: '/profile' },
      '/preview': { page: '/preview' },
    }
  },
}
