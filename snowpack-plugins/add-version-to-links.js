const pkt = require('../package.json')

const version = pkt.version.replace(/\./gi, '-')

const defaultFileExt= ['.html', '.js']

function formatOptions(options) {
  const {
    exts = defaultFileExt,
  } = options || {};

  return {
    exts: Array.isArray(exts) && exts.length > 0 ? exts : defaultFileExt,
  };
}


module.exports = function (snowpackConfig, pluginOptions) {
  const { exts } = formatOptions(pluginOptions);
  return {
    name: "add-version-to-links",
    async transform({filePath, fileExt, contents}) {

      if (exts.find(ext => ext === fileExt)) {
        return contents.replace(/%__LIB_VERSION__%/gi, `v${version}`).replace(/%__LIB_VERSION_DOTS__%/gi, `v${pkt.version}`).replace(/%__MDC_VERSION__%/gi, `${pkt.dependencies["material-components-web"]}`)
      }
      return
    },
  };
}
