import {UserRequestStatusType} from './enums/UserRequestStatusType';
export class LoginedUser{
    public id:number;
    public email:string;
    public firstName:string;
    public lastName:string;
    public aadharNumber:string;
    public password:string;
    public profileImage:string;
    public isApprover:boolean;
    public createdOn:Date;
    public modifiedOn:Date;
    public userRequestStatus:UserRequestStatusType;
}