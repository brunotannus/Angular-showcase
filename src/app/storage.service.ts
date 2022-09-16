import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';


  getHistory(){
    return this.http.get(this.rootURL + '/history');
  }

  getBookmarks(){
    return this.http.get(this.rootURL + '/bookmarks');
  }

 deleteBookmark(bookmark: any) {
     return this.http.request('delete', this.rootURL + '/bookmark', { body: bookmark })
   }

  addHistoryItem(historyItem: any) {
    return this.http.post(this.rootURL + '/historyItem', {historyItem});
  }

  addBookmark(bookmark: any) {
    return this.http.post(this.rootURL + '/bookmark', {bookmark});
  }

}