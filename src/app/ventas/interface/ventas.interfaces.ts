
//enum lo que  hace es enumerar cada uno de los colores en este caso es decir que el navegador lo inbterpreta asi: rojo=0, negro=1, azul=2, y verde=3
export enum Color{
    rojo, negro, azul, verde
}


export interface Heroe{
    nombre:string,
    vuela:boolean,
    color:Color,
}