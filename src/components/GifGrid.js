import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, limit }) => {
  const { data: images, loading } = useFetchGifs(category, limit);

  return (
    <div>
      <h3>{category}</h3>
      {loading && <p>Cargando...</p>}
      <div className="gif-grid">
        {images.map((gif) => (
          <img
            className="animate__animated animate__fadeIn"
            key={gif.id}
            src={gif.url}
            alt={gif.title}
            title={gif.title}
          />
        ))}
      </div>
    </div>
  );
};

GifGrid.protType = {
  category: PropTypes.string.isRequired,
};
