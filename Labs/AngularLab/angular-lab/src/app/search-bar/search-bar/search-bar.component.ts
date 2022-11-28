import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
@Output() submitted = new EventEmitter<string>();
term = '';

onFormSubmit(event: any) {
  event.preventDefault();
  this.term = event.target[0].value;
  this.submitted.emit(this.term);
}
}
