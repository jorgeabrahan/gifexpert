import { useState } from "react"
// import AddCategory from "./components/AddCategory";
// import GifGrid from "./components/GifGrid";
/* Al llamar un archivo de barril solo especificamos la carpeta en la que se encuentra, automaticamente llama al index */
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([
        "One Punch"
    ]);

    const addCategory = (category) => {
        /* Validar que no exista otra categoria similar */
        for (let cat of categories) { //Para cada categoria existente
            //Si se encuentra una similar a la que se desea agregar
            if (cat.toLowerCase() === category.toLowerCase()) return;
        }

        /* Validar que no exista otra categoria exactamente igual */
        // if (categories.includes(category)) return;

        setCategories(prevCategories => [category, ...prevCategories]);
    }
    
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategory={addCategory} />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}


