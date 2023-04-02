import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  // get base url form env
  apiURL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  get(url: string): Observable<any> {
    return this.http
      // get method + passed url param
      .get<any>(this.apiURL + url)
      // process data if nested during streaming (map)
      .pipe(map((data) => data));
  }
  
  // get all data 
  getProducts() {
    return this.get('products.json')
  }
  getOrders() {
    return this.get('orders.json')
  }
  getCustomers() {
    return this.get('users.json')
  }

 
}
