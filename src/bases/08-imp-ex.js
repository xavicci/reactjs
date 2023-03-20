import { heroes } from '../data/heroes.js';

export const getHeroeById = (id) => {
    return heroes.find(result => result.id === id);
}

//console.log(getHeroeById(4))

export const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);


//console.log(getHeroeByOwner('DC'))

