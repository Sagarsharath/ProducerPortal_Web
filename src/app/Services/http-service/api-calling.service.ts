import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IApiService } from './interfaces/api-service.interface';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';

const apiPath = environment.serverUrl;

const tokenHeaderName: string = "authToken";




// Service for calling Apis
@Injectable({
  providedIn: 'root'
})
export class ApiCallingService implements IApiService {

  constructor(private http: HttpClient //, private snackBar: MatSnackBar
  ) {

  }
  private extractdata(res: Response) {
    let body = res;
    return body || {};
  }

  get(url): Observable<any> {
    const headers = this.setHeaders();
    console.log(headers)
    let response = this.http.get(apiPath + url, { headers, withCredentials: true })
      .pipe(
        catchError(this.handleError(url)));
    return response;
  }

  post(url: string, data: any): Observable<any> {

    const headers = this.setHeaders();
    return this.http.post(apiPath + url, data, { headers, withCredentials: true }).pipe(
      catchError(this.handleError(url))
    );
  }

  put(url: string, data: any): Observable<any> {
    const headers = this.setHeaders();
    return this.http.put(apiPath + url, data, { headers, withCredentials: true }).pipe(
      catchError(this.handleError(url))
    );
  }

  delete(url: string, data: any): Observable<any> {
    return this.http.delete(apiPath + url).pipe(
      catchError(this.handleError(url))
    );
  }

  // Handle errors in api calls if any
  private handleError(operation = 'operation') {
    return (error: any) => {
      if (error.status != 401) {
        //this.somethingWrongSnagbar();
      }
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      throw error;
    };
  }

  private setHeaders() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return headers
  }

}
