import { JuegoDados } from "./JuegoDados.js";

document.addEventListener("DOMContentLoaded", () => {
    const botonInicio = document.getElementById("iniciarJuego") as HTMLButtonElement;
    const inputJugador1 = document.getElementById("jugador1") as HTMLInputElement;
    const inputJugador2 = document.getElementById("jugador2") as HTMLInputElement;
    const resultado = document.getElementById("resultado") as HTMLHeadingElement;

    botonInicio.addEventListener("click", () => {
        const nombreJugador1: string = inputJugador1.value.trim();
        const nombreJugador2: string = inputJugador2.value.trim();

        if (!nombreJugador1 || !nombreJugador2) {
            resultado.textContent = "⚠️ Se requieren los nombres de ambos jugadores.";
            return;
        }

        
        let juego: JuegoDados = new JuegoDados(nombreJugador1, nombreJugador2);
        juego.iniciarJuego();

        
        resultado.textContent = juego.vencedor
            ? `🎲 El vencedor es: ${juego.vencedor.nombre}`
            : "🎲 No hay vencedor, empate!";
    });
});
