import { IBestAFSRoute } from '@umijs/plugin-layout';
import omit from 'omit.js';

import reactBlocks from 'react-blocks/package.json';
import reactFlexboxGrid from 'react-flexbox-grid/package.json';
import rebassGrid from '@rebass/grid/package.json';
import reactSplitPane from 'react-split-pane/package.json';

import reactMedia from 'react-media/package.json';
import reactResponsive from 'react-responsive/package.json';

// import antMotion from 'ant-motion/package.json';
import reactMove from 'react-move/package.json';
import reactSpring from 'react-spring/package.json';
import reactTextLoop from 'react-text-loop/package.json';

import antDesignCharts from '@ant-design/charts/package.json';
import reactSparklines from 'react-sparklines/package.json';

import reactIcons from 'react-icons/package.json';

import rcColorPicker from 'rc-color-picker/package.json';
import reactColor from 'react-color/package.json';

import reactBeautifulDnd from 'react-beautiful-dnd/package.json';
import reactDnd from 'react-dnd/package.json';
import reactResizable from 'react-resizable/package.json';
import reactSortableHoc from 'react-sortable-hoc/package.json';

import slate from 'slate/package.json';
import braftEditor from 'braft-editor/package.json';
import reactQuill from 'react-quill/package.json';
import reactCodemirror2 from 'react-codemirror2/package.json';
import reactMonacoEditor from 'react-monaco-editor/package.json';

import reactDiffViewer from 'react-diff-viewer/package.json';
import reactGhLikeDiff from 'react-gh-like-diff/package.json';
import reactHighlightWords from 'react-highlight-words/package.json';
import reactJsonView from 'react-json-view/package.json';
import reactMarkdown from 'react-markdown/package.json';
import reactSyntaxHighlighter from 'react-syntax-highlighter/package.json';

import reactAmap from 'react-amap/package.json';
import reactGoogleMaps from 'react-google-maps/package.json';
import googleMapReact from 'google-map-react/package.json';

import reactPdf from 'react-pdf/package.json';
import reactPdfExport from 'jspdf/package.json'; // jsPdf + htmlCanvas
import reactPdfRenderer from '@react-pdf/renderer/package.json';

import antdImgCrop from 'antd-img-crop/package.json';
import reactImageCrop from 'react-image-crop/package.json';

import reactPlayer from 'react-player/package.json';
import videoReact from 'video-react/package.json';
import videoJs from 'video.js/package.json';

import reactHelmet from 'react-helmet/package.json';
import reactHelmetAsync from 'react-helmet-async/package.json';

import emojiMart from 'emoji-mart/package.json';

import infiniteScroll from 'infinite-scroll/package.json';

import nprogress from 'nprogress/package.json';

import qrcodeReact from 'qrcode-react/package.json';

import reactIntl from 'react-intl/package.json';

import reactCopyToClipboard from 'react-copy-to-clipboard/package.json';

import reactContexify from 'react-contexify/package.json';
import reactContextmenu from 'react-contextmenu/package.json';

