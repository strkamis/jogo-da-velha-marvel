import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';
import { TabuleiroComponent } from './shared/tabuleiro/tabuleiro.component';
import { JogoDaVelhaService } from './shared/services/jogo-da-velha.service';
import { TelaInicialComponent } from './shared/tela-inicial/tela-inicial.component';

@NgModule({
  declarations: [
    AppComponent,
    JogoDaVelhaComponent,
    TabuleiroComponent,
    TelaInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [JogoDaVelhaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
