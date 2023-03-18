const nombre = 'xavier';
const apellido = 'flores';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `hola, mi nombre es ${nombre} y apellido ${apellido}`
console.log(nombreCompleto);

function getSaludo(nombre, apellido) {
    return `Hola mi nombre es ${nombre} ${apellido} XXX`;
}

console.log(`Este es mi mensaje: ${getSaludo(nombre, apellido)}`)