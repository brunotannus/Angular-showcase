import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {
  searchForm: FormGroup;

  @Output()
  search: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.searchForm = new FormGroup({
      searchTerm: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.search.emit(this.searchForm.value.searchTerm);
    this.searchForm.reset();
  }
}
