
export class File{
    version:Version;
    content : Content;
    statusCode: Number;
    reasonPhrase : string;
    headers: Headers[];
    requestMessage : RequestMessage;
    isSuccessStatusCode: boolean; 
}
class RequestMessage{
    version:Version;
    content : Content;
    method:Method;
    requestUri :string;
    headers: Headers[];
    properties : Properties;
}
class Method{
    method: string;
}
class Properties{
    additionalProp1 : Object;
    additionalProp2 : Object;
    additionalProp3 : Object;
}
class Version{
    major : Number;
    minor : Number;
    build : Number;
    revision : Number;
    majorRevision : Number;
    minorRevision : Number;
}
class Content{
    headers : Header[]
}
class Header{
    key :string;
    value : string[];
}