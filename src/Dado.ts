export class Dado {
  private _puntos: number;
  
  constructor(){
    this._puntos=0;
  }


  public lanzar():void {
    this.puntos = Math.floor(Math.random() * (7-1));
  }
  get puntos():number{
    return this._puntos
  }
  set puntos(nuevosPuntos){
    this._puntos = nuevosPuntos;
  }
}