const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 4165464,
        lat: 65.5654,
        lng: 534684,
    }
};

//console.table(persona)
console.log(persona)

const persona2 = { ...persona }; // con spread logramos crear un nuevo objeto y referencia.
persona2.nombre = 'Peter';

console.log(persona2)
console.log(persona)