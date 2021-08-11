import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  apiurl='http://localhost:63872/api/Employee/';
  constructor(private http:HttpClient) { }
  getEmps(){
    return this.http.get(this.apiurl);
  }

  getEmp(id:number){
    return this.http.get(this.apiurl+id);
  }
  saveEmp(emp:any)
  {
    return this.http.post(this.apiurl,emp);
 
  }

  updateEmp(id:number,emp:any){
    return this.http.put(this.apiurl+id,emp);
  }

  deleteEmp(id:number){
    return this.http.delete(this.apiurl+id);
  }
}
