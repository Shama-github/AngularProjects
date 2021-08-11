import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmpComponent } from './emp/emp.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { PnfComponent } from './pnf/pnf.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpupdateComponent } from './empupdate/empupdate.component';
import { EmpdeleteComponent } from './empdelete/empdelete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpComponent,
    EmpdetailComponent,
    PnfComponent,
    EmpdetailComponent,
    EmpupdateComponent,
    EmpdeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
