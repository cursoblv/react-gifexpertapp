import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = inputValue.trim();
        if (value.trim().length > 2) {
            setCategories(categories => {
                const categoryNotExist = categories.find(c => c === inputValue.trim()) === undefined;
                if (categoryNotExist) {
                    setInputValue('');
                    return [inputValue.trim(), ...categories];
                } else {
                    return [...categories];
                }
            });
            // setInputValue('');
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button type="submit">Enviar</button>
        </form>
    );
};


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};