import {pedirCarta, valorCarta } from "./";

/**
 * 
 * @param {Number} puntosMinimos puntos mínimos para ganar computadora
 * @param {Array <string>} deck  
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if (!puntosMinimos)
        throw  new Error ('puntosMinimos necesario');
    if (!puntosHTML)
        throw new Error  ('Necesario argumento HTML');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Empate, gana la Banca');
        } else if ( puntosMinimos > 21 ) {
            alert('Gana la Banca, loooser')
        } else if( puntosComputadora > 21 ) {
            alert('Me has ganado¡¡¡');
        } else {
            alert('Te he ganado¡¡¡')
        }
    }, 200 );
}