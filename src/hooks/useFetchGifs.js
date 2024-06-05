import {useEffect, useState} from "react";
import getGifs from "../services/giphy.js";

const useFetchGifs = (category) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getGifs(category)
            .then(setImages)
            .finally(() => setIsLoading(false));
    }, [category]);
    return {
        images,
        isLoading
    }
}

export default useFetchGifs;