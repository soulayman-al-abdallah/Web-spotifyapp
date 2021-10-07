import { HttpClient, HttpHeaders } from "@angular/common/http";

export class TokenManager {

  constructor() { }

  static setClientToken(token:string){
    localStorage.setItem('accessToken', token);  

       // localStorage.setItem('STORED_ACCESS_TOKEN', JSON.stringify({  "token": token }));
  }

  
  static getClientToken(){
    
   // var currentUser = JSON.parse(localStorage.getItem('STORED_ACCESS_TOKEN')!);
     // return currentUser.token ;
     return localStorage.getItem('accessToken');
  }
}
