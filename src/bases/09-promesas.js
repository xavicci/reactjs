import { getHeroeById } from './bases/08-imp-ex.js';

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         reject('No se pudo encontrar el heore')
//     }, 2000)
// });

// promesa.then((heroe) => {
//     console.log('Then de la promesa', heroe)
// })
//     .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject('No se pudo encontrar el heore')
            }
        }, 2000)

    });

}

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn);

