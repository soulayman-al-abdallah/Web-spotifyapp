import { HttpClient, HttpHeaders } from "@angular/common/http";

export class TokenManager {

  constructor() { }

  // set the received token value to the local storage
  static setClientToken(token:string){
    localStorage.setItem('accessToken', token);  
  }

  // get the saved token from the local storage
  static getClientToken(){
     return localStorage.getItem('accessToken');
  }
}
