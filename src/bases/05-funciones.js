const saludar = function (nombre) {
    return `hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `hola, ${nombre}`;
}

const saludar3 = (nombre) => `hola, ${nombre}`;

//console.log(saludar('Xavier'))
console.log(saludar('Xavier'))
console.log(saludar2('Flores'))
console.log(saludar3('Cardenas'))


const getUser = () => ({ uid: 'ASD132', username: 'XAVIER FLORES' })
console.log(getUser())



//TAREA
//1 transformar a funcion
//2 Retornar un objeto
// PRuebas
function getUsuarioActivo(nombre) {
    return {
        uid: 'AVD123', username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Andrea');
console.log(usuarioActivo)


const getUsuarioActivo2 = (nombre) => (
    { uid: 'AVD123', username: nombre }
);

console.log(getUsuarioActivo2('ANDREA LEON'))