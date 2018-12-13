import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../model/customer';
import { CustomerService } from '../../../model/CustomerService';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  pageTitle: string = "Available Customers"

  customers: Customer[];
  filteredCustomers: Customer[];
  _listFilter:string;
  constructor(private service: CustomerService) {
  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCustomers = this._listFilter ? 
        this.performFilter(this._listFilter) : this.customers;
  }


  performFilter(filterBy: string): Customer[] {
    filterBy = filterBy.toLocaleLowerCase();

    return this.customers.filter( c => c.lastName.toLocaleLowerCase()
    .indexOf(filterBy) != -1 );
  }


  ngOnInit() {

    this.service.getAllCustomers().subscribe (
      cs => { this.customers = cs; this.filteredCustomers = cs;},
      error => {console.log(" errore " + error);}
    );
  
  }

}
