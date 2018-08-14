import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
//   private _url = "/assets/data/customers.json";

//   constructor(private http:HttpClient) { }
  
//   public getCustomers():Observable<ICustomers[]>{
//     return this.http.get<ICustomers[]>(this._url);
//   }
}

interface ICustomers{
  id:number,
  name:string,
  surname:string,
}
