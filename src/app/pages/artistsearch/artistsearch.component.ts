import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call.service';


@Component({
  selector: 'app-artistsearch',
  templateUrl: './artistsearch.component.html',
  styleUrls: ['./artistsearch.component.css']
})
export class ArtistsearchComponent implements OnInit {

  searchContent = '';
  artists: any = [];



  adib(Input: string) {
    this.searchContent = Input;
    this.searchImages(this.searchContent);

  }


  constructor(private _apiCaller: ApiCallService, private _router: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchImages(this.searchContent)

  }


  searchImages(query: string) {
    this._apiCaller.getArtists(query).subscribe((data: any) => {
      this.artists = data.artists.items
    })
  }

}
