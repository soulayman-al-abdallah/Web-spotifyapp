import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { TokenManager } from './utilities'

@Injectable()
export class ApiCallService {
  token = TokenManager.getClientToken();
  apiUrl = "https://api.spotify.com/v1/";
  headers: HttpHeaders = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.token
  }
  )
  

  constructor(private _http: HttpClient) { }



  getArtists(searchQuery: string) {
    return this._http.get(this.apiUrl + 'search?q=' + searchQuery + '&type=artist', { headers: this.headers })
  }

  getAlbums(query : string) 
  { return this._http.get(this.apiUrl + 'artists/' + query + '/albums', { headers: this.headers }) }

}
