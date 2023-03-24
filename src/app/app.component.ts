import { Component } from '@angular/core';
import {Data} from "@angular/router";

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
    console.log(this.customers)
  }

}

