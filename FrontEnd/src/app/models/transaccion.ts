export class Transaccion {
    _id!: string;
    monedaOrigen!: string;
    cantidadOrigen!:number;
    monedaDestino!: string;
    cantidadDestino!:number;
    emailCliente!:string;
    tasaConversion!:number;

    constructor() {
        this.monedaDestino="";
        this.monedaOrigen=""
    };
}
