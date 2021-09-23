import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: []
})
export class NoComunesComponent {

  //i18nSelect
  nombre:string='israel';
  genero:string='masculino'; //variable que se usara para definir el genero del usuario

  //este objerto se hace para definir los dos generos, que luego seran llamados deprndiendo de si es mujer, u hombre
  invitacionMap={
    'masculino':'invitarlo',
    'femenino' :'invitarla'
  }

  //i18nPlural
  clientes:string[]=['Maria', 'Pedro','Pepito','Rossana'];

  clientesMap={
    '=0':'No hay clientes en espera',//esto quiere decir que si el areglo de clientes, es igual a cero(0), entonces retornara este string
    '=1':'tenemos 1 cliente esperando',
    
    'other':'tenemos # clientes esperando'//esto dice que si el numero de clientes es mayor a uno, entonces mostrara el numero de los clientes que se encuentren en espera, y su respectivo mensaje(el numeral hace referencia a la interrogacion)
  }

  cambiarCliente(){
    this.nombre="juana"
    this.genero="femenino"
   // console.log('diste click');
  }

  borrarCliente(){
    this.clientes.pop()
    //console.log('diste click');
  }

  //keyValue pipe

  persona={
    
    nombre:'israel',
    edad:23,
    direccion:'Santa Marta, Colombia'
  }

  //Json pipe

  heroes=[
    {nombre:'super man', veuela:true},
    {nombre:'spider-man', vuela:false},
    {nombre:'batman', vuela:false},
    {nombre:'thor', vuela:true}
  ]

  //Async pipe

//uso de async mediante observable
myObservable=interval(1000); //interval emite un valor en secuencia cada 1 segundo

//uso de async mediante observable
valorPromesa= new Promise((resolve,reject)=>{

  setTimeout(()=>{
    resolve('fin de la promesa')
  },3500);
});

}
