import Koa from "koa";
import Router from "koa-router";
import { Service } from "./service";
import { config } from "./configuration";

// import { map } from "rxjs/operators";
// import { async } from "rxjs/internal/scheduler/async";


if (process.env.CURRENT_ENV !== "production") {
  const monitor = require("easy-monitor");
  monitor("BFF-WEB");
}





const app = new Koa();
const router = new Router();
const service = new Service();
router.get("/", async ctx => {
  ctx.body = "hello";
});

router.get("/api/news", async ctx => {
  const usid = ctx.request.headers["x-usid"];
  const query = ctx.request.querystring;
  console.log(ctx.request);
  const p_news = await service.getNews(usid);
  const p_services = await service.getServiceDiscover(query);
  const [news, services] = await Promise.all([p_news, p_services]);
  ctx.body = { news: news, discoverServices: services };
});

router.post("/api/news2", async ctx => {
  console.log(ctx.request.ctx.body);
  console.log(ctx.body);
});


app.use(router.routes());
app.use(router.allowedMethods());
app.listen(80);
console.log("Server running on port 80");


