import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
 name:string="Shama"
  emps:any;
  constructor(private es:EmpService) { 
    es.getEmps().subscribe(e=>this.emps=e);
  }
  onSubmit(data:any){
   console.log(data);
  //this.es.saveEmp(data).subscribe(e=>console.log(e));
  }

  ngOnInit(): void {
  }
}