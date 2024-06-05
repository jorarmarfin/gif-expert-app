import {useState} from "react";
import {GifGrid,AddCategory} from "./components";


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory) => {
        //categories.push(newCategory);
        if (categories.includes(newCategory)) return;
        setCategories([ newCategory,...categories]);
    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                //setCategories={setCategories}
                onNewCategory={onAddCategory}
            />
            <br/>
            {
                categories.map(category => {
                    return <GifGrid key={category} category={category}/>
                })
            }

        </>
    );
}
//uPzvOBlc2WBmiGHpt419ySXA669jrudA
export default GifExpertApp;