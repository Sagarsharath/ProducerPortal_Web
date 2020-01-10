import { Component, OnInit } from '@angular/core';
import { FileService } from '../Services/file-service/file.service';
import { FileElement } from '../file-manager/model/element';
import { Observable } from 'rxjs';
import { FileServiceMapper } from './FileService-mapper';
import { DataStoreService } from '../Services/data-store/data-store-service/data-store.service';
const mock = require("../Mock-Data/folderData.json");

@Component({
  selector: 'marketing-brochure',
  templateUrl: './marketing-brochure.component.html',
  styleUrls: ['./marketing-brochure.component.scss'],
})
export class MarketingBrochureComponent implements OnInit {
  public fileElements: Observable<FileElement[]>;

  constructor(public fileService: FileService,
    private dataStore : DataStoreService) {
    }

  currentRoot: FileElement;
  currentPath: string;
  canNavigateUp = false;

  ngOnInit() {
    // TODO api call
    console.log(mock)
    // this.dataStore.get_marketingLibrary().subscribe(result=>{
    //   const filemapper = new FileServiceMapper(this.fileService);
    //   filemapper.addFiles(result,'root');
    // })
    // this.fileService.deleteInFolder('root')
    this.deleteAllElements();
    const filemapper = new FileServiceMapper(this.fileService);
    filemapper.addFiles(mock,'root');    
    this.updateFileElementQuery();
  }

  addFolder(folder: { name: string }) {
    this.fileService.add({ isFolder: true, name: folder.name, parent: this.currentRoot ? this.currentRoot.id : 'root' });
    this.updateFileElementQuery();
  }

  removeElement(element: FileElement) {
    this.fileService.delete(element.id);
    this.updateFileElementQuery();
  }
  deleteAllElements(){
    this.updateFileElementQuery()
    if(this.fileElements!=undefined){
      this.fileElements.subscribe(result =>{
        result.forEach(element=>{
          this.fileService.delete(element.id);
        })
      })
    }
    
  }

  navigateToFolder(element: FileElement) {
    this.currentRoot = element;
    this.updateFileElementQuery();
    this.currentPath = this.pushToPath(this.currentPath, element.name);
    this.canNavigateUp = true;
  }

  navigateUp() {
    if (this.currentRoot && this.currentRoot.parent === 'root') {
      this.currentRoot = null;
      this.canNavigateUp = false;
      this.updateFileElementQuery();
    } else {
      this.currentRoot = this.fileService.get(this.currentRoot.parent);
      this.updateFileElementQuery();
    }
    this.currentPath = this.popFromPath(this.currentPath);
  }

  moveElement(event: { element: FileElement; moveTo: FileElement }) {
    this.fileService.update(event.element.id, { parent: event.moveTo.id });
    this.updateFileElementQuery();
  }

  renameElement(element: FileElement) {
    console.log(element);
    this.fileService.update(element.id, { name: element.name });
    this.updateFileElementQuery();
  }

  updateFileElementQuery() {
    this.fileElements = this.fileService.queryInFolder(this.currentRoot ? this.currentRoot.id : 'root');
  }


  pushToPath(path: string, folderName: string) {
    let p = path ? path : '';
    p += `${folderName}/`;
    return p;
  }

  popFromPath(path: string) {
    let p = path ? path : '';
    let split = p.split('/');
    split.splice(split.length - 2, 1);
    p = split.join('/');
    return p;
  }

}
