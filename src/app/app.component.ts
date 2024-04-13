import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jogo-da-velha';
  // constructor() {
  //   this.generateMD5Hash();
  // }

  // generateMD5Hash() {
  //   const publicKey = '7376c0b4bc57e6092fcba41641b0b8f8';
  //   const privateKey = 'b33fa493723ec495550751961179946936a66806';

  //   // Concatenar a chave privada e a chave pública
  //   const data = privateKey + publicKey;

  //   // Calcular o hash MD5
  //   const md5Hash = CryptoJS.MD5(data).toString(CryptoJS.enc.Hex);

  //   console.log('Hash MD5 gerado:', md5Hash);
  // }
}
