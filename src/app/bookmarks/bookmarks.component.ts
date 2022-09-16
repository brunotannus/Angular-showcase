import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { StorageService } from '../storage.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
})
export class BookmarksComponent implements OnInit {
  @Input()

  bookmarksList: string[] = [];

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  @Output() playAgain: EventEmitter<string> = new EventEmitter<string>();
  
  remove(i: number): void{
    this.bookmarksList.splice(i, 1);
    this.storageService.deleteBookmark(this.bookmarksList[i]).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
  });
}

  onPlay(i: number): void {
    this.playAgain.emit(this.bookmarksList[i]);
  }

}
