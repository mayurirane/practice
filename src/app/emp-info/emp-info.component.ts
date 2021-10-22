import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [RecordsService],
})
export class EmpInfoComponent implements OnInit {
  inforecieved1: string[] = [];
  inforecieved2: string[] = [];
  inforecieved3: string[] = [];

  getinfoFromServiceClass1(){
    this.inforecieved1 = this.rservice.getinfo1()
  }

  getinfoFromServiceClass2(){
    this.inforecieved2 = this.rservice.getinfo2()
  }

  getinfoFromServiceClass3(){
    this.inforecieved3 = this.rservice.getinfo1()
  }

  constructor(private rservice: RecordsService) {}

  ngOnInit() {}
}
