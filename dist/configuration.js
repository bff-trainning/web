"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const env = __importStar(require("dotenv"));
env.config();
exports.config = {
    Environment: process.env.CURRENT_ENV,
    NewSBaseUrl: process.env.BASE_URL,
    DiscoverService_URL: process.env.SERVICE_MANAGER_URL
};
//# sourceMappingURL=configuration.js.map