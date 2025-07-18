const Singers = ({ singer }) => {
  if (!singer) return null;

  return (
    <div className="card singer-card">
      <h3>Singer: {singer.name}</h3>
      <p>Age: {singer.age}</p>
    </div>
  );
};

export default Singers;
