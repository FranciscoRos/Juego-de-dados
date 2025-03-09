import {Dado} from "./Dado";
export class Jugador{
  _nombre : string ="";
  _puntoGanado: number =0;
  
  public lanzarDados(dado1: Dado, dado2: Dado): number {
    //Lanzamos los dados
    dado1.lanzar();
    dado2.lanzar();

    //Devolvemos la suma de los puntos en los dados
    return (dado1.puntos +dado2.puntos);
  }
  get nombre():string{
    return this._nombre;
  }
  set nombre(nombreNuevo:string){
    this._nombre=nombreNuevo;
  }
  get puntoGanado():number{
    return this._puntoGanado;
  }
  set puntoGanado(puntoGanadoNuevo:number){
    this._puntoGanado=puntoGanadoNuevo;
  }
}