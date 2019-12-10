"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const service_1 = require("./service");
// import { map } from "rxjs/operators";
// import { async } from "rxjs/internal/scheduler/async";
const app = new koa_1.default();
const router = new koa_router_1.default();
const service = new service_1.Service();
router.get("/api/news", async (ctx) => {
    const usid = ctx.request.headers["x-usid"];
    const query = ctx.request.querystring;
    console.log(ctx.request);
    const p_news = await service.getNews(usid);
    const p_services = await service.getServiceDiscover(query);
    const [news, services] = await Promise.all([p_news, p_services]);
    ctx.body = { news: news, discoverServices: services };
});
router.post("/api/news2", async (ctx) => {
    console.log(ctx.request.ctx.body);
    console.log(ctx.body);
});
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8081);
console.log("Server running on port 8081");
//# sourceMappingURL=main.js.map