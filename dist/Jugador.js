export class Jugador {
    _nombre = "";
    _puntoGanado = 0;
    lanzarDados(dado1, dado2) {
        //Lanzamos los dados
        dado1.lanzar();
        dado2.lanzar();
        //Devolvemos la suma de los puntos en los dados
        return (dado1.puntos + dado2.puntos);
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombreNuevo) {
        this._nombre = nombreNuevo;
    }
    get puntoGanado() {
        return this._puntoGanado;
    }
    set puntoGanado(puntoGanadoNuevo) {
        this._puntoGanado = puntoGanadoNuevo;
    }
}
