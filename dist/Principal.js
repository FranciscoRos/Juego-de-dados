import { JuegoDados } from "./JuegoDados.js";
document.addEventListener("DOMContentLoaded", () => {
    const botonInicio = document.getElementById("iniciarJuego");
    const inputJugador1 = document.getElementById("jugador1");
    const inputJugador2 = document.getElementById("jugador2");
    const resultado = document.getElementById("resultado");
    botonInicio.addEventListener("click", () => {
        const nombreJugador1 = inputJugador1.value.trim();
        const nombreJugador2 = inputJugador2.value.trim();
        if (!nombreJugador1 || !nombreJugador2) {
            resultado.textContent = "⚠️ Se requieren los nombres de ambos jugadores.";
            return;
        }
        
        let juego = new JuegoDados(nombreJugador1, nombreJugador2);
        juego.iniciarJuego();
        
        resultado.textContent = juego.vencedor
            ? `🎲 El vencedor es: ${juego.vencedor.nombre}`
            : "🎲 No hay vencedor, empate!";
    });
});
