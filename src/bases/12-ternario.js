const activo = false;

let mensaje = '';

if (activo) {
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo'
}

console.log(mensaje)

const mensaje2 = (activo) ? 'Activo' : 'Inactivo';

const mensaje3 = activo && 'Activo';

console.log(mensaje2)
console.log(mensaje3)

