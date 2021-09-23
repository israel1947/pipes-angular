import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  //estoy dando el argumento de tipo heroe para decir  que este pipe es de tipo Heroes, osea  que le digo que tipo es cada caracteristica del heroe. nombre:strin, vuela:boolean, color:Color, que esta definido en la interface como enum osea enumerrado de 0 hasta 3 en este caso

  //y en el segundo argumento el de orderPor, le estoy diciendo que debe ser de tipo string  es decir que si su valor es nombre, debe organizarlo como corresponde(alfabeticamente), si es vuela debe organizarlo por su habilidad(si vuela o no), y si es color debe organizarlo por su color(o sea por orden numerico)

  transform(heroes:Heroe[], orderPor:string='sin valor'):Heroe[] {

    switch(orderPor){

      case 'nombre': return  heroes=heroes.sort((a,b)=> (a.nombre > b.nombre) ? 1 : -1);//para decir que ordene a los super heroes por su nombre. o sea que se ordenaran por orden alfabetico

      case 'vuela':  return  heroes=heroes.sort((a,b)=> (a.vuela > b.vuela) ? 1 : -1);//para decir quordene a los super heroes poir su habilidad para volar 
      

      case 'color': return  heroes=heroes.sort((a,b)=> (a.color > b.color) ? 1 : -1);//para decir quordene a los super heroes por colores 

      default:return heroes;//en caso de que no se cumpla niguno de los casos, es decir que alguno sea igual, entonces retrnara el arreglopor defecto, es decir: desordenado
    }
  }
}


//cada nombre de los case debe ser el mismo que le di como argumento en el HTML al evento clic de cada uno de los botones
