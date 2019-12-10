"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_1 = require("./configuration");
const cn_doscover_api_1 = require("cn-doscover-api");
class Service {
    constructor() {
        this._managerService = new cn_doscover_api_1.ServiceManagerService();
    }
    async getNews(usid) {
        try {
            return this._managerService.getNews(configuration_1.config.NewSBaseUrl, usid);
        }
        catch (error) {
            console.log(error);
        }
    }
    async getServiceDiscover(query) {
        console.log(query);
        try {
            return this._managerService.getServiceDiscover(configuration_1.config.DiscoverService_URL, query);
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.Service = Service;
//# sourceMappingURL=service.js.map