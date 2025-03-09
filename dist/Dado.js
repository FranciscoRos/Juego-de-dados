"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dado = void 0;
class Dado {
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
exports.Dado = Dado;
