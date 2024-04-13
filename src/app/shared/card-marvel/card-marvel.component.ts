import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../services/marvel-api/marvel-api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-card-marvel',
  templateUrl: './card-marvel.component.html',
  styleUrls: ['./card-marvel.component.scss']
})
export class CardMarvelComponent implements OnInit {
  allCharacters: any = [];

  constructor(private apiservice: MarvelApiService) {
  }


  ngOnInit() {
    this.getCharacters()
  }

  getCharacters() {
    this.allCharacters = this.apiservice.listarComics();

  }
}
