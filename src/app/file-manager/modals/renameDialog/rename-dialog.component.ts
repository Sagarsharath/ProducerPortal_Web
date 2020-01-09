import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-rename-dialog',
  templateUrl: './rename-dialog.component.html',
  styleUrls: ['./rename-dialog.component.scss']
})
export class RenameDialogComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(public dialogRef: MatDialogRef<RenameDialogComponent>) {}

  folderName: string;

}
