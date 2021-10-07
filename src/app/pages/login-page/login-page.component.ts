import { Component, OnInit } from '@angular/core';
import { makeStateKey } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { authEndpoint } from 'src/app/config/spotifyConstants';
import { TokenManager } from '../../services/utilities';

// import { threadId } from 'worker_threads';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  // constructor() { }
  // ngOnInit(): void {
  // }

  loginUri = authEndpoint;

  constructor(private router: Router) { }


  getHashParams() {
    // To read query parameters starting with # instead of ?
    var hashParams: any = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);

    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    return hashParams;

  }



  ngOnInit(): void {
    // get the query parameters and put it into a variable
    var params = this.getHashParams();
    if (params.access_token) {
      // send the token to the local storage (it can be read from anywhere)
      TokenManager.setClientToken(params.access_token)
      this.router.navigate(['/artist' , ''])
    }
    //
  }

  // if(params.access_token != null){
  //   // send the token to the local storage (it can be read from anywhere)
  //   TokenManager.setClientToken(params.access_token)
  //   this.router.navigate(['/artist'])}




  redirectToSpotifyLogin() {
    window.location.href = this.loginUri;
  }

}
