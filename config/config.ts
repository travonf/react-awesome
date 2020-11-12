import { defineConfig } from 'umi';

export default defineConfig({
  title: 'React Components',

  favicon: '/assets/react.ico',

  nodeModulesTransform: {
    type: 'none',
  },
});
