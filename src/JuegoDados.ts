import { Jugador } from './Jugador';
import { Dado } from './Dado';
import { Jugada } from './Jugada';
export class JuegoDados {
  private _jugador1: Jugador;
  private _jugador2: Jugador;
  private _jugadorUnoElegido: boolean = true;
  private _dado1: Dado=new Dado();
  private _dado2: Dado=new Dado();;
  private _marcadorJugador2;
  private _marcadorJugador1;
  private _cantidadJugadas :number =0;
  private _vencedor: Jugador|null = new Jugador();


  get vencedor(): Jugador | null {
    return this._vencedor;
  }
  
  constructor(nombreJugador: string, nombreJugador2: string) {
    
    this._marcadorJugador1 = 0;
    this._marcadorJugador2 = 0;
    this._jugador1 = new Jugador();
    this._jugador1.nombre = nombreJugador;
    this._jugador2 = new Jugador();
    this._jugador2.nombre = nombreJugador2;

  }

  public elegirPrimerLanzador(): void {
    if (Math.floor(Math.random() * (3 - 1)) == 1) {
      console.log("El jugador 1 empieza");
      this._jugadorUnoElegido = true
    } else {
      this._jugadorUnoElegido = false;
    }
  }

  public iniciarJugada():void{
    var jugadaActual :Jugada ;
    jugadaActual = new Jugada();

    if(this._jugadorUnoElegido){
      jugadaActual.iniciarJugada(this._jugador1,this._jugador2,this._dado1, this._dado2);
    }else{
      jugadaActual.iniciarJugada(this._jugador2,this._jugador1,this._dado1, this._dado2);
    }
    this._marcadorJugador1 = this._marcadorJugador1 + this._jugador1.puntoGanado;
    this._marcadorJugador2 = this._marcadorJugador2 + this._jugador2.puntoGanado;
  }

  public iniciarJuego():void{
    this._dado1 = new Dado();
    this._dado2 = new Dado();
    
    this._marcadorJugador1 = 0;
    this._marcadorJugador2 = 0;
    this._cantidadJugadas=0;
    this.elegirPrimerLanzador();
    do{
      this.iniciarJugada();
      this._cantidadJugadas++;
      console.log(`Jugada: ${this._cantidadJugadas} \n
      Marcador Jugador 1: ${this._marcadorJugador1} \n
      Marcador Jugador 2: ${this._marcadorJugador2}`);

    }while(this._marcadorJugador1!= 5 && this._marcadorJugador2!=5);
    console.log("/nEl juego ha terminado");
    this._vencedor = this.determinarVencedor();
  }

  public determinarVencedor():Jugador | null{
    if(this._marcadorJugador1==5){
      return this._jugador1;
    }else if(this._marcadorJugador2==5){
      return this._jugador2;
    }else{
      return null;
    }
  }
}