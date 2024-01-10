import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.sass'
})
export class MovieSearchComponent {
  @Output() queryChanged: EventEmitter<string> = new EventEmitter();

  inputNotEmpty: boolean = false;
  
  queryForm = new FormGroup({
    query: new FormControl(''),   
  })

  submitQueryChange() {
    const newQuery = this.queryForm.value.query;
    if (newQuery) {
      this.queryChanged.emit(newQuery);
    }
  }

  handleKeyUp() {
    const queryValue = this.queryForm.value.query;
    this.inputNotEmpty = !!queryValue; 
  }
}
