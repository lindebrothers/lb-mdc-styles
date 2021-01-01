const path = require("path")
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const combineSelectors = require('postcss-combine-duplicated-selectors');
const CssnanoPlugin = require('cssnano-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const pkt = require('./package.json')
const fs = require('fs')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const version = pkt.version.replace(/\./gi, '-')
const filenames = {
  base: {js:`base.js`,css: `base.css`},
  helpers: {js:`helpers.js`,css: `helpers.css`},
  fonts: {js:`font-styles.js`, css: `font-styles.css`},
  dir: {name: process.env.NODE_ENV === 'development' || process.env.BUILD_TYPE === 'gh-pages' ? `public/webpack/v${version}` : `dist/v${version}`},
  location: {name: process.env.NODE_ENV === 'development' ? `/webpack/v${version}` : `${process.env.BUILD_TYPE === 'gh-pages' ? `/lb-mdc-styles/webpack/v${version}`: `https://mdc.lindebros.com/v${version}`}`}
}

class ChangeStaticFileLocationWebpackPlugin {
  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync(
      'ChangeStaticFileLocationWebpackPlugin',
      (compilation, callback) => {
        const fileEditor = async ({file}) => {
          await fs.readFile(file, 'utf-8' , (err, data) => {
            const output = data.replace(/\/__LIB_LOCATION__/gi, `${filenames.location.name}`)
            fs.writeFileSync(file, output)
          })
        }
        fileEditor({file: `${filenames.dir.name}/font-styles.css`})
        callback()
      }
    );
  }
}


function tryResolve_(url, sourceFilename) {
  // Put require.resolve in a try/catch to avoid node-sass failing with cryptic libsass errors
  // when the importer throws
  try {
    return require.resolve(url, {paths: [path.dirname(sourceFilename)]});
  } catch (e) {
    return '';
  }
}

function tryResolveScss(url, sourceFilename) {
  // Support omission of .scss and leading _
  const normalizedUrl = url.endsWith('.scss') ? url : `${url}.scss`;
  return tryResolve_(normalizedUrl, sourceFilename) ||
    tryResolve_(path.join(path.dirname(normalizedUrl), `_${path.basename(normalizedUrl)}`),
      sourceFilename);
}

function materialImporter(url, prev) {
  if (url.startsWith('@material')) {
    const resolved = tryResolveScss(url, prev);
    return {file: resolved || url};
  }
  return {file: url};
}



module.exports = [
  {
    entry: ['./lib/scss/entry-test.scss'],
    output: {
      filename: filenames.base.js,
      path: path.resolve(__dirname, 'bakery')
    },
    mode: process.env.NODE_ENV,
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [

            {
              loader: 'file-loader',
              options: {
                name: filenames.base.css,
              },
            },
            { loader: 'extract-loader' },
            { loader: 'css-loader' },
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                webpackImporter: false,
                sassOptions: {
                  includePaths: [
                    'node_modules',
                  ],
                },
                importer: materialImporter
              }
            }
          ]
        },
      ]
    },
    plugins: [
      new OptimizeCssAssetsPlugin({
        //assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['advanced', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      })
    ],
  },
  {
    entry: ['./bakery/base.css'],
    output: {
      filename: filenames.base.js,
      path: path.resolve(__dirname, filenames.dir.name)
    },
    mode: process.env.NODE_ENV,
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: filenames.base.css,
              },
            },
            { loader: 'extract-loader' },
            { loader: 'css-loader' },
          ]
        },
      ]
    },
    plugins: [
      new OptimizeCssAssetsPlugin({
        //assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['advanced', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      })
    ],
  }
];