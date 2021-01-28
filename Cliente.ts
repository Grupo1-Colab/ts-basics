import { Persona } from './Persona';

export class Cliente extends Persona {
    idCliente: string;

    constructor(nombre: string, docPersonal: string, numCuenta: string) {
        super(nombre, docPersonal, numCuenta);
    }
}
