
const JuegoDados_1 = require("./JuegoDados");
function main() {
    const nombreJugador1 = prompt("Ingrese el nombre del primer jugador:");
    const nombreJugador2 = prompt("Ingrese el nombre del segundo jugador:");
    if (!nombreJugador1 || !nombreJugador2) {
        console.log("Se requieren los nombres de los jugadores");
        return;
    }
    console.log("Primer jugador: " + nombreJugador1 + "\n");
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
