import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  //interact with input html element
  searchContent: any = "";
  



  //apply output angular concept with the father: artistSearch page
  @Output() searchContentChanged = new EventEmitter<string>();
  scream() {
              if (this.searchContent) {
                this.searchContentChanged.emit(this.searchContent)
                this._router.navigate(['/artist', this.searchContent])
              } else {
                this._router.navigate(['/artist', ''])
                return
    }

  }


  constructor(private _router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {

    // applying some RxJS pipes for the API data flow
let searchBox : any = document.getElementById('searchBox');
let A01Flux = fromEvent(searchBox,'input').pipe(debounceTime(800), (distinctUntilChanged()))
A01Flux.subscribe((x)=> {this.scream()}  )

    // Presenting previous search results when browser's back button clicked 
    this.searchContent = (this.route.snapshot.paramMap.get('slayquery'))
    this.searchContentChanged.emit(this.searchContent)
  }

}