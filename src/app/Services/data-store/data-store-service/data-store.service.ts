import { Injectable } from '@angular/core';
import { ApiCallingService } from '../../http-service/api-calling.service';
import { Observable, of } from 'rxjs';
import { NBorRBPremium, SubmissionToBound_Model, LobPremium_Model, PIFModel, CarrierModel, } from '../model/nbPremium.model';
import {  AgentModel_api } from '../model/AgentContacts-api-Model'
import { map, catchError } from 'rxjs/operators';
import { format } from 'url';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor(private apiService: ApiCallingService) { }

  authenticate(userid: string): Observable<any> {
    let url = 'APIGateway/auth/validate';
    let response = this.apiService.post(url, userid);
    return response;

  }
  deleteCookie() {
    // call api to delete the token
    let url = 'SSONew/Login/ClearAllCookies';
    this.apiService.get(url);
  }

  getNBPremiumDetails(fromDate: Date = null, toDate: Date = null): Observable<NBorRBPremium> {
    let url = 'APIGateway/reports/nbpremium' + this.getQueryString(fromDate,toDate);  
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }
 
  getRBPremiumDetails(fromDate: Date = null, toDate: Date = null): Observable<NBorRBPremium> {
    let url = 'APIGateway/reports/rbpremium'+ this.getQueryString(fromDate,toDate);     
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }
  get_SubmissionToBound_Report(fromDate: Date = null, toDate: Date = null): Observable<SubmissionToBound_Model> {
    let url = 'APIGateway/reports/submissiontobound'+ this.getQueryString(fromDate,toDate);     
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }
  get_LOB_nbpremium(fromDate: Date = null, toDate: Date = null): Observable<LobPremium_Model[]> {
    let url = 'APIGateway/reports/lob/nbpremium'+ this.getQueryString(fromDate,toDate);     
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }
  get_LOB_rbpremium(fromDate: Date = null, toDate: Date = null): Observable<LobPremium_Model[]> {
    let url = 'APIGateway/reports/lob/rbpremium'+ this.getQueryString(fromDate,toDate);
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }
  get_Carrier_nbpremium(fromDate: Date = null, toDate: Date = null): Observable<CarrierModel[]> {
    let url = 'APIGateway/reports/carrier/nbpremium'+ this.getQueryString(fromDate,toDate);
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }
  get_Carrier_rbpremium(fromDate: Date = null, toDate: Date = null): Observable<CarrierModel[]> {
    let url = 'APIGateway/reports/carrier/rbpremium'+ this.getQueryString(fromDate,toDate);
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }
  get_PIF_report(fromDate: Date = null, toDate: Date = null): Observable<PIFModel[]> {
    let url = 'APIGateway/reports/pif'+ this.getQueryString(fromDate,toDate);
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }
  get_AgencyDetails(){
    let url = 'APIGateway/Agency';
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }
 get_AgentContacts() : Observable<AgentModel_api[]>{
  let url = 'APIGateway/contact';
  let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
  return response;
 }
addAgentDetails(data:AgentModel_api){
  let url = 'APIGateway/contact';
  let response = this.apiService.post(url,data).pipe(catchError(this.handleError(url)));
  console.log(response.subscribe(x=>x.status))
  return response;
}
editAgentDetails(data: AgentModel_api){
  let url = 'APIGateway/contact';
  let response = this.apiService.put(url,data).pipe(catchError(this.handleError(url)));
  console.log(response.subscribe(x=>x.status))
  return response;
}
deleteAgentDetails(data: AgentModel_api){
  let url = 'APIGateway/contact';
  let response = this.apiService.delete(url,data).pipe(catchError(this.handleError(url)));
  return response;
}

  ValidateSSOToken(token: string): Observable<any> {
    let url = 'SSONew/api/Login/ValidateToken?token=' + token;
    let response = this.apiService.get(url);
    return response;
  }
  getQueryString(fromDate: Date , toDate: Date){

    if (fromDate != null && toDate != null) {
      return '?fromDAte=' +this.formatDate(fromDate) + '&toDate=' + this.formatDate(toDate)  ;
    }
    return '?fromdate=2017/06/03&&todate=2019/12/03';
  }
  formatDate(dateToFormat: Date) : string {
    return  dateToFormat.getFullYear() +'/'+(dateToFormat.getMonth()+1)+'/'+(dateToFormat.getDay()+1);
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
}
