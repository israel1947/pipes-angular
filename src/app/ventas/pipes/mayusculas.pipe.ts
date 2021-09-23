import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name:'mayuscula'//este es el nombre que se usara a la hora de utilizar el pipe

})

//para crear un pipe perzonalizado, es necesario que todos los pipe utilicen el implements PipeTransform importado desde Angular Core
export class MayusculaPipe implements PipeTransform {

//luego de escribir transform para inicializr el pipe, es necesario que especifiquemos lo que retornara dicho pipe, es este caso como es para convertir a mayuscula, quiere decir que lo que retornara sera un string
    transform( value:string, enMayus:boolean=true):string{//para que el pipe funcione, es necesario darle un argumento que en   este caso es value, el cual retornara un string

    //al decir que enMayus:boolean=true, estoy diciendo que el 2 parametro es opcional, por ende siempre sera verdadero, lo que convierte en mayuscula, pero al poner el segundom argumento en false, este automaticamente entrara en la condicion donde dice que si es falso, esntonces sera todo en minuscula

     //value.toUpperCase();estoy especificando que el valor que debe retornar este pipe es un string
    return (enMayus) ? value.toLocaleUpperCase() : value.toLocaleLowerCase();


    }
}


//a la hora de crear nuestros pipes personalizados, podemos mandarles tanos arguamentos como nosotros deseamos para hacerlo es necesario que los separemos por una coma(,)