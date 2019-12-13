import { Observable } from 'rxjs';

// TODO Is this being used? : DOne used in api calling service
// interface to be implemented all api modules
export interface IApiService {
  get(url);
  post(url: string, data: any): Observable<any>;
  put(url: string, data: any): Observable<any>;
  delete(url: string, data: any): Observable<any>;
}
