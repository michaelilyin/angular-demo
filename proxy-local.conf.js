const PROXY_CONFIG = {
  '/api/v2/*': {
    'target': 'http://localhost:8081',
    'secure': false,
    'changeOrigin': true,
    'pathRewrite': {'api/v2' : 'api'}
  },
  'logLevel': 'debug'
};

module.exports = PROXY_CONFIG;
