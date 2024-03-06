// src/setupProxy.js :: 스프링부트랑 통신을 하기위한 프록시 설정

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:80', //서버 URL or localhost:설정한포트번호
            changeOrigin: true,
        })
    );
};
