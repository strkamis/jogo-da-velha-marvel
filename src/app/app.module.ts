import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoDaVelhaComponent } from './jogo-da-velha/jogo-da-velha.component';

@NgModule({
  declarations: [
    AppComponent,
    JogoDaVelhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
