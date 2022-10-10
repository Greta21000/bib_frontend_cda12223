import "./CardItem.css";

const CardItem = (props) => {
  return (
    // Mon commentaire de container
    <div className="card-container"> 
      <img //commentaire de l'image
        alt={props.oeuvre.titre}
        className="image"
        src={props.oeuvre.imageUrl}
      />
      <h2>{props.oeuvre.titre}</h2>
      <p>
        {props.oeuvre.auteur} - {props.oeuvre.annee}
      </p>
    </div>
  );
};

export default CardItem;
