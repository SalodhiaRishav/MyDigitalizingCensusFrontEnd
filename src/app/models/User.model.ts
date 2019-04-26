export class User{
    constructor(
        public id:number,
        public email:string,
        public firstName:string,
        public lastName:string,
        public aadharNumber:string,
        public password:string,
        public profileImage:string,
        public isAprrover:boolean,
        public createdOn:Date,
        public modifiedOn:Date
        ){}
}
