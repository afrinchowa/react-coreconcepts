import React from "react";
import PropTypes from "prop-types";

const Singers = ({ singer }) => {
  if (!singer) {
    return (
      <div className="card singer-card empty-card">
        <p>No singer data available 🎤</p>
      </div>
    );
  }

  return (
    <div className="card singer-card">
      <div className="singer-image-wrapper">
        <img
          src={singer.image || "https://via.placeholder.com/150?text=No+Image"}
          alt={singer.name || "Unknown Singer"}
          className="singer-image"
        />
      </div>

      <div className="singer-info">
        <h3>{singer.name || "Unknown Singer"}</h3>
        <p>Age: {singer.age || "N/A"}</p>
        <p>Genre: {singer.genre || "Not specified"}</p>
        {singer.country && <p>Country: {singer.country}</p>}
      </div>
    </div>
  );
};

// ✅ Prop validation
Singers.propTypes = {
  singer: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    genre: PropTypes.string,
    country: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default Singers;
