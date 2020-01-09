import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgentDetailsModel } from '../agency-details/agent-details-Model';
import { DataStoreService } from '../Services/data-store/data-store-service/data-store.service';
import { AgentApiMapper } from './agent-api.mapper';

@Component({
  selector: 'edit-agent-popup',
  templateUrl: './edit-agent-popup.component.html',
  styleUrls: ['./edit-agent-popup.component.scss'],
  providers:[AgentApiMapper]
})
export class EditAgentPopupComponent {
  formGroup: FormGroup;
  durationInSeconds = 5;
  constructor(
    private datastore: DataStoreService,
    public dialogRef: MatDialogRef<EditAgentPopupComponent>,
    private mapper: AgentApiMapper,
    private snackBar : MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: AgentDetailsModel,
    ) {
      this.formGroup = this.createFormGroup();
     }


    onNoClick(): void {
    
    this.dialogRef.close();
   
  }
  saveAgent()
  {
    let snackBarMsg = "";
    if(this.data.contactId!=''||this.data.contactId==undefined){
      this.datastore.editAgentDetails(this.mapper.toAgentapiModel(this.formGroup))
      snackBarMsg = "Agent Edited succesfully"
    }else{
      this.datastore.addAgentDetails(this.mapper.toAgentapiModel(this.formGroup));
      snackBarMsg = "Agent added succesfully"

    }
    this.openSnackBar(snackBarMsg)

  }



  createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl(this.data.email ),
      name: new FormControl(this.data.name, Validators.required),
      title: new FormControl(this.data.title),
      phone: new FormControl(this.data.phone, Validators.required),
      mobile: new FormControl(this.data.mobile),
      contactId: new FormControl(this.data.contactId),
      producerId: new FormControl(this.data.producerId),
    })
  }

  openSnackBar(snackBarMsg: string) {
      this.snackBar.open(snackBarMsg,"",{verticalPosition: 'top',duration:1000,horizontalPosition:"center"});
  
  }

}