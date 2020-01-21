import { FileService } from '../Services/file-service/file.service';
import { Folder } from '../Services/data-store/model/Folder.model';

export class FileServiceMapper{
    constructor(public fileService: FileService) {}
    public addFiles(folders : Folder[], baseFolder:string){
        folders.forEach(folder=>{
            const Parent = this.fileService.add({name:folder.name,isFolder:true,parent:baseFolder,downloadUri:''})
            folder.files.forEach(file=>{
                this.fileService.add({ name: file.name, isFolder: false, parent: Parent.id,downloadUri:file.uri});
            })
            if(folder.subFolders!=null&&folder.subFolders.length>0){
                this.addFiles(folder.subFolders,Parent.id)
            }          
        })
    }

}