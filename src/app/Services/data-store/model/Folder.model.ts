export class Folder{
    iconURI : string;
    subFolders : Folder[];
    files :file[];
    name : string;
}
class file{
    uri:string;
    fileType:string;
    name:string;
}