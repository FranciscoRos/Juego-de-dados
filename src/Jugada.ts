import { Jugador} from "./Jugador";
import {Dado} from "./Dado";
export class Jugada{
  _puntosJugador1 :number=0;  _puntosJugador2 : number=0;

  iniciarJugada(jugador1:Jugador, jugador2:Jugador, dado1:Dado, dado2:Dado){
    this._puntosJugador1= this._puntosJugador2= 0;
    this._puntosJugador1= this.turnarJugador(jugador1, dado1, dado2);
    this._puntosJugador2= this.turnarJugador(jugador2, dado1, dado2);
    this.determinarGanador(jugador1, this._puntosJugador1, jugador2, this._puntosJugador2);
  }

  public turnarJugador(jugadorEnTurno: Jugador, dado1: Dado, dado2: Dado):number{
    
    return (jugadorEnTurno.lanzarDados(dado1, dado2));
  }

  public determinarGanador(jugador1: Jugador,puntosJugador1:number, jugador2: Jugador,puntosJugador2:number):void{
    if(puntosJugador1==7){
      jugador1.puntoGanado=1;
    }else{
      jugador1.puntoGanado=0;
    }

    if(puntosJugador2==7){
      jugador2.puntoGanado=1;
    }else{
      jugador2.puntoGanado=0;
    }
  
  }
}