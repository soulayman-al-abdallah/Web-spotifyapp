import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call.service';

@Component({
  selector: 'app-albumsearch',
  templateUrl: './albumsearch.component.html',
  styleUrls: ['./albumsearch.component.css']
})
export class AlbumsearchComponent implements OnInit {

  albums: any = [];
  artist_ID: any = '';
  artistName : any ='';

  imageUrl = 'https://cdn.pixabay.com/photo/2021/07/18/13/11/wreath-6475469_960_720.png'

  constructor(private _apiCaller2: ApiCallService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.artist_ID)
    this.artist_ID = (this.route.snapshot.paramMap.get('id'))
    this.artistName = (this.route.snapshot.paramMap.get('artistName'))
    this.searchImages(this.artist_ID)

  }

  searchImages(query: string) {
    this._apiCaller2.getAlbums(query).subscribe((data: any) => {
      this.albums = data.items
      console.log(this.albums)
    })
  }



}
