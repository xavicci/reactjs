// rafc +tab para usar el snniper de const function
//Cada componente debe tener una tarea en específico y no viole el principio de responsabilidad unica
// **event** al parecer siempre esta presente en JSX

import { useState } from 'react'; //imrs

export const AddCategory = ({ onNewCategory }) => {  //{ setCategories } se desestructura de las props

    const [inputValue, setInputValue] = useState('');  //usf + tab

    const onInputChange = ({ target }) => { //Con esta funcion mantenemos en memoria lo que escribimos en el input
        //console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) => {  //Con esta funcion evitamos que el formulario se refresque
        event.preventDefault();
        //console.log(inputValue);
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim())
        //setCategories(categories => [inputValue, ...categories]) //el SetCategories permite usar callback para llamar a categories
        setInputValue('');
    }

    return (
        //input, placeholder, value son conocidos como properties
        <form onSubmit={onSubmit} >
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}