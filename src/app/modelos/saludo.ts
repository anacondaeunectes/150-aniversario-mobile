import { medio } from "./medio";

export class Saludo {
    id: number;
    titulo: string;
    descripcion: string;
    texto: string;
    enUso: string;
    medios: medio[];
    truncating : boolean = true;
}