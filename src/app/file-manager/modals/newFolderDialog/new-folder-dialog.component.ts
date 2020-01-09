import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-folder-dialog',
  templateUrl: './new-folder-dialog.component.html',
  styleUrls: ['./new-folder-dialog.component.scss']
})
export class NewFolderDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<NewFolderDialogComponent>) {}

  folderName: string;
  ngOnInit() {
  }

}
