import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { createCipher } from 'crypto';
import { map } from 'rxjs/operators';
// const headers = new HttpHeaders(
//   {
//      'Accept': 'application/json', 
//      'Content-Type': 'application/json', 
//      'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTmFtZSI6Im5pdGluIiwiQWdlbnRJZCI6IjQ1OTU3NCIsImp0aSI6ImQ2ZjkyYmVhLWJlY2YtNDM1Zi1iYTM5LTFiOThiZjUwOTY5YyIsImlhdCI6IjEyLzA5LzIwMTkgMTA6MzI6MTEgQU0iLCJuYnByZW1pdW0iOiJuYnByZW1pdW0iLCJyYnByZW1pdW0iOiJyYnByZW1pdW0iLCJzdWJtaXNzaW9udG9ib3VuZCI6InN1Ym1pc3Npb250b2JvdW5kIiwibmJmIjoxNTc1ODg3NTMxLCJleHAiOjE1NzU4ODgyNTEsImlzcyI6Imh0dHA6Ly93d3cuYy1zaGFycGNvcm5lci5jb20vbWVtYmVycy9jYXRjaGVyLXdvbmciLCJhdWQiOiJDYXRjaGVyIFdvbmcifQ.VTW_zOf3XZvmq8M1R3xiDSkTVVbLd_lvVHjHDFWjcR8'
//   });


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public response: any;
  isLoggedin = false;
  proxyUrl = 'http://cors-anywhere.herokuapp.com/';
  constructor(private http: HttpClient) { }

  
  //getInfo(): Observable<any> {
    //let response = this.http.get('http://jsonplaceholder.typicode.com/users', { headers, withCredentials: true });
    ///return response;

  //}
  callNewBusinessApi() : Observable<any>{
     let headers = new HttpHeaders({
       'Accept': 'application/json',
       'Content-Type': 'application/json',
       'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTmFtZSI6Im5pdGluIiwiQWdlbnRJZCI6IjQ1OTU3NCIsImp0aSI6ImZiNzI0ZjI4LTg1M2MtNDNkYy1hNzQyLTQzMjM2OTVlY2M1YSIsImlhdCI6IjEyLzEwLzIwMTkgMTI6MTE6NDkiLCJuYnByZW1pdW0iOiJuYnByZW1pdW0iLCJyYnByZW1pdW0iOiJyYnByZW1pdW0iLCJzdWJtaXNzaW9udG9ib3VuZCI6InN1Ym1pc3Npb250b2JvdW5kIiwibmJmIjoxNTc1OTc5OTA5LCJleHAiOjE1NzU5ODA2MjksImlzcyI6Imh0dHA6Ly93d3cuYy1zaGFycGNvcm5lci5jb20vbWVtYmVycy9jYXRjaGVyLXdvbmciLCJhdWQiOiJDYXRjaGVyIFdvbmcifQ.fDte307UAy1KR4x_0zZVHfuXyr1D-eI9fMufvVzoM48'
      });
    const url = 'http://192.168.0.68/APIGateway/reports/nbpremium';
    let response = this.http.get(url,{ headers:headers, withCredentials:true});
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
  signIn(username,password) : Observable<UserModel> {
    const url = this.proxyUrl+'http://test.cogitate.us/SSONew/api/Login/IsLoginValid';
    let headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'siteId': '4'
    });
    // var data = new postdata_login(
    //   {
    //     UserName = username,
    //     Password = password
    //   }
    // );
    var data = new postdata_login(username,password);
    //let data = {"UserName":username,"Password":password}
    let response = this.http.post(url,data,{headers:headers}).pipe(map(x=>x as UserModel));
    return response;
  }
  logout() {
    localStorage.clear();
  }
}
export class postdata_login{  
  UserName: string;
  Password: string;
  constructor(UserName,Password){
    this.UserName = UserName;
    this.Password = Password;
  }
}
export class UserModel{
  Message: string;
  Status : Number;
  ResponseObject : RObject;
}
export class RObject{
  FirstName: string;
  LastName: string;
}

