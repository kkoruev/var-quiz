import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tiles: Tile[] = [
    {text: '', cols: 1, rows: 2, color: 'lightblue'},
    {text: '', cols: 1, rows: 2, color: 'lightgreen'},
    {text: '', cols: 1, rows: 2, color: 'lightpink'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
