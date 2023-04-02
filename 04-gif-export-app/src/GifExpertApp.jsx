//Cada componente debe tener una tarea en específico y no viole el principio de responsabilidad unica
import React from 'react';
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    // useState es utilizado para almacenar un estado, y estos pueden cambiar el html -> Se debe usar HOOK's
    const [categories, setCategories] = useState(['One Punch']);  //setCategories es el que da acceso a la memoria de ese estado.

    const onAddCategory = (newCategory) => {
        //console.log(newCategory);
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]) // toma el estado inicial, le hace modificaciones y devuelve otro estado.
    }

    return (

        //<AddCategory />  podemos enviarle cualquier tipo de propiedad .. hasta funciones!
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                //setCategories={setCategories} esto no esta mal, pero oculta nuestra implementacion, haciendola dificil de leer 
                // "on" representa un evento
                onNewCategory={onAddCategory}
            />

            {/* Listado de Gifs */}
            {/* <button onClick={onAddCategory}> Agregar </button> */}
            {/*se eliminan los ol ya que creamos el componente de gifgrid */}
            {
                categories.map(category => (
                    <GifGrid
                        key={category} category={category}
                    />)
                )
            }
        </>
    );
}; 
