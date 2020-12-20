module.exports = {
  extends: "@snowpack/app-scripts-react",
  devOptions : {
    output: 'stream'
  },
  mount: {
    public: "/",
    src: "/src-modules"
  },
  plugins: [
    ["snowpack-plugin-baseurl-handler", {
      exts: [".html", ".js", ".jsx", ".css"],
      baseUrl: '/blocket/blocket-web-material-design',
    }],
    "./snowpack-plugins/add-version-to-links.js",
    ["snowpack-plugin-raw-file-loader", {
      exts: [".md"],
    }],
    "@snowpack/plugin-dotenv",
  ],
  installOptions: {
    "installTypes": true
  },
  install: ["react-router-dom"],
  buildOptions: {
    metaDir: 'metadata',
    minify: false,
  },
  alias: {
    "@src" : './src',
    "@node_modules" : './node_modules',
    "@root" : './'
  },
}
