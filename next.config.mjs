/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Add your custom webpack config here
        config.module.rules.push({
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                publicPath: `/_next/static/videos/`,
                outputPath: `${isServer ? '../' : ''}static/videos/`,
              },
            },
          ],
        });
    
        // Important: return the modified config
        return config;
      },
};

export default nextConfig;
