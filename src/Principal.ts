import * as readlineSync from 'readline-sync';
import { JuegoDados } from "./JuegoDados";

function main(): void {
  const nombreJugador1 = readlineSync.question("Ingrese el nombre del primer jugador: ");
  const nombreJugador2 = readlineSync.question("Ingrese el nombre del segundo jugador: ");

  if (!nombreJugador1 || !nombreJugador2) {
    console.log("Se requieren los nombres de los jugadores");
    return;
  }

  console.log("\nPrimer jugador: " + nombreJugador1);
  console.log("Segundo jugador: " + nombreJugador2);

  var juego: JuegoDados = new JuegoDados(nombreJugador1, nombreJugador2);
  juego.iniciarJuego();

  if (juego.vencedor != null) {
    console.log("El vencedor es: " + juego.vencedor.nombre);
  } else {
    console.log("No hay vencedor");
  }
}

main();
