export default {
  '/static': {
    target: 'http://127.0.0.1',
    changeOrigin: true,
    proxyTimeout: 1000 * 60 * 30,
    timeout: 1000 * 60 * 30,
  },
};
