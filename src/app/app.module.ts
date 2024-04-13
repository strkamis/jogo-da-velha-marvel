import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';
import { TabuleiroComponent } from './shared/tabuleiro/tabuleiro.component';
import { JogoDaVelhaService } from './shared/services/jogo-da-velha/jogo-da-velha.service';
import { TelaInicialComponent } from './shared/tela-inicial/tela-inicial.component';
import { SearchInputComponent } from './shared/search-input/search-input.component';
import { CardMarvelComponent } from './shared/card-marvel/card-marvel.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    JogoDaVelhaComponent,
    TabuleiroComponent,
    TelaInicialComponent,
    SearchInputComponent,
    CardMarvelComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [JogoDaVelhaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
