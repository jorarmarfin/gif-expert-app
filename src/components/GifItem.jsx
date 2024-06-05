import PropTypes from "prop-types";

const GifItem = ({ image }) => {
    return (
        <div key={image.id} className="card-grid">
            <h3>{image.title}</h3>
            <img src={image.url} alt={image.title}/>
        </div>
    );
}

export {GifItem};

GifItem.propTypes = {
    image: PropTypes.object.isRequired
}