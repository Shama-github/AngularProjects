import { Component, OnInit } from '@angular/core';
import { DemoapiService } from '../demoapi.service';

@Component({
  selector: 'app-callapi',
  templateUrl: './callapi.component.html',
  styleUrls: ['./callapi.component.css']
})
  export class CallapiComponent implements OnInit {
    emps:any;
    constructor(demo:DemoapiService) 
    {
      //demo.getData().subscribe(p=>console.log(p));
      demo.getData().subscribe(e=>this.emps=e);
     }
  ngOnInit(): void {
  }

}
