export interface CardCharacterProps{
    name:     string;
    status:   string;
    image:    string;
    species:  string;
}

const CharacterCard = ({ name, status, image, species }: CardCharacterProps) => {
  return (
    <div className="card h-100 shadow-sm rounded overflow-hidden">
      <img
        src={image}
        className="card-img-top img-fluid"
        alt={name}
        style={{ objectFit: "cover", height: "250px" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold mb-1">{name}</h5>
        <p className="card-text">
          <small className="text-muted">{species}</small>
        </p>
        <div className="mt-2">
          <span
            className={`badge ${
              status === "Alive"
                ? "bg-success"
                : status === "Dead"
                ? "bg-danger"
                : "bg-secondary"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};


export default CharacterCard;