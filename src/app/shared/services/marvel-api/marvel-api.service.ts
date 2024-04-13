import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  private publicKey = '7376c0b4bc57e6092fcba41641b0b8f8';
  private baseUrl = 'https://gateway.marvel.com/v1/public/characters';
  private timestamp = '1712974030';
  private hash = '40182c479de7d20730dac4cd750d591f';

  constructor(private http: HttpClient) { }

  listarComics(): Observable<any> {
    const url = `${this.baseUrl}?ts=${this.timestamp}&apikey=${this.publicKey}&hash=${this.hash}`;
    return this.http.get<any>(url)
      .pipe(map(res => res.data.results ))
  }
}
