import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../Services/data-store/data-store-service/data-store.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'policy-documents',
  templateUrl: './policy-documents.component.html',
  styleUrls: ['./policy-documents.component.scss']
})
export class PolicyDocumentsComponent implements OnInit {

  public policyNumber : string;
  public policies =[];
  public displayedColumns = ['name'];
  dataSource = new MatTableDataSource<string>(this.policies);
  constructor(private dataStore : DataStoreService) { }

  ngOnInit() {
     //this.dataStore.getPolicyDocument('')
  }

  searchPolicies(policyNumber: string){
    this.dataStore.getPolicies(policyNumber).subscribe(
      result=>{
        this.dataSource.data = result;
        console.log(this.dataSource.data)
      }
    )
  }

}
