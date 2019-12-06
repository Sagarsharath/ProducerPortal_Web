import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { createCipher } from 'crypto';
// const headers = new HttpHeaders(
//   {
//      'Accept': 'application/json', 
//      'Content-Type': 'application/json', 
//      'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTmFtZSI6Im5pdGluIiwiQWdlbnRJZCI6IjQ1OTU3NCIsImp0aSI6ImY4N2JlYTM3LTI0MjEtNGVkNC05ZGFkLTYyOTgzZmFmNTNkZiIsImlhdCI6IjA1LTEyLTIwMTkgMDg6NTc6NDUiLCJuYnByZW1pdW0iOiJuYnByZW1pdW0iLCJyYnByZW1pdW0iOiJyYnByZW1pdW0iLCJzdWJtaXNzaW9udG9ib3VuZCI6InN1Ym1pc3Npb250b2JvdW5kIiwibmJmIjoxNTc1NTM2MjY1LCJleHAiOjE1NzU1MzY5ODUsImlzcyI6Imh0dHA6Ly93d3cuYy1zaGFycGNvcm5lci5jb20vbWVtYmVycy9jYXRjaGVyLXdvbmciLCJhdWQiOiJDYXRjaGVyIFdvbmcifQ.AQ7oMkPJwftP7e8xr5Xo0ENB6HPIDnbHiObdvK8hYvk'
//   });


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public response: any;
  isLoggedin = false;
  constructor(private http: HttpClient) { }

  
  //getInfo(): Observable<any> {
    //let response = this.http.get('http://jsonplaceholder.typicode.com/users', { headers, withCredentials: true });
    ///return response;

  //}
  callNewBusinessApi() : Observable<any>{
    //  let headers = new HttpHeaders({
    //    'Accept': 'application/json', 
    //    'Content-Type': 'application/json', 
    //   'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTmFtZSI6Im5pdGluIiwiQWdlbnRJZCI6IjQ1OTU3NCIsImp0aSI6IjQ1NDEzMjgwLTY1ZmYtNDY3YS05NzJkLWZjODgxNTI4NDg5NiIsImlhdCI6IjA1LTEyLTIwMTkgMDY6Mzc6MDMiLCJuYnByZW1pdW0iOiJuYnByZW1pdW0iLCJyYnByZW1pdW0iOiJyYnByZW1pdW0iLCJzdWJtaXNzaW9udG9ib3VuZCI6InN1Ym1pc3Npb250b2JvdW5kIiwibmJmIjoxNTc1NTI3ODIzLCJleHAiOjE1NzU1Mjg1NDMsImlzcyI6Imh0dHA6Ly93d3cuYy1zaGFycGNvcm5lci5jb20vbWVtYmVycy9jYXRjaGVyLXdvbmciLCJhdWQiOiJDYXRjaGVyIFdvbmcifQ.qMctkMZnmFNl14aMk77j_e9qj7PSBStoeXwfaso3rxc'
      //});
let auth_token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTmFtZSI6Im5pdGluIiwiQWdlbnRJZCI6IjQ1OTU3NCIsImp0aSI6IjcwODIyYTJkLThkNzctNDY5ZS1iNTFhLWQwOGM2MWNiZmMwOCIsImlhdCI6IjA1LTEyLTIwMTkgMDc6MTA6NDAiLCJuYnByZW1pdW0iOiJuYnByZW1pdW0iLCJyYnByZW1pdW0iOiJyYnByZW1pdW0iLCJzdWJtaXNzaW9udG9ib3VuZCI6InN1Ym1pc3Npb250b2JvdW5kIiwibmJmIjoxNTc1NTI5ODQwLCJleHAiOjE1NzU1MzA1NjAsImlzcyI6Imh0dHA6Ly93d3cuYy1zaGFycGNvcm5lci5jb20vbWVtYmVycy9jYXRjaGVyLXdvbmciLCJhdWQiOiJDYXRjaGVyIFdvbmcifQ.oagOUUGm2B8QlzNUQVUOzOddHQn2ZFLEw4qdgv8gZ_w';
      let headers = new HttpHeaders();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json')
      //headers.set('Authorization', 'Bearer '+ auth_token);
   
    const url ='http://192.168.0.68/APIGateway/reports/nbpremium'
    let response = this.http.get(url,{ headers:headers, withCredentials:true})
    console.log(response);
    return response;
  }
  login(userid: any, password: any) {
    //let response = this.http.get<HttpResponse<any>>("http://dummy.restapiexample.com/api/v1/employees", { headers, withCredentials: false });
    if (userid == 'cogitate' && password == 'cogitate') {
      localStorage.setItem('loggedIn', 'true');
      console.log(localStorage);
    }
        return true;
  }
  signIn(username,password) {
    const url ='http://cors-anywhere.herokuapp.com/http://test.cogitate.us/SSONew/api/Login/IsLoginValid';
    let headers = new HttpHeaders();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      headers.append('siteID','4');
    let data = {"UserName":username,"Password":password}
    let response = this.http.post(url,data , {headers:headers, withCredentials:false});
    return response;
  }
  logout() {
    localStorage.clear();
  }


}
