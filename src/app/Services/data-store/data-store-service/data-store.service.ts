import { Injectable } from '@angular/core';
import { ApiCallingService } from '../../http-service/api-calling.service';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NBPremium, SubmissionToBound_Model, LobnbPremium_Model } from '../model/nbPremium.model';
import { map, catchError } from 'rxjs/operators';

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
  getNBPremiumDetails(fromDate: Date = null, toDate: Date = null): Observable<NBPremium> {
    let url = 'APIGateway/reports/nbpremium?fromdate=2017/01/01&todate=2019/01/01';
    if (fromDate != null && toDate != null) {
      url = url + '?fromDAte=' + fromDate + '&toDate=' + toDate;
    }
    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }

  get_SubmissionToBound_Report(): Observable<SubmissionToBound_Model> {
    let url = 'APIGateway/reports/submissiontobound?fromDate=2017/01/01&toDate=2019/01/01';

    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }
  get_LOB_nbpremium(): Observable<LobnbPremium_Model[]> {
    let url = 'APIGateway/reports/lob/nbpremium?fromDate=2017/01/01&toDate=2019/01/01';

    let response = this.apiService.get(url).pipe(catchError(this.handleError(url)));
    return response;
  }

  ValidateSSOToken(token: string): Observable<any> {
    let url = 'SSONew/api/Login/ValidateToken?token=' + token;
    let response = this.apiService.get(url);
    return response;
  }

  // Handle errors in api calls if any
  private handleError(operation = 'operation') {
    return (error: any) => {
      console.log(`${operation} failed: ${error.message}`);
      if (error.status == 401) {
        //   localStorage.clear();
        //   this.route.navigate(['/login']);
        //   let config = new MatSnackBarConfig();
        //   config.verticalPosition = AppConfigConst.snackBarVerticalPosition;
        //   config.panelClass = AppConfigConst.snackBarPanelClass;
        //   config.duration = AppConfigConst.snackBarDuration;
        //   this.snackBar.open('You are not logged in, please log in to continue.', undefined, config);
        // }
        // else {
        //   if (this.formGroup) {
        //     this.formGroup.enable();
        //   }

        //   let config = new MatSnackBarConfig();
        //   config.verticalPosition = AppConfigConst.snackBarVerticalPosition;
        //   config.panelClass = AppConfigConst.snackBarPanelClass;
        //   config.duration = AppConfigConst.snackBarDuration;
        //   this.snackBar.open('Something went Wrong. Try Again Later', undefined, config);

      }
      return of(error);
    };
  }
}
