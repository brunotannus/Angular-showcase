import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { StorageService } from './storage.service';

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
  bookmark: string = '';;

  sideNavFlag = 'side-nav-default';

  constructor() {}

  ngOnInit(): void {}

  onSearchItem(searchTerm: string): void {
    this.url = searchTerm;
    this.historyList.push(searchTerm);
  }

  getURL(url: string): void  {
    this.url = url;
    console.log("playCurrent");
  }

  getBookmark(bookmark: string): void {
    this.bookmark = bookmark;
    if (!this.bookmarksList.includes(bookmark)) {
    this.bookmarksList.push(bookmark);
    console.log("bookmark");
    }
  }

  toggle(): void {
    if(this.sideNavFlag == 'side-nav-opened') {
      this.sideNavFlag = 'side-nav-default';
    } else {
      this.sideNavFlag = 'side-nav-opened';
    }
  }

}
