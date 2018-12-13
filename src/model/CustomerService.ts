import { Customer } from "./customer";
import { Observable } from "rxjs";

export abstract class CustomerService {
    abstract getAllCustomers() : Observable<Customer[]>;
}