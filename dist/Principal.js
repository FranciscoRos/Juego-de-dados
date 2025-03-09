"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
const JuegoDados_1 = require("./JuegoDados");
function main() {
    const nombreJugador1 = readlineSync.question("Ingrese el nombre del primer jugador: ");
    const nombreJugador2 = readlineSync.question("Ingrese el nombre del segundo jugador: ");
    if (!nombreJugador1 || !nombreJugador2) {
        console.log("Se requieren los nombres de los jugadores");
        return;
    }
    console.log("\nPrimer jugador: " + nombreJugador1);
    console.log("Segundo jugador: " + nombreJugador2);
    var juego = new JuegoDados_1.JuegoDados(nombreJugador1, nombreJugador2);
    juego.iniciarJuego();
    if (juego.vencedor != null) {
        console.log("El vencedor es: " + juego.vencedor.nombre);
    }
    else {
        console.log("No hay vencedor");
    }
}
main();
