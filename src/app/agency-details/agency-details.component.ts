import { Component, OnInit, ViewChild } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { DataStoreService } from '../Services/data-store/data-store-service/data-store.service';
import { DataModelMapper } from './data-model-Mapper';
import { AgentDetailsModel } from './agent-details-Model';
import { EditAgentPopupComponent } from '../edit-agent-popup/edit-agent-popup.component';
import { DeleteAgentComponent } from '../delete-agent/delete-agent.component';
@Component({
  selector: 'agency-details',
  templateUrl: './agency-details.component.html',
  styleUrls: ['./agency-details.component.scss'],
  providers: [DataModelMapper]
})

export class AgencyDetailsComponent implements OnInit {

  data: AgentDetailsModel[] = [];
  displayedColumns: string[] = ['name', 'title', 'phone', 'email', 'address1', 'Edit', 'Delete'];
  dataSource = new MatTableDataSource<AgentDetailsModel>(this.data);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private dataStore: DataStoreService, private mapper: DataModelMapper, public dialog: MatDialog) { }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getAgentContacts()
  }
  edit() {
    console.log("edit")
  }

  getAgentContacts() {
    this.dataStore.get_AgentContacts().subscribe(result => {
      this.dataSource.data = this.mapper.toDataModel(result)
    })
  }

  openDialog(dataToEditOrAdd: AgentDetailsModel): void {
    if (dataToEditOrAdd == undefined) {
      dataToEditOrAdd = this.setEmptyValues()
    }
    const dialogRef = this.dialog.open(EditAgentPopupComponent, {
      width:"500px",
      data: dataToEditOrAdd
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAgentContacts()
    });
  }
openDeleteDialog(dataToEditOrAdd: AgentDetailsModel): void{
  const dialogRef = this.dialog.open(DeleteAgentComponent, {
    data: dataToEditOrAdd
  });
  dialogRef.afterClosed().subscribe(result => {
    this.getAgentContacts()
  });
  
}

  setEmptyValues(): AgentDetailsModel {
    var dataToAdd = new AgentDetailsModel();
    dataToAdd.address1 = '';
    dataToAdd.email = '';
    dataToAdd.phone = '';
    dataToAdd.mobile = '';
    dataToAdd.name = '';
    dataToAdd.contactId = '';
    dataToAdd.producerId = '';
    dataToAdd.title = '';
    return dataToAdd
  }
}
