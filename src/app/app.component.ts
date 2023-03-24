import { Component } from '@angular/core';
import {Data} from "@angular/router";
import {ToastrService} from "ngx-toastr";

export interface Customer{
  name:string;
  address:string;
  salary:number;
  registerDate:Date
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private toastrService: ToastrService) {
  }
  customers:Customer[]=[]

  name='';
  address='';
  salary=0;
  setName(name:string){this.name=name;}
  setAddress(address:string){this.address=address}
  setSalary(salary:string){this.salary=Number.parseInt(salary);}

  saveCustomer(){
    this.customers.push(
      {
        'name':this.name,
        'address':this.address,
        'salary':this.salary,
        'registerDate':new Date()
      }
    );
    this.popup('Customer Save!','Complete','success')
  }
  deleteCustomer(index:number){
    if(confirm('Are you sure'))
    this.customers.splice(index,1)
}
  popup(massage:string,title:string,type:string){
    switch (type){
      case 'success':
        this.toastrService.success(massage,title,{
         timeOut:5000,
          positionClass:'toast-top-left',

        });break;
      case 'error':
      case 'warning':
    }
  }
}

