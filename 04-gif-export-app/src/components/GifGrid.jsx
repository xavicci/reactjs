//react cada vez que detecta un cambio en el componente lo vuelve a renderizar
import { Gifitem } from "./Gifitem";
import { useFetchGifs } from "../hooks/useFetchGifs";

/* el useEffect es un hook que sirve para disparar efectos secundarios:
por ejemplo cuando el counter,category, cuando el componente se renderice por primera vez
quiero disparar un efecto
Use effect tiene que regresar una funcion y NO UNA PROMESA  */

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>`
            {
                isLoading && (<h2>Cargando... </h2>)
            }
            <div className='card-grid'>
                {
                    images.map((image) => (
                        <Gifitem key={image.id}
                            {...image} //es una tecnica enviar las propiedades
                        />
                    ))
                }
            </div >
        </>
    )
} 