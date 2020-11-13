import { defineConfig } from 'umi';
import layout from './layout';
import routes from './routes';
import theme from './theme';
import plugins from './plugins';
import chainWebpack from './webpack.config';
import proxy from './proxy';

// prettier-ignore
const scripts = [
  {name: 'react',     globalName: 'React',     version: '16.13.1', dev: 'umd/react.development.js',     pro: 'umd/react.development.min.js'},
  {name: 'react-dom', globalName: 'ReactDOM',  version: '16.13.1', dev: 'umd/react-dom.development.js', pro: 'umd/react-dom.production.min.js'},
  {name: 'moment',    globalName: 'moment',    version: '2.27.0',  dev: 'moment.js',                    pro: 'moment.min.js'},
  {name: 'lodash',    globalName: '_',         version: '4.17.19', dev: 'lodash.js',                    pro: 'lodash.min.js'},
  {name: 'ramda',     globalName: 'R',         version: '0.27.1',  dev: 'dist/ramda.js',                pro: 'dist/ramda.min.js'},
];

const cdn = ({ name, version, dev, pro }: any) => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return `//cdn.jsdelivr.net/npm/${name}@${version}/${dev}`;
    case 'production':
      return `//cdn.jsdelivr.net/npm/${name}@${version}/${pro}`;
    default:
      return undefined;
  }
};

export default defineConfig({
  title: 'React Components',

  favicon: '/assets/react.ico',

  /**
   * https://umijs.org/zh-CN/config#analyze
   */
  analyze: {
    analyzerMode: 'server',
    analyzerHost: '0.0.0.0',
    analyzerPort: '8001',
    defaultSizes: 'parsed',
    openAnalyzer: false,
  },

  /**
   * https://umijs.org/zh-CN/config#base
   * 设置路由前缀，通常用于部署到非根目录。
   */
  base: '/react-components',

  /**
   * https://umijs.org/zh-CN/config#publicpath
   * 配置 webpack 的 publicPath。当打包的时候，webpack 会在静态文件路径前面添加 publicPath 的值，
   * 当你需要修改静态文件地址时，比如使用 CDN 部署，把 publicPath 的值设为 CDN 的值就可以。
   * 如果使用一些特殊的文件系统，比如混合开发或者 cordova 等技术，可以尝试将 publicPath 设置成 ./。
   */
  publicPath: '/react-components/',

  /**
   * https://umijs.org/zh-CN/config#exportstatic
   * 配置 html 的输出形式，默认只输出 index.html。
   * 如果需要预渲染，请开启 ssr 配置，常用来解决没有服务端情况下，页面的 SEO 和首屏渲染提速。
   * 如果开启 exportStatic，则会针对每个路由输出 html 文件。
   */
  exportStatic: {},

  /**
   * https://umijs.org/zh-CN/guide/boost-compile-speed
   */
  nodeModulesTransform: {
    type: 'none',
  },

  /**
   * https://umijs.org/zh-CN/plugins/plugin-antd
   */
  antd: {
    dark: false,
    compact: false,
  },

  /**
   * https://umijs.org/zh-CN/plugins/plugin-dva
   */
  dva: {
    hmr: true,
    immer: true,
  },

  /**
   * https://umijs.org/zh-CN/config#dynamicimport
   */
  dynamicImport: {
    loading: '@/components/PageLoading',
  },

  /**
   * https://umijs.org/zh-CN/config#externals
   * https://umijs.org/zh-CN/guide/boost-compile-speed#配置-externals
   * scripts.map(({name, globalName}) => ({[name]: globalName})).reduce((acc, cur) => ({...acc, ...cur}),{})
   */
  // prettier-ignore
  externals: {
    'react':     'React',
    'react-dom': 'ReactDOM',
    'moment':    'moment',
    'lodash':    '_',
    'ramda':     'R',
  },

  /**
   * 引入被 external 库的 scripts
   */
  scripts: scripts.map(cdn),

  /**
   * https://umijs.org/zh-CN/config#styles
   * 配置额外 CSS
   */
  /*
   styles,
   */

  /**
   * https://umijs.org/zh-CN/plugins/plugin-locale
   */
  locale: {},

  /**
   * https://umijs.org/zh-CN/plugins/plugin-layout
   */
  layout,

  /**
   * https://umijs.org/zh-CN/docs/routing#routes
   * umi 的路由基于 react-router@5 实现，配置和 react-router 基本一致，详见路由配置章节。
   */
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      flatMenu: true,
      routes: [
        {
          path: '/',
          redirect: '/layouts/react-blocks',
        },
        ...routes,
      ],
    },
  ],

  /**
   * https://umijs.org/zh-CN/config#theme
   * 配置主题，实际上是配 less 变量
   */
  theme,

  /**
   * https://umijs.org/zh-CN/config#plugins
   * 配置额外的 umi 插件。
   * 数组项为指向插件的路径，可以是 npm 依赖、相对路径或绝对路径。如果是相对路径，则会从项目根目录开始找。
   */
  plugins,

  /**
   * https://umijs.org/zh-CN/config#chainwebpack
   * 通过 webpack-chain 的 API 修改 webpack 配置。
   */
  chainWebpack,

  chunks: [
    // 'utils',
    // 'reacts',
    'ant-design',
    'editor',
    'charts',
    'vendors',
    'umi',
  ],

  /**
   * https://umijs.org/zh-CN/config#proxy
   * 配置代理能力
   */
  proxy,
});