const antMotion = {
  name: 'ant-motion',
  version: '1.7.0',
  title: 'Ant Motion',
  description: 'react animation component',
  homepage: 'http://motion.ant.design/',
  repository: {
    type: 'git',
    url: 'https://github.com/ant-design/ant-motion',
  },
  license: 'MIT',
  dependencies: {
    'rc-animate': '^2.6.0',
    'rc-banner-anim': '^2.2.3',
    'rc-drawer': '^3.0.2',
    'rc-queue-anim': '^1.7.0',
    'rc-scroll-anim': '^2.6.1',
    'rc-texty': '^0.2.0',
    'rc-tween-one': '^2.4.0',
  },
  devDependencies: {
    antd: '^3.13.2',
    'antd-tools': '^7.0.0',
    'babel-eslint': '^10.0.1',
    bisheng: '^1.1.0',
    'bisheng-plugin-antd': '^1.0.0',
    'bisheng-plugin-description': '^0.1.4',
    'bisheng-plugin-react': '^1.0.0',
    'bisheng-plugin-toc': '^0.4.4',
    'core-js': '^3.0.1',
    'cross-env': '^7.0.0',
    'enquire-js': '^0.2.1',
    eslint: '^7.1.0',
    'eslint-config-airbnb': '^18.0.0',
    'eslint-loader': '^3.0.0',
    'eslint-plugin-babel': '^5.1.0',
    'eslint-plugin-compat': '^3.1.1',
    'eslint-plugin-import': '^2.14.0',
    'eslint-plugin-jsx-a11y': '^6.1.2',
    'eslint-plugin-markdown': '^1.0.0-beta.6',
    'eslint-plugin-react': '^7.11.1',
    'eslint-tinker': '^0.5.0',
    'jsonml.js': '^0.1.0',
    'pre-commit': '1.x',
    'prop-types': '15.x',
    react: '^16.4.0',
    'react-document-title': '^2.0.1',
    'react-dom': '^16.4.0',
    'react-github-button': '^0.1.11',
    'react-intl': '^3.2.0',
    'react-router': '~5.1.2',
    'react-sublime-video': '^0.2.0',
    stylelint: '^13.1.0',
    'stylelint-config-standard': '^20.0.0',
    '@typescript-eslint/eslint-plugin': '^2.15.0',
  },
  'pre-commit': ['lint'],
  scripts: {
    start:
      'rm -rf _site && cross-env NODE_ENV=development bisheng start -c ./site/bisheng.config.js',
    build:
      'rm -rf _site && cross-env NODE_ENV=production bisheng build -c ./site/bisheng.config.js',
    site: 'npm run build',
    deploy: 'npm run site && cp CNAME _site && bisheng gh-pages --push-only',
    lint: 'npm run lint:es && npm run lint:style',
    'lint:es': "eslint --fix --ext '.js,.jsx' site",
    'lint:style': 'stylelint --fix "site/**/*.less" --syntax less',
    'lint:demo': "cross-env RUN_ENV=DEMO eslint ./ --ext '.md' -c ./.eslintrc.js",
    test: 'npm run lint',
  },
};

