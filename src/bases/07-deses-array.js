const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes[0])
console.log(personajes[1])
console.log(personajes[2])

const [pers1, pers2, pers3] = personajes;
console.log(pers1, pers2, pers3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// TAREA
// 1 es nombre
// set nombre
const useState = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }]
}

const arr = useState('Goku');
console.log(arr)

const [nombre, setNombre] = arr;

console.log(nombre)
setNombre()