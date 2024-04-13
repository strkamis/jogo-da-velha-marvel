import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Input() placeholder: string = 'Pesquisar...';
  @Input() searchTerm: string = ''; // input para o termo de pesquisa
  @Output() searchTermChange = new EventEmitter<string>(); // Output event para emitir mudanças no termo de pesquisa

  constructor() {}

  // onInput(event: Event) {
  //   const value = (event.target as HTMLInputElement).value;
  //   // this.searchTermChange.emit(value);
  //   this.searchTerm.filter =
  // }

  onInput(term: string){
    this.searchTermChange.emit(term);
  }


}
