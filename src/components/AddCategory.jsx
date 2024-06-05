import {useState} from "react";

// eslint-disable-next-line react/prop-types
const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('One Punch');
    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <=1 ) return;
        onNewCategory(inputValue.trim());
        // setCategories(categories=>[...categories,inputValue]);
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Add a category"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    );
}

export {AddCategory};