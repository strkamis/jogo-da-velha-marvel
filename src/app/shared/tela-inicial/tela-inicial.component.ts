import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from '../services/jogo-da-velha/jogo-da-velha.service';
import { Character } from 'src/app/shared/interface/character.interface';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent implements OnInit {
  characters: Character[] = [];
  searchTerm: string = '';


  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar()
  }

  get showInicio(): boolean {
    return this.jogoDaVelhaService.showInicio;
  }

  iniciarJogo(): void {
    this.jogoDaVelhaService.iniciarJogo()
  }


}
