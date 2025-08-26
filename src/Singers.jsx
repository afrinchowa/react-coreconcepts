import React from "react";

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
      {singer.image && (
        <img
          src={singer.image}
          alt={singer.name}
          className="singer-image"
        />
      )}
      <div className="singer-info">
        <h3>{singer.name}</h3>
        <p>Age: {singer.age}</p>
        {singer.genre && <p>Genre: {singer.genre}</p>}
      </div>
    </div>
  );
};

export default Singers;
