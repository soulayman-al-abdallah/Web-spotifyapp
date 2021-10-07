import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  //interact with input
  searchContent : any = "";
 // @Input() searchContent = "";

  //apply output
  @Output() searchContentChanged = new EventEmitter<string>();
 scream() {
    if (this.searchContent) {
      this.searchContentChanged.emit(this.searchContent)
      this._router.navigate(['/artist', this.searchContent])
    }else{
    this._router.navigate(['/artist', ''])
    return}

  }


  constructor(private _router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

this.searchContent= (this.route.snapshot.paramMap.get('slayquery'))
this.searchContentChanged.emit(this.searchContent)
  }

 


}