import * as env from "dotenv";
interface Config {
  Environment: string;
  NewSBaseUrl: string;
  DiscoverService_URL:string;
}

env.config();

export const config: Config = {
  Environment: process.env.CURRENT_ENV,
  NewSBaseUrl: process.env.BASE_URL,
  DiscoverService_URL: process.env.SERVICE_MANAGER_URL
};
