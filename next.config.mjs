/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'static/media/[name].[hash][ext]'
        },
      },
      {
        test: /\.pdf$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/documents/[name][ext]'
        }
      }
    );

    return config;
  },
};

export default nextConfig;
