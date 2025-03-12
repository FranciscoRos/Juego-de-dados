import { Jugador } from './Jugador.js';
import { Dado } from './Dado.js';
import { Jugada } from './Jugada.js';
export class JuegoDados {
    _jugador1;
    _jugador2;
    _jugadorUnoElegido = true;
    _dado1 = new Dado();
    _dado2 = new Dado();
    ;
    _marcadorJugador2;
    _marcadorJugador1;
    _cantidadJugadas = 0;
    _vencedor = new Jugador();
    get vencedor() {
        return this._vencedor;
    }
    constructor(nombreJugador, nombreJugador2) {
        this._marcadorJugador1 = 0;
        this._marcadorJugador2 = 0;
        this._jugador1 = new Jugador();
        this._jugador1.nombre = nombreJugador;
        this._jugador2 = new Jugador();
        this._jugador2.nombre = nombreJugador2;
    }
    elegirPrimerLanzador() {
        if (Math.floor(Math.random() * (3 - 1)) == 1) {
            console.log("El jugador 1 empieza");
            this._jugadorUnoElegido = true;
        }
        else {
            this._jugadorUnoElegido = false;
        }
    }
    iniciarJugada() {
        var jugadaActual;
        jugadaActual = new Jugada();
        if (this._jugadorUnoElegido) {
            jugadaActual.iniciarJugada(this._jugador1, this._jugador2, this._dado1, this._dado2);
        }
        else {
            jugadaActual.iniciarJugada(this._jugador2, this._jugador1, this._dado1, this._dado2);
        }
        this._marcadorJugador1 = this._marcadorJugador1 + this._jugador1.puntoGanado;
        this._marcadorJugador2 = this._marcadorJugador2 + this._jugador2.puntoGanado;
    }
    iniciarJuego() {
        this._dado1 = new Dado();
        this._dado2 = new Dado();
        this._marcadorJugador1 = 0;
        this._marcadorJugador2 = 0;
        this._cantidadJugadas = 0;
        this.elegirPrimerLanzador();
        do {
            this.iniciarJugada();
            this._cantidadJugadas++;
            console.log(`Jugada: ${this._cantidadJugadas} \n
      Marcador Jugador 1: ${this._marcadorJugador1} \n
      Marcador Jugador 2: ${this._marcadorJugador2}`);
        } while (this._marcadorJugador1 != 5 && this._marcadorJugador2 != 5);
        console.log("/nEl juego ha terminado");
        this._vencedor = this.determinarVencedor();
    }
    determinarVencedor() {
        if (this._marcadorJugador1 == 5) {
            return this._jugador1;
        }
        else if (this._marcadorJugador2 == 5) {
            return this._jugador2;
        }
        else {
            return null;
        }
    }
}
