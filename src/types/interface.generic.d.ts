export interface Keyable{
    [property:string]:any
}


export interface MakeResponse{
    status:boolean|number;
    message:string;
    data:Keyable;
}