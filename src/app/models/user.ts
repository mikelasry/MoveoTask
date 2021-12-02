
export interface IUser {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    age: number,
    gender: string,
    img: string,
    lat: number,
    lng: number
}
export class User implements IUser{
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    gender: string;
    img: string;
    address:string;
    lat: number;
    lng: number;

    constructor(_username:string="", _fname:string="", _lname:string="", _email:string="", _age:number=0, _gender:string="", _imgPath:string="", _address:string="", _lat:number=0, _lng:number=0){
        this.username = _username;
        this.firstName = _fname;
        this.lastName = _lname;
        this.email = _email;
        this.age = _age;
        this.gender = _gender;
        this.img = _imgPath;
        this.address = _address;
        this.lat = _lat;
        this.lng= _lng;
    }

    public getInitials(){
        return this.firstName[0]+this.lastName[0];
    }
}