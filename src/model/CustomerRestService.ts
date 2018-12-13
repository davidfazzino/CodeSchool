import { CustomerService } from "./CustomerService";
import { Customer } from "./customer";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomerRestService extends CustomerService {
    
    private customerUrl = 'http://localhost:8080/spring-crm-rest/api/customers/';
    constructor(private http: HttpClient)
    {
        super();
    }
    getAllCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.customerUrl)
      .pipe(
          tap(d => console.log(JSON.stringify(d)))
      );
    }
    
}