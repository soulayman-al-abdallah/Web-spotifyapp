import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums-cards',
  templateUrl: './albums-cards.component.html',
  styleUrls: ['./albums-cards.component.css']
})
export class AlbumsCardsComponent implements OnInit {

@Input() album : any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
