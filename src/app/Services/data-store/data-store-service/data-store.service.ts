import { Injectable } from '@angular/core';
import { ApiCallingService } from '../../http-service/api-calling.service';
import { Observable, of } from 'rxjs';
import { NBorRBPremium, SubmissionToBound_Model, LobPremium_Model, PIFModel, CarrierModel, } from '../model/nbPremium.model';
import { AgentModel_api } from '../model/AgentContacts-api-Model'
import { map, catchError } from 'rxjs/operators';
import { Folder } from '../model/Folder.model';
import { Binary } from '@angular/compiler';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor(private apiService: ApiCallingService) { }

  //#region Authentication API calls
  authenticate(userid: string): Observable<any> {
    let url = 'ProducerPortal/auth/validate';
    let payload: string = '"' + userid + '"';
    let response = this.apiService.post(url, payload).pipe(catchError(this.authenticationFailed(url)));
    return response;

  }
  
  deleteCookie() {
    let url = 'SSONew/Login/ClearAllCookies';
    this.apiService.get(url);
  }
  ValidateSSOToken(token: string): Observable<any> {
    let url = 'SSONew/api/Login/ValidateTokenSendAcessList?token=' + token;
    let response = this.apiService.get(url);
    return response;
  }
  //#endregion

  //#region Reports Related API calls

  getNBPremiumDetails(fromDate: Date = null, toDate: Date = null): Observable<NBorRBPremium> {
    let url = 'ProducerPortal/reports/nbpremium' + this.getQueryString(fromDate, toDate);
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }

  getRBPremiumDetails(fromDate: Date = null, toDate: Date = null): Observable<NBorRBPremium> {
    let url = 'ProducerPortal/reports/rbpremium' + this.getQueryString(fromDate, toDate);
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }
  get_SubmissionToBound_Report(fromDate: Date = null, toDate: Date = null): Observable<SubmissionToBound_Model> {
    let url = 'ProducerPortal/reports/submissiontobound' + this.getQueryString(fromDate, toDate);
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }
  get_LOB_nbpremium(fromDate: Date = null, toDate: Date = null): Observable<LobPremium_Model[]> {
    let url = 'ProducerPortal/reports/lob/nbpremium' + this.getQueryString(fromDate, toDate);
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }
  get_LOB_rbpremium(fromDate: Date = null, toDate: Date = null): Observable<LobPremium_Model[]> {
    let url = 'ProducerPortal/reports/lob/rbpremium' + this.getQueryString(fromDate, toDate);
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }
  get_Carrier_nbpremium(fromDate: Date = null, toDate: Date = null): Observable<CarrierModel[]> {
    let url = 'ProducerPortal/reports/carrier/nbpremium' + this.getQueryString(fromDate, toDate);
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }
  get_Carrier_rbpremium(fromDate: Date = null, toDate: Date = null): Observable<CarrierModel[]> {
    let url = 'ProducerPortal/reports/carrier/rbpremium' + this.getQueryString(fromDate, toDate);
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }
  get_PIF_report(fromDate: Date = null, toDate: Date = null): Observable<PIFModel[]> {
    let url = 'ProducerPortal/reports/pif' + this.getQueryString(fromDate, toDate);
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }

  //#endregion

  //#region Agency and Agent related API calls
  get_AgencyDetails() {
    let url = 'ProducerPortal/Agency';
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }
  get_AgentContacts(): Observable<AgentModel_api[]> {
    let url = 'ProducerPortal/contact';
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }
  addAgentDetails(data: AgentModel_api) {
    let url = 'ProducerPortal/contact';
    let response = this.apiService.post(url, data).pipe(catchError(this.handleError(url)));
    console.log(response.subscribe(x => x.status))
    return response;
  }
  editAgentDetails(data: AgentModel_api) {
    let url = 'ProducerPortal/contact';
    let response = this.apiService.put(url, data).pipe(catchError(this.handleError(url)));
    console.log(response.subscribe(x => x.status))
    return response;
  }
  deleteAgentDetails(data: AgentModel_api) {
    let url = 'ProducerPortal/contact';
    let response = this.apiService.delete(url, data).pipe(catchError(this.handleError(url)));
    return response;
  }
  //#endregion

  //#region File Manager( Marketing brochure ) Api calls

  getAllFiles(): Observable<Folder[]>{    
    let url = 'ProducerPortal/marketinglibrary';
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }

  downloadFile(fileName : string) :Observable<File>{
    let url = 'ProducerPortal/marketinglibrary/downloadfile?file='+fileName;
    const headers = new HttpHeaders({
      'Accept': 'application/octet-stream',
      'Content-Type': 'application/octet-stream',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });
    let response = this.apiService.get(url,{headers,responseType:'blob'}).pipe(catchError(this.handleError(url)));
    return response;
  }

  //#endregion

  //#region Commonly used methods
  getQueryString(fromDate: Date, toDate: Date) {

    if (fromDate != null && toDate != null) {
      return '?fromDAte=' + this.formatDate(fromDate) + '&toDate=' + this.formatDate(toDate);
    }
    return '?fromdate=2017/06/03&&todate=2019/12/03';
  }
  formatDate(dateToFormat: Date): string {
    return dateToFormat.getFullYear() + '/' + (dateToFormat.getMonth() + 1) + '/' + (dateToFormat.getDay() + 1);
  }

  // Handle errors in api calls if any
  private handleError(operation = 'operation') {
    return (error: any) => {
      console.log(`${operation} failed: ${error.message}`);
      if (error.status == 401) {
        // TODO :
        //  un Authorized message
      }
      return of(error);
    };
  }

  // Redirect to login if auth-validate throws error
  private authenticationFailed(operation = 'operation') {
    return (error: any) => {
      console.log(`${operation} failed: ${error.message}`);
      if ( error.status==500) {
        localStorage.clear();
        window.open('http://dev.cogitate.us/ssonew/Login/ClearAllCookies', '_self');
      }
      return of(error);
    };
    
  }
  //#endregion

//#region Policy Documents API
  getPolicyDocument(policyNumber : string) : Observable<Blob> {
    let url = 'ProducerPortal/documents/getdocs?policyNumber' + policyNumber;
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }

  getPolicies(policyNumber : string):Observable<string[]> {
    let url = 'ProducerPortal/documents/search?policyNumber=' + policyNumber;
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }
  //#endregion
}
