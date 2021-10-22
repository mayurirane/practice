import { Injectable } from '@angular/core';

@Injectable()
export class RecordsService {
  info1: string[] = ["Mayuri", '01', "Mayuri@gmail.com"]
  info2: string[] = ["Seema", '02', "seema@gmail.com"]
  info3: string[] = ["Reena", '03', "reena@gmail.com"]
  
  getinfo1():string[]{
    return this.info1  
  }

  getinfo2():string[]{
    return this.info2  
  }

  getinfo3():string[]{
    return this.info3  
  }


  constructor() { }

}