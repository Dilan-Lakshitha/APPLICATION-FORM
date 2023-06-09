import {Component} from '@angular/core';
import {Data} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";

export interface Customer {
  name: string | null|undefined;
  address: string | null|undefined;
  salary: string | null|undefined;
  registerDate: Date
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private toastrService: ToastrService) {
  }

  customerForm = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      ]),
    address: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),
    ]),
    salary: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),
    ]),

  });
  customers: Customer[] = []

  name = '';
  address = '';
  salary = 0;

  setName(name: string) {
    this.name = name;
  }

  setAddress(address: string) {
    this.address = address
  }

  setSalary(salary: string) {
    this.salary = Number.parseInt(salary);
  }

  saveCustomer() {
    this.customers.push(
      {
        'name': this.customerForm?.get('name')?.value,
        'address': this.customerForm?.get('address')?.value,
        'salary': this.customerForm?.get('salary')?.value,
        'registerDate': new Date()
      }
    );
    this.popup('Customer Save!', 'Complete', 'success')
  }

  deleteCustomer(index: number) {
    if (confirm('Are you sure'))
      this.customers.splice(index, 1)
  }

  popup(massage: string, title: string, type: string) {
    switch (type) {
      case 'success':
        this.toastrService.success(massage, title, {
          timeOut: 5000,
          positionClass: 'toast-top-left',

        });
        break;
      case 'error':
      case 'warning':
    }
  }
}

