
/**
 * Me permite coger cartas
 * @param {Array <string>} deck array de string 
 * @returns <string> devuelve una carta del deck
 */
export const pedirCarta = ( deck ) => {
    

    if ( !deck || deck.length === 0 ) {
        throw new Error ('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}