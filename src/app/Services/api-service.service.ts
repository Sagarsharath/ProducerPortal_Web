import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { createCipher } from 'crypto';
import { map } from 'rxjs/operators';
const headers = new HttpHeaders(
  {
     'Accept': 'application/json', 
     'Content-Type': 'application/json', 
     'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTmFtZSI6InJhdmkiLCJBZ2VudElkIjoiMTAwMDQwIiwianRpIjoiODdjOTkyMTMtMWNjOS00NWE2LWEzMmItYjk4M2VmMThlOTVjIiwiaWF0IjoiMTIvMTMvMjAxOSA2OjU4OjQ0IEFNIiwibmJwcmVtaXVtIjoibmJwcmVtaXVtIiwic3VibWlzc2lvbnRvYm91bmQiOiJzdWJtaXNzaW9udG9ib3VuZCIsInBpZiI6InBpZiIsImxvYm5icHJlbWl1bSI6ImxvYm5icHJlbWl1bSIsImNhcnJpZXJuYnByZW1pdW0iOiJjYXJyaWVybmJwcmVtaXVtIiwibmJmIjoxNTc2MjIwMzI0LCJleHAiOjE1NzYyMjEwNDQsImlzcyI6Imh0dHA6Ly93d3cuYy1zaGFycGNvcm5lci5jb20vbWVtYmVycy9jYXRjaGVyLXdvbmciLCJhdWQiOiJDYXRjaGVyIFdvbmcifQ.n9nNsTcnrqao82q8pE9aiqlcscaC26XFi5bLzhr8raw'
  });


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  public response: any;
  isLoggedin = false;
  proxyUrl = 'http://cors-anywhere.herokuapp.com/';
  constructor(private http: HttpClient) {  }
  
  loginRedirect() : Observable<any>{
    let headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.http.post("http://dev.cogitate.us/SSONew/Login/VerifyPPCookieToken?siteId=1",{headers:headers})
  }

  callNewBusinessApi() : Observable<any>{
    const url = 'http://dev.cogitate.us/APIGateway/reports/nbpremium?fromdate=2017/01/01&todate=2019/01/01';
    let response = this.http.get(url,{ headers:headers, withCredentials:true});
    return response;
  }

  submissionToBoundApi() : Observable<any>{
   const url = 'http://dev.cogitate.us/APIGateway/reports/submissiontobound?fromDate=2017/01/01&toDate=2019/01/01';
   let response = this.http.get(url,{ headers:headers, withCredentials:true});
   return response;
 }

 lob_newBusinessApi(): Observable<any>{
 const url = 'http://dev.cogitate.us/APIGateway/reports/lob/nbpremium?fromDate=2017/01/01&toDate=2019/01/01';
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
    var data = new postdata_login(username,password);
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
export class UserModel {
  Message: string;
  Status : Number;
  ResponseObject : RObject;
}
export class RObject {
  FirstName: string;
  LastName: string;
}