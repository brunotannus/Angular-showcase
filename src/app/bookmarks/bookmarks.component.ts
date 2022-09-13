import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
})
export class BookmarksComponent implements OnInit {
  @Input()
  bookmarksList: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
