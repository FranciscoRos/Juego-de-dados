export class Dado {
    _puntos;
    constructor() {
        this._puntos = 0;
    }
    lanzar() {
        this.puntos = Math.floor(Math.random() * (7 - 1));
    }
    get puntos() {
        return this._puntos;
    }
    set puntos(nuevosPuntos) {
        this._puntos = nuevosPuntos;
    }
}
