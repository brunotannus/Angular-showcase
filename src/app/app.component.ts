import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { StorageService } from './storage.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'front-end';

  historyList: string[] = [];
  bookmarksList: string[] = [];

  url: string = '';
  bookmark: string = '';;

  sideNavFlag = 'side-nav-default';

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.getHistoryList();
    this.getBookmarksList();
  }

  destroy$: Subject<boolean> = new Subject<boolean>();

  onSearchItem(searchTerm: string): void {
    this.storageService.addHistoryItem(searchTerm).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
  });
    this.url = searchTerm;
    this.historyList.push(searchTerm);
}

  getBookmarksList() {
    this.storageService.getBookmarks().pipe(takeUntil(this.destroy$)).subscribe((bookmarksList: any) => {
        this.bookmarksList = bookmarksList;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getHistoryList() {
    this.storageService.getHistory().pipe(takeUntil(this.destroy$)).subscribe((historyList: any) => {
      this.historyList = historyList;
  });
  }

  getURL(url: string): void  {
    this.url = url;
  }

  getBookmark(bookmark: string): void {
    this.storageService.addBookmark(bookmark).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.getBookmarksList();
  });
     this.bookmark = bookmark;
     if (!this.bookmarksList.includes(bookmark)) {
      this.bookmarksList.push(bookmark);
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
