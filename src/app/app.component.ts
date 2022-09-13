import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'front-end';

  historyList: string[] = [];
  bookmarksList: string[] = [];

  url: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSearchItem(searchTerm: string): void {
    this.url = searchTerm;
    this.historyList.push(searchTerm);
  }
}
