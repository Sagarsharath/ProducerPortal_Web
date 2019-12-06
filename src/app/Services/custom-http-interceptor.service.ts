import { Observable,of, from } from 'rxjs';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpInterceptor 
,HttpRequest
,HttpHandler
,HttpEvent 
,HttpHeaders } from '@angular/common/http';
import { observeOn } from 'rxjs/operators';
//import 'rxjs/add/observable/fromPromise';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor() {}
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handleAccess(request, next));
  }

  private async handleAccess(request: HttpRequest<any>, next: HttpHandler):
      Promise<HttpEvent<any>> {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyTmFtZSI6Im5pdGluIiwiQWdlbnRJZCI6IjQ1OTU3NCIsImp0aSI6ImJlNDI4YTk1LTNjZTMtNDJiNC05OWI3LTZmNThlMGI5Yzk4ZiIsImlhdCI6IjA1LTEyLTIwMTkgMTA6MTY6NTciLCJuYnByZW1pdW0iOiJuYnByZW1pdW0iLCJyYnByZW1pdW0iOiJyYnByZW1pdW0iLCJzdWJtaXNzaW9udG9ib3VuZCI6InN1Ym1pc3Npb250b2JvdW5kIiwibmJmIjoxNTc1NTQxMDE3LCJleHAiOjE1NzU1NDE3MzcsImlzcyI6Imh0dHA6Ly93d3cuYy1zaGFycGNvcm5lci5jb20vbWVtYmVycy9jYXRjaGVyLXdvbmciLCJhdWQiOiJDYXRjaGVyIFdvbmcifQ.Up-7DFQHUtypQ63t9TjCgRm3BB29oXVRwoOIKveNHDo';
    let changedRequest = request;
    // HttpHeader object immutable - copy values
    const headerSettings: {[name: string]: string | string[]; } = {};

    for (const key of request.headers.keys()) {
      headerSettings[key] = request.headers.getAll(key);
    }
    if (token) {
      headerSettings['Authorization'] = 'Bearer ' + token;
    }
    headerSettings['Content-Type'] = 'application/json';
    headerSettings['Accept']='application/json';
    const newHeader = new HttpHeaders(headerSettings);

    changedRequest = request.clone({
      headers: newHeader});
    return next.handle(changedRequest).toPromise();
  }

}
