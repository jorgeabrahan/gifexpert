import { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({onAddCategory}) => {
    const [inputValue, setInputValue] = useState("")
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const category = inputValue.trim(); 
        //Si no ingreso una categoría
        if (category.length <= 1) return;
        
        onAddCategory(category); //Se manda a llamar una funcion que agregue la categoria al estado

        setInputValue(""); //Se vacia el input
    }
    
    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                type="text"
                placeholder="Busca una categoria"
                onChange={ onInputChange }
                value={inputValue}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired
}