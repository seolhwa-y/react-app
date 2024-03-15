// src/setupProxy.js :: 스프링부트랑 통신을 하기위한 프록시 설정

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:80', //서버 URL or localhost:설정한포트번호
            pathRewrite: {
                //naver_api로 시작되는 url을 자동 인식 -> 프록시 처리, /naver_api는 ""로 대체됨
                '^/api': '',
            },
            changeOrigin: true,
        })
    );
};
