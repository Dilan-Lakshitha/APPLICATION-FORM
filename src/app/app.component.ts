import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  customers:any[]=[]

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
        'salary':this.salary
      }
    );
    console.log(this.customers)
  }

}

