import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {
  result:any;
  
    constructor(private http: Http) { }
  
    getAlerts() {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');      
      return this.http.get("http://localhost:3000/api/alerts",{headers: headers})
        .map(function(res) {
          console.log(res);
          return res.json();
        });
    }

}
