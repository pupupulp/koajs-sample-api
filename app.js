const Koa = require('koa');
const Router = require('koa-router');
const Logger = require('koa-logger');

const app = new Koa();
const router = new Router();

app.use(Logger());

router.get('/', (ctx, next) => {
	ctx.body = 'Hello World!';
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);