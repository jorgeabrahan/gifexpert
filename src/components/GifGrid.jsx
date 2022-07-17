import PropTypes from 'prop-types';
//Importaciones de componentes de terceros
import { GifItem } from "./GifItem";
//Importaciones de funciones u otras cosas que no sean componentes
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);
    
    return (
        <div key={category}>
            <h3>{category}</h3>
            
            {isLoading && <h2>Cargando...</h2>}

            <div className="card-grid">
                {
                    images.map(image => (
                        <GifItem
                            key={image.id}
                            {...image} //Se esparcen las propiedades de un objeto para que puedan ser accedidas como props
                        />
                    ))
                }
            </div>
        </div>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}