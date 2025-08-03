// Load configuration from environment or config file
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// Environment variable overrides
const config = {
  disableHotReload: process.env.DISABLE_HOT_RELOAD === 'true',
  analyzeBundle: process.env.ANALYZE_BUNDLE === 'true',
};

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig, { env, paths }) => {
      
      // Disable hot reload completely if environment variable is set
      if (config.disableHotReload) {
        // Remove hot reload related plugins
        webpackConfig.plugins = webpackConfig.plugins.filter(plugin => {
          return !(plugin.constructor.name === 'HotModuleReplacementPlugin');
        });
        
        // Disable watch mode
        webpackConfig.watch = false;
        webpackConfig.watchOptions = {
          ignored: /.*/, // Ignore all files
        };
      } else {
        // Add ignored patterns to reduce watched directories
        webpackConfig.watchOptions = {
          ...webpackConfig.watchOptions,
          ignored: [
            '**/node_modules/**',
            '**/.git/**',
            '**/build/**',
            '**/dist/**',
            '**/coverage/**',
            '**/public/**',
          ],
        };
      }

      // Production optimizations
      if (env === 'production') {
        // Enable tree shaking
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          usedExports: true,
          sideEffects: false,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
                priority: 10,
              },
              common: {
                name: 'common',
                minChunks: 2,
                chunks: 'all',
                priority: 5,
                reuseExistingChunk: true,
              },
              // Separate React and React DOM
              react: {
                test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                name: 'react',
                chunks: 'all',
                priority: 20,
              },
              // Separate Three.js and related libraries
              three: {
                test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
                name: 'three',
                chunks: 'all',
                priority: 15,
              },
              // Separate UI libraries
              ui: {
                test: /[\\/]node_modules[\\/](@radix-ui|lucide-react)[\\/]/,
                name: 'ui',
                chunks: 'all',
                priority: 12,
              },
            },
          },
          minimizer: [
            new TerserPlugin({
              terserOptions: {
                compress: {
                  drop_console: true,
                  drop_debugger: true,
                },
                mangle: true,
              },
              extractComments: false,
            }),
            new CssMinimizerPlugin(),
          ],
        };

        // Add compression plugin for gzip
        webpackConfig.plugins.push(
          new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8,
          })
        );

        // Add bundle analyzer if requested
        if (config.analyzeBundle) {
          webpackConfig.plugins.push(
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              openAnalyzer: false,
              reportFilename: 'bundle-report.html',
            })
          );
        }
      }

      // Optimize module resolution
      webpackConfig.resolve = {
        ...webpackConfig.resolve,
        fallback: {
          ...webpackConfig.resolve.fallback,
          fs: false,
          net: false,
          tls: false,
        },
      };

      // Add performance hints
      webpackConfig.performance = {
        hints: env === 'production' ? 'warning' : false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
      };

      return webpackConfig;
    },
  },
  // Optimize CSS processing
  style: {
    css: {
      loaderOptions: {
        sourceMap: false,
      },
    },
  },
};