export class Jugada {
    _puntosJugador1 = 0;
    _puntosJugador2 = 0;
    iniciarJugada(jugador1, jugador2, dado1, dado2) {
        this._puntosJugador1 = this._puntosJugador2 = 0;
        this._puntosJugador1 = this.turnarJugador(jugador1, dado1, dado2);
        this._puntosJugador2 = this.turnarJugador(jugador2, dado1, dado2);
        this.determinarGanador(jugador1, this._puntosJugador1, jugador2, this._puntosJugador2);
    }
    turnarJugador(jugadorEnTurno, dado1, dado2) {
        return (jugadorEnTurno.lanzarDados(dado1, dado2));
    }
    determinarGanador(jugador1, puntosJugador1, jugador2, puntosJugador2) {
        if (puntosJugador1 == 7) {
            jugador1.puntoGanado = 1;
        }
        else {
            jugador1.puntoGanado = 0;
        }
        if (puntosJugador2 == 7) {
            jugador2.puntoGanado = 1;
        }
        else {
            jugador2.puntoGanado = 0;
        }
    }
}
