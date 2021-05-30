
import { Timestamp } from "rxjs";
import { medio } from "./medio";

export class Acto {
    id: number;
    titulo: string;
    descripcion:string;
    ubicacion: string;
    fecha:any;
    enUso: string;
    categoria: string;
    medios:medio[];
    truncating : boolean = true;
}

