import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { createCipher } from 'crypto';
import { map } from 'rxjs/operators';
const headers = new HttpHeaders(
  {
     'Accept': 'application/json', 
     'Content-Type': 'application/json', 
     'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTmFtZSI6InJhdmkiLCJBZ2VudElkIjoiMTAwMDQwIiwianRpIjoiNDhjMTk4M2ItN2YyMy00YWExLTg2Y2MtNTllNmU3NzlmNTFkIiwiaWF0IjoiMTIvMTMvMjAxOSAxMToyNjo1OCBBTSIsIm5icHJlbWl1bSI6Im5icHJlbWl1bSIsInN1Ym1pc3Npb250b2JvdW5kIjoic3VibWlzc2lvbnRvYm91bmQiLCJwaWYiOiJwaWYiLCJsb2JuYnByZW1pdW0iOiJsb2JuYnByZW1pdW0iLCJjYXJyaWVybmJwcmVtaXVtIjoiY2Fycmllcm5icHJlbWl1bSIsIm5iZiI6MTU3NjIzNjQxOCwiZXhwIjoxNTc2MjM3MTM4LCJpc3MiOiJodHRwOi8vd3d3LmMtc2hhcnBjb3JuZXIuY29tL21lbWJlcnMvY2F0Y2hlci13b25nIiwiYXVkIjoiQ2F0Y2hlciBXb25nIn0.-2HAFEO7pc2a8SYc-_zCEo3N-ULp_6XCzUT0oTF6QkA'
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