const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'Iroman',
};

// const { nombre, edad, clave } = persona;


// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = (usuario) => {
    const { nombre, edad, clave } = usuario;
    console.log(nombre, edad, clave)
}

retornaPersona(persona);
//////////////////////////////////////////////

const retornaPersona2 = ({ nombre, edad, clave, rango = 'Soldado' }) => {
    console.log(nombre, edad, clave, rango)

}

retornaPersona2(persona);
////////////////////////////////////////////////////

const useContext = ({ nombre, edad, clave, rango = 'Soldado' }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 656,
            long: 5464,
        },
    }
}

const { nombreClave, anios, latlng: { lat, long } } = useContext(persona);
console.log(nombreClave, anios, lat, long)
