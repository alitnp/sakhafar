const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		"/api",
		createProxyMiddleware({
			target: "https://www.coincalculators.io",
			changeOrigin: true,
			pathRewrite: {
				"^/api": "/api?name=bitcoin&hashrate=1000000000000", // rewrite path
			},
		})
	);

	app.use(
		"/money",
		createProxyMiddleware({
			target: "https://www.megaweb.ir/api",
			changeOrigin: true,
		})
	);
};
