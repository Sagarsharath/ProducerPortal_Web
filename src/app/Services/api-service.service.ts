import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';


const httpOptions =
{
  headers:
    new HttpHeaders(
      {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      }),
  withCredentials: true,
};
const headers = new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept' });
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public response : any;
  constructor(private http: HttpClient) {     
  }
 
  getInfo() : Observable<any>
  {
   let response = this.http.get<HttpResponse<any>>("http://dummy.restapiexample.com/api/v1/employees", { headers, withCredentials: false });  
  // let response = this.http.get<HttpResponse<any>>("http://localhost:50673/api/values/getData", { headers, withCredentials: false });  
   return response;   
  }
  
}
