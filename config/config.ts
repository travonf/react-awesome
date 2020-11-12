import { defineConfig } from 'umi';
import layout from './layout';
import routes from './routes';
import theme from './theme';

export default defineConfig({
  title: 'React Components',

  favicon: '/assets/react.ico',

  // https://umijs.org/zh-CN/guide/boost-compile-speed
  nodeModulesTransform: {
    type: 'none',
  },

  // https://umijs.org/zh-CN/plugins/plugin-antd
  antd: {
    dark: false,
    compact: false,
  },

  // https://umijs.org/zh-CN/plugins/plugin-dva
  dva: {
    hmr: true,
    immer: true,
  },

  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {},

  // https://umijs.org/zh-CN/plugins/plugin-layout
  layout,

  // https://umijs.org/zh-CN/docs/routing#routes
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
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

  // https://umijs.org/zh-CN/config#theme
  theme,
});
