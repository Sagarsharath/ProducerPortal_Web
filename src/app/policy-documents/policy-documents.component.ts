import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../Services/data-store/data-store-service/data-store.service';

@Component({
  selector: 'policy-documents',
  templateUrl: './policy-documents.component.html',
  styleUrls: ['./policy-documents.component.scss']
})
export class PolicyDocumentsComponent implements OnInit {

  public policyNumber : string
  constructor(private dataStore : DataStoreService) { }

  ngOnInit() {

     this.dataStore.getPolicyDocument('')
  }

  searchPolicies(policyNumber: string){
    console.log(policyNumber)
    //this.dataStore.getPolicies(policyNumber)
  }

}
