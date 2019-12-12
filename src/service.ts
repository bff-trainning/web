import axios, { AxiosInstance } from "axios";
import { from, of } from "rxjs";
import { config } from "./configuration";
import { ServiceManagerService } from "cn-doscover-api";
export class Service {
  private _managerService: ServiceManagerService
  constructor(){
    this._managerService = new ServiceManagerService();
  }

  async getNews(usid: string) {
    try {

      return this._managerService.getNews(config.NewSBaseUrl,usid);
    } catch (error) {
      console.log(error);
    }
  }


  async getServiceDiscover(query:string){
    console.log(query);
    try {
      return this._managerService.getServiceDiscover(config.DiscoverService_URL,query);
    } catch (error) {
      console.log(error);
    }
  }


}

export const sum = (a:number,b:number) => {
  return a + b;
};
