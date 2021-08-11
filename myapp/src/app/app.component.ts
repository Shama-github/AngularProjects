import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Shama';
  
  games=["hockey","football","tennis"];
  emp={'eid':101,'ename':'sneha'}

  emps=[
    {'eid':101,'ename':'Tarun','sal':89000,'gender':'M','retired':false,'doj':new Date("1999-01-04")},
    {'eid':102,'ename':'Karuna','sal':95000,'gender':'F','retired':true,'doj':new Date("1985-04-07")},
    {'eid':103,'ename':'Mrityunjay','sal':57000,'gender':'M','retired':false,'doj':new Date("2013-05-02")},
    {'eid':104,'ename':'Kavita','sal':45000,'gender':'F','retired':false,'doj':new Date("2015-01-09")},
    {'eid':105,'ename':'Tanmay','sal':89000,'gender':'M','retired':true,'doj':new Date("1991-03-08")}
  ]
  constructor(){
    this.name="Shama Shaik"
  }
}
