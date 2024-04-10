import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JogoDaVelhaService {
  // Constants
  private readonly TAM_TAB: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly VAZIO: number = 0;

  // Game state variables
  private tabuleiro: number[][];
  private numMovimentos: number;
  private vitoria: boolean | number[][];

  // Player and display variables
  private _jogador: number;
  private _showInicio: boolean;
  private _showTabuleiro: boolean;
  private _showFinal: boolean;

  constructor() {
    this.inicializar();
  }

  // Game initialization methods
  inicializar(): void {
    this._showInicio = true;
    this._showTabuleiro = false;
    this._showFinal = false;
    this.numMovimentos = 0;
    this._jogador = this.X;
    this.vitoria = false;
    this.inicializarTabuleiro();
  }

  inicializarTabuleiro(): void {
    this.tabuleiro = [];
    for (let i = 0; i < this.TAM_TAB; i++) {
      this.tabuleiro[i] = [this.VAZIO, this.VAZIO, this.VAZIO];
    }
  }

  // Getters for game state properties
  get showInicio(): boolean {
    return this._showInicio;
  }

  get showTabuleiro(): boolean {
    return this._showTabuleiro;
  }

  get showFinal(): boolean {
    return this._showFinal;
  }

  get jogador(): number {
    return this._jogador;
  }

  // Game start method
  iniciarJogo(): void {
    this._showInicio = false;
    this._showTabuleiro = true;
  }

  // Game move method
  jogar(posX: number, posY: number): void {
    // Check for invalid move
    if (this.tabuleiro[posX][posY] !== this.VAZIO || this.vitoria) {
      return;
    }

    // Place the current player's mark
    this.tabuleiro[posX][posY] = this._jogador;
    this.numMovimentos++;

    // Check for victory and switch players
    this.vitoria = this.fimJogo(posX, posY, this.tabuleiro, this._jogador);
    this._jogador = this._jogador === this.X ? this.O : this.X;

    // Check for draw or proceed with CPU turn
    if (!this.vitoria && this.numMovimentos < 9) {
      this.cpuJogar();
    }

    // Handle game end scenarios
    if (this.vitoria !== false) {
      this._showFinal = true;
    } else if (!this.vitoria && this.numMovimentos === 9) {
      this._jogador = 0; // No winner, set player to 0
      this._showFinal = true;
    }
  }

  // Check for victory conditions
  fimJogo(
    linha: number,
    coluna: number,
    tabuleiro: number[][],
    jogador: number
  ): boolean | number[][] {
    let fim: boolean | number[][] = false;

    // Check rows
    if (
      tabuleiro[linha][0] === jogador &&
      tabuleiro[linha][1] === jogador &&
      tabuleiro[linha][2] === jogador
    ) {
      fim = [
        [linha, 0],
        [linha, 1],
        [linha, 2],
      ];
    }

    // Check columns
    if (
      tabuleiro[0][coluna] === jogador &&
      tabuleiro[1][coluna] === jogador &&
      tabuleiro[2][coluna] === jogador
    ) {
      fim = [
        [0, coluna],
        [1, coluna],
        [2, coluna],
      ];
    }

    // Check diagonals
    if (
      tabuleiro[0][0] === jogador &&
      tabuleiro[1][1] === jogador &&
      tabuleiro[2][2] === jogador
    ) {
      fim = [
        [0, 2],
        [1, 1],
        [2, 0],
      ];
    }

    return fim;
  }

  // CPU move logic
  cpuJogar(): void {
    // Check for winning move
    let jogada: number[] = this.obterJogada(this.O);

    if (jogada.length <= 0) {
      // Try to block opponent's winning move
      jogada = this.obterJogada(this.X);
    }

    if (jogada.length <= 0) {
      // Random move if no winning or blocking move is available
      let jogadas: number[][] = [];
      for (let i = 0; i < this.TAM_TAB; i++) {
        for (let j = 0; j < this.TAM_TAB; j++) {
          if (this.tabuleiro[i][j] === this.VAZIO) {
            jogadas.push([i, j]);
          }
        }
      }
      let k = Math.floor(Math.random() * (jogadas.length - 1));
      jogada = jogadas[k];
    }

    this.tabuleiro[jogada[0]][jogada[1]] = this._jogador;
    this.numMovimentos++;
    this.vitoria = this.fimJogo(
      jogada[0],
      jogada[1],
      this.tabuleiro,
      this._jogador
    );
    this._jogador = this._jogador === this.X ? this.O : this.X;
  }

  // Check for possible winning moves for the specified player
  obterJogada(jogador: number): number[] {
    let tab = this.tabuleiro;
    for (let lin = 0; lin < this.TAM_TAB; lin++) {
      for (let col = 0; col < this.TAM_TAB; col++) {
        if (tab[lin][col] !== this.VAZIO) {
          continue;
        }
        tab[lin][col] = jogador;
        if (this.fimJogo(lin, col, tab, jogador)) {
          return [lin, col];
        }
        tab[lin][col] = this.VAZIO;
      }
    }
    return [];
  }

  // Check if X should be displayed for the given coordinates
  exibirX(posX: number, posY: number): boolean {
    return this.tabuleiro[posX][posY] === this.X;
  }

  // Check if O should be displayed for the given coordinates
  exibirO(posX: number, posY: number): boolean {
    return this.tabuleiro[posX][posY] === this.O;
  }

  // Check if victory highlight should be displayed for the given coordinates
exibirVitoria(posX: number, posY: number): boolean {
  let exibirVitoria: boolean = false;

  // Ensure vitoria is an array before iterating
  if (Array.isArray(this.vitoria)) {
    for (let pos of this.vitoria) {
      if (pos[0] === posX && pos[1] === posY) {
        exibirVitoria = true;
        break;
      }
    }
  }

  return exibirVitoria;
}

  // Start a new game and show the board
  novoJogo(): void {
    this.inicializar();
    this._showFinal = false;
    this._showInicio = false;
    this._showTabuleiro = true;
  }
}
