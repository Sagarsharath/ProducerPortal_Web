import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { createCipher } from 'crypto';
const headers = new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public response: any;
  isLoggedin = false;
  constructor(private http: HttpClient) { }

  getInfo(): Observable<any> {
    let response = this.http.get('http://jsonplaceholder.typicode.com/users', { headers, withCredentials: true });
    return response;

  }
  login(userid: any, password: any) {
    let response = this.http.get<HttpResponse<any>>("http://dummy.restapiexample.com/api/v1/employees", { headers, withCredentials: false });
    if (userid == 'cogitate' && password == 'cogitate') {
      localStorage.setItem('loggedIn', 'true');
      console.log(localStorage);
    }
        return true;
  }
  logout() {
    localStorage.clear();
  }

}
