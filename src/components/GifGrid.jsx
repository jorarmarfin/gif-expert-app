import PropTypes from "prop-types";
import GifItem from "./GifItem.jsx";
import useFetchGifs from "../hooks/useFetchGifs.js";

const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);


    return (
        <>
            <h1>{category}</h1>
            {isLoading && <h2>Loading...</h2>}
           {
               images.map(image=> (
                    GifItem({image})
                ))
           }
        </>
    );
}

export default GifGrid;
GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}