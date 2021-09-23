import { Component, OnInit } from '@angular/core';
import { Heroe, Color } from '../../interface/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayus:boolean=false;

  ordenarPor='';//aqui lo que estoy diciendo es que por defecto el resultado de esta sera un string vacio hasta que se de clic en uno de los botones, al hacer clic el string pasa a llenarse con el nombre asignado a cada boton

  heroes:Heroe[]=[
    {nombre:'super man', vuela:true, color:Color.azul},
    {nombre:'Batman', vuela:false, color:Color.negro},
    {nombre:'thor', vuela:true, color:Color.rojo},
    {nombre:'linterna verde', vuela:true, color:Color.verde}

  ]

  capitalizar(){
    this.enMayus=!this.enMayus;//valor por defecto(falso), y al dar click cambi al valor opuesto, es decir(verdadero)
  }

  porOrden(valor:string){
    this.ordenarPor=valor//aqui estoy diciendo que tomara el valor del boton al cual yo precione y le di clic
    //console.log(valor)

  }

}
