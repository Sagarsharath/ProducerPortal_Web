import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataStoreService } from '../Services/data-store/data-store-service/data-store.service';
import { AgentDetailsModel } from '../agency-details/agent-details-Model';
import { DataMapper } from './data-mapper';
@Component({
  selector: 'app-delete-agent',
  templateUrl: './delete-agent.component.html',
  styleUrls: ['./delete-agent.component.scss'],
  providers :[DataMapper]
})
export class DeleteAgentComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  constructor(private dataStore: DataStoreService, public dialog: MatDialog,
    private mapper:DataMapper,
    public dialogRef: MatDialogRef<DeleteAgentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AgentDetailsModel,) { }
  ngOnInit() {
    
  }
  onNoClick(): void {
    
    this.dialogRef.close();
   
  }
  deleteAgent(){
this.dataStore.deleteAgentDetails(this.mapper.toApiModel(this.data)).subscribe((res) => {
console.log(res)
});
  }
}