const routes: IBestAFSRoute[] = [
  // 布局库
  {
    name: 'layouts',
    path: 'layouts',
    icon: 'Layout',
    // menu: { name: 'layouts' },
    routes: [
      {
        ...reactBlocks,
        // name: 'react-blocks',
        path: 'react-blocks',
        component: '@/pages/layouts/react-blocks',
      },
      {
        ...reactFlexboxGrid,
        // name: 'react-flexbox-grid',
        path: 'react-flexbox-grid',
        component: '@/pages/layouts/react-flexbox-grid',
      },
      {
        ...rebassGrid,
        // name: 'rebass-grid',
        path: '@rebass/grid',
        component: '@/pages/layouts/rebass-grid',
      },
      {
        ...reactSplitPane,
        path: 'react-split-pane',
        component: '@/pages/layouts/react-split-pane',
      },
    ],
  },
  // 响应式
  {
    name: 'responsive',
    path: 'responsive',
    icon: 'ColumnWidth',
    routes: [
      {
        ...reactMedia,
        path: 'react-media',
        component: '@/pages/responsive/react-media',
      },
      {
        ...reactResponsive,
        path: 'react-responsive',
        component: '@/pages/responsive/react-responsive',
      },
    ],
  },
  // 动画库
  {
    name: 'animation',
    path: 'animation',
    icon: 'Thunderbolt',
    // menu: { name: 'animation', icon: 'animation' },
    routes: [
      {
        ...antMotion,
        // name: 'ant-motion',
        path: 'ant-motion',
        component: '@/pages/animation/ant-motion',
        // menu: { name: 'Ant-Motion', icon: 'loading' },
      },
      {
        ...reactMove,
        // name: 'react-move',
        path: 'react-move',
        component: '@/pages/animation/react-move',
        // menu: { name: 'react-move', icon: 'loading' },
      },
      {
        ...reactSpring,
        // name: 'react-spring',
        path: 'react-spring',
        component: '@/pages/animation/react-spring',
        // menu: { name: 'react-spring', icon: 'loading' },
      },
      {
        ...reactTextLoop,
        // name: 'react-text-loop',
        path: 'react-text-loop',
        component: '@/pages/animation/react-text-loop',
        // menu: { name: 'react-text-loop' },
      },
    ],
  },
  // 图表库
  {
    name: 'charts',
    path: 'charts',
    icon: 'AreaChart',
    // menu: { name: 'Charts', icon: 'Chart' },
    routes: [
      {
        ...antDesignCharts,
        // name: 'ant-design',
        path: '@ant-design/charts',
        // menu: { name: 'Ant Design', icon: 'AntDesign' },
        component: '@/pages/charts/ant-design',
      },
      /*
            {
              path: 'biz-charts',
              name: 'Biz-Charts',
              component: '@/pages/charts/biz-charts',
              icon: 'bar-chart',
              desc: '图表组件',
              keywords: [],
              homepage: 'https://bizcharts.net/index',
              bugs: {
                url: '',
              },
              repository: {
                type: 'git',
                url: '',
              },
            },
            */
      {
        ...reactSparklines,
        path: 'react-sparklines',
        component: '@/pages/charts/react-sparklines',
      },
    ],
  },
  // 图标库
  {
    name: 'icons',
    path: 'icons',
    icon: 'Smile',
    // menu: { name: 'Icons', icon: 'Icon' },
    routes: [
      {
        ...reactIcons,
        path: 'react-icons',
        component: '@/pages/icons/react-icons',
        // menu: { name: 'react-icons', icon: 'heart' },
      },
    ],
  },
  // 拾色器
  {
    name: 'color-picker',
    path: 'color-picker',
    icon: 'BgColors',
    // menu: { name: 'color-picker' },
    routes: [
      {
        ...rcColorPicker,
        path: 'rc-color-picker',
        component: '@/pages/color-picker/rc-color-picker',
      },
      {
        ...reactColor,
        path: 'react-color',
        // menu: { name: 'React Color', icon: 'React' },
        component: '@/pages/color-picker/react-color',
      },
    ],
  },
  // 拖拽库
  {
    name: 'drag-and-drop',
    path: 'drag-and-drop',
    icon: 'Drag',
    // menu: { name: 'drag-and-drop' },
    routes: [
      {
        ...omit(reactBeautifulDnd, ['scripts']),
        path: 'react-beautiful-dnd',
      },
      {
        ...reactDnd,
        path: 'react-dnd',
      },
      {
        ...reactResizable,
        path: 'react-resizable',
        // menu: { name: 'react-resizable', icon: 'React' },
        component: '@/pages/drag-and-drop/react-resizable',
      },
      {
        ...reactSortableHoc,
        path: 'react-sortable-hoc',
        // menu: { name: 'react-sortable', icon: 'React' },
        component: '@/pages/drag-and-drop/react-sortable-hoc',
      },
    ],
  },
  // 文本编辑器
  {
    name: 'text-editor',
    path: 'text-editor',
    icon: 'Edit',
    // menu: { name: 'text-editor' },
    routes: [
      {
        ...slate,
        path: 'slate',
        component: '@/pages/text-editor/slate',
        homepage: 'https://www.slatejs.org/',
        bugs: {
          url: 'https://github.com/ianstormtaylor/slate/issues',
        },
      },
      {
        ...braftEditor,
        // name: 'braft-editor',
        path: 'braft-editor',
        // menu: { name: 'braft-editor' },
        component: '@/pages/text-editor/braft-editor',
      },
      {
        ...reactQuill,
        // name: 'react-quill',
        path: 'react-quill',
        // menu: { name: 'react-quill' },
        component: '@/pages/text-editor/react-quill',
      },
      {
        ...reactCodemirror2,
        // name: 'react-codemirror2',
        path: 'react-codemirror2',
        // menu: { name: 'react-codemirror2' },
        component: '@/pages/text-editor/react-codemirror2',
      },
      {
        ...reactMonacoEditor,
        // name: 'react-monaco-editor',
        path: 'react-monaco-editor',
        // menu: { name: 'react-monaco-editor' },
        component: '@/pages/text-editor/react-monaco-editor',
      },
    ],
  },
  // 文本查看器
  {
    name: 'text-viewer',
    path: 'text-viewer',
    icon: 'Read',
    // menu: { name: 'text-viewer' },
    routes: [
      {
        ...reactDiffViewer,
        // name: 'react-diff-viewer',
        path: 'react-diff-viewer',
        component: '@/pages/text-viewer/react-diff-viewer',
        // menu: { name: 'react-diff-viewer', icon: 'code' },
      },
      {
        ...reactGhLikeDiff,
        // name: 'react-gh-like-diff',
        path: 'react-gh-like-diff',
        component: '@/pages/text-viewer/react-gh-like-diff',
        // menu: { name: 'react-gh-like-diff', icon: 'code' },
      },
      {
        ...reactHighlightWords,
        // name: 'react-highlight-words',
        path: 'react-highlight-words',
        component: '@/pages/text-viewer/react-highlight-words',
        // menu: { name: 'react-highlight-words' },
      },
      {
        ...reactJsonView,
        // name: 'react-json-view',
        path: 'react-json-view',
        component: '@/pages/text-viewer/react-json-view',
        // menu: { name: 'react-json-view', icon: 'code' },
      },
      {
        ...reactMarkdown,
        // name: 'react-markdown',
        path: 'react-markdown',
        component: '@/pages/text-viewer/react-markdown',
        // menu: { name: 'react-markdown' },
      },
      {
        ...reactSyntaxHighlighter,
        // name: 'react-syntax-highlighter',
        path: 'react-syntax-highlighter',
        component: '@/pages/text-viewer/react-syntax-highlighter',
        // menu: { name: 'react-syntax-highlighter', icon: 'code' },
      },
    ],
  },
  // 地图库
  {
    name: 'map',
    path: 'map',
    icon: 'HeatMap',
    routes: [
      {
        ...reactAmap,
        path: 'react-amap',
        component: '@/pages/map/react-amap',
      },
      {
        ...omit(reactGoogleMaps, ['scripts']),
        path: 'react-google-maps',
        component: '@/pages/map/react-google-maps',
      },
      {
        ...googleMapReact,
        path: 'google-map-react',
        component: '@/pages/map/google-map-react',
      },
    ],
  },
  // 媒体库
  {
    name: 'media',
    path: 'media',
    icon: 'Picture',
    routes: [
      {
        name: 'document',
        path: 'document',
        routes: [
          {
            ...reactPdf,
            // name: 'react-pdf',
            path: 'react-pdf',
            component: '@/pages/media/document/react-pdf',
            // menu: { name: 'react-pdf', icon: 'printer' },
          },
          {
            ...reactPdfExport,
            // name: 'react-pdf-export',
            path: 'react-pdf-export',
            component: '@/pages/media/document/react-pdf-export',
          },
          {
            description: '📄 React renderer for creating PDF files on the browser and server', // prettier-ignore
            keywords: ['react', 'pdf', 'renderer', 'flexbox'],
            ...reactPdfRenderer,
            // name: 'react-pdf-renderer',
            path: 'react-pdf-renderer',
            component: '@/pages/media/document/react-pdf-renderer',
          },
        ],
      },
      {
        name: 'image',
        path: 'image',
        routes: [
          {
            ...antdImgCrop,
            // name: 'antd-img-crop',
            path: 'antd-img-crop',
          },
          {
            ...reactImageCrop,
            // name: 'react-image-crop',
            path: 'react-image-crop',
          },
        ],
      },
      {
        name: 'music',
        path: 'music',
      },
      {
        name: 'video',
        path: 'video',
        routes: [
          {
            ...reactPlayer,
            // name: 'react-player',
            path: 'react-player',
          },
          {
            ...videoReact,
            // name: 'video-react',
            path: 'video-react',
          },
          {
            ...videoJs,
            // name: 'video.js',
            path: 'video.js',
          },
        ],
      },
    ],
  },
  // 其他库
  {
    name: 'zoo',
    path: 'zoo',
    icon: 'Star',
    // menu: { name: 'other' },
    routes: [
      {
        ...emojiMart,
        // name: 'emoji-mart',
        path: 'emoji-mart',
        component: '@/pages/zoo/emoji-mart',
      },
      {
        ...infiniteScroll,
        // name: 'infinite-scroll',
        path: 'infinite-scroll',
        component: '@/pages/zoo/infinite-scroll',
      },
      {
        ...nprogress,
        // name: 'nprogress',
        path: 'nprogress',
        component: '@/pages/zoo/nprogress',
        author: 'Rico Sta. Cruz <hi@ricostacruz.com>',
      },
      {
        ...qrcodeReact,
        // name: 'qrcode-react',
        path: 'qrcode-react',
        component: '@/pages/zoo/qrcode-react',
      },
      {
        ...reactContexify,
        // name: 'react-contexify',
        path: 'react-contexify',
        component: '@/pages/zoo/react-contexify',
      },
      {
        ...reactContextmenu,
        // name: 'react-contextmenu',
        path: 'react-contextmenu',
        component: '@/pages/zoo/react-contextmenu',
        // menu: { name: 'react-contextmenu', icon: 'menu' },
      },
      {
        ...omit(reactCopyToClipboard, ['config']),
        // name: 'react-copy-to-clipboard',
        path: 'react-copy-to-clipboard',
        component: '@/pages/zoo/react-copy-to-clipboard',
      },
      {
        ...reactHelmet,
        // name: 'react-helmet',
        path: 'react-helmet',
        component: '@/pages/zoo/react-helmet',
      },
      {
        ...reactHelmetAsync,
        // name: 'react-helmet-async',
        path: 'react-helmet-async',
        component: '@/pages/zoo/react-helmet-async',
      },
      {
        ...reactIntl,
        // name: 'react-intl',
        path: 'react-intl',
        component: '@/pages/zoo/react-intl',
      },
    ],
  },
];

export default routes;
