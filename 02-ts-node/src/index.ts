// import { getPokemon } from './generics/get-pokemon';

// getPokemon(4)
//     .then(pokemon => console.log(pokemon.sprites.front_default))
//     .catch(error => console.log(error))
//     .finally(() => console.log('Fin de getPokemon'));

import { Pokemon } from './decorators/pokemon-class';

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

// console.log(charmander.savePokemonToDB(3));
charmander.publicApi = 'http://willcd.com';
console.log(charmander);

