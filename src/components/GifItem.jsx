import PropTypes from 'prop-types'; //npm install prop-types *solo en vite*

export const GifItem = ({title, url}) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

/* Especificar el tipo de dato que se espera recibir en las propiedades y hacerla obligatoria */
GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}