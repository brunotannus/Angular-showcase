import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  @Input()

  historyList: string[] = [];
  url: string = '';

  ngOnInit(): void {}

  constructor() {}

  @Output() newBookmark: EventEmitter<string> = new EventEmitter<string>();

  @Output() playAgain: EventEmitter<string> = new EventEmitter<string>();

  onClick(i: number): void{
    this.newBookmark.emit(this.historyList[i]);
  }

  onPlay(i: number): void {
    this.playAgain.emit(this.historyList[i]);
  }
  
}
