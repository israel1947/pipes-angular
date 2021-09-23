import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower:string="israel";
  nombreUpper:string="ISRAEL";
  nombreCompleto:string="IsraEl PoLo";

  //hace referencia a la fecha actual. No importa cuando se vea siempre sera la fecha actual
  fecha:Date=new Date();


}


//LLL/E, EE & EEE/hh//m/s/aaa/z, zz & zzz/