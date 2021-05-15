import { medio } from "../modelos/medio";

export class historia {
    idHistoria : number;
    titulo: string;
    subtitulo: string;
    descripcion : string;
    enUso: number;
    medios: medio[]
}