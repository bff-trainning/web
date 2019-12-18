import {sum, Service} from './service';
import { async } from 'rxjs/internal/scheduler/async';
import { ServiceManagerService } from 'cn-doscover-api';



describe("SUM TEST", () => {
  let service :Service;
  beforeEach(() => {
    service = new Service();
  });
  // spyOn(service, 'getNews').and.returnValue(
  //   Promise.resolve("news"),
  // );

  
  // describe('SUM',async ()=>{
  //     it('SUM',async ()=>{
  //     const res = await service.getNews("");
  //     expect(res).toEqual("news");

  //     });

  // });


  test("SUM TEST", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

