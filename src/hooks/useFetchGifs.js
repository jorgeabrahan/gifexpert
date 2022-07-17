import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getGifs(category).then((gifs) => {
            setImages(gifs);
            setIsLoading(false);
        });
    }, []); //Si la lista de dependencias queda vacia useEffect solo se ejecuta la primera vez que se renderiza

    return {
        images,
        isLoading
    }
}