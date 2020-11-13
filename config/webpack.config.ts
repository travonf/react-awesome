import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

const chainWebpack: any = (config: any, { webpack }: any) => {
  config.optimization.splitChunks({
    // chunks: 'all',
    // minSize: 30000,
    // minChunks: 3,
    // automaticNameDelimiter: '.',
    cacheGroups: {
      /*
      // 工具库相关
      utils: {
        name: 'utils',
        chunks: 'all',
        test: /[\\/]node_modules[\\/](lodash|ramda|moment)[\\/]/,
        priority: 13,
      },

      // 组件库相关
      reacts: {
        name: 'reacts',
        chunks: 'all',
        test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|antd|@ant-design)[\\/]/,
        priority: 12,
      },
      */

      // 组件库
      antd: {
        name: 'ant-design',
        chunks: 'all',
        test: /[\\/]node_modules[\\/](antd|@ant-design)[\\/]/,
        priority: 12,
        enforce: true,
      },

      // 编辑器
      editor: {
        name: 'editor',
        chunks: 'all',
        test: /[\\/]node_modules[\\/](draft-js|braft-editor|(react-)?quill|slate(-react|-history)?|(react-)?codemirror2?|(react-)?monaco-editor)[\\/]/,
        priority: 11,
        enforce: true,
      },

      // 图表库相关
      charts: {
        name: 'charts',
        chunks: 'all',
        test: /[\\/]node_modules[\\/](@antv|bizcharts|echarts|react-sparklines)[\\/]/,
        priority: 11,
        enforce: true,
      },

      vendors: {
        name: 'vendors',
        chunks: 'all',
        test: /[\\/]node_modules[\\/]/,
        priority: 10,
        enforce: true,
      },
    },
  });
  config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
    {
      languages: ['json', 'html', 'javascript', 'typescript'],
    },
  ]);
};

export default chainWebpack;
