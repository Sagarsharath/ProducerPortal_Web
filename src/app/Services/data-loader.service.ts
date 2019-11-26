import { Injectable } from '@angular/core';
import { ApiServiceService } from './../Services/api-service.service';
import { inputData} from './../Charts/chartsData';
import { Observable, of } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class DataLoaderService {
  valuesArray = new Array();
  index =5;
  constructor(private api : ApiServiceService) { }
  
  getData() {

    this.api.getInfo()
      .subscribe(
        (data) => {
          for (var val in data) {
            if (this.index >= 0) {
              this.valuesArray.push(val);
              this.index--;
            }
          }
          console.log(data);
        }
      );
    return this.valuesArray;
  }
}
