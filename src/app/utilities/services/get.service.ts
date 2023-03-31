import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetService {
  // get base url form nenv
  apiURL = environment.apiUrl;
  constructor(private http: HttpClient) { }
  public get(url: string): Observable<any> {
    console.log(this.apiURL)
    return this.http
      // get method + passed url param
      .get<any>(this.apiURL + url)
      // process data during streaming (map)
      .pipe(map((data) => data));
  }
}
