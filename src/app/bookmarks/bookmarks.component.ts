import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

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

  @Output() playAgain: EventEmitter<string> = new EventEmitter<string>();

  remove(i: number): void{
    this.bookmarksList.splice(i, 1);
  }

  onPlay(i: number): void {
    this.playAgain.emit(this.bookmarksList[i]);
  }

}
