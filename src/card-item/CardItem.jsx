import { NavLink } from "react-router-dom";
import "./CardItem.css";

const CardItem = (props) => {

  const confirmDeleteHandler = () => {
    console.log("Deleted");
    props.onDelete(props.oeuvre.id);
  }

  return (
    // Mon commentaire de container
    <div className="card-container"> 
      <img //commentaire de l'image
        alt={props.oeuvre.titre}
        className="image"
        src={props.oeuvre.imageUrl}
      />
      <h2>{props.oeuvre.titre}</h2>
      <h2>{props.oeuvre.id}</h2>
      <p>
        {props.oeuvre.auteur} - {props.oeuvre.annee}
      </p>
      <div className="card-item__actions">
        <ul>
          <li>
            <button><NavLink to={`/updateitem`}>Editer</NavLink></button>
          </li>
          <li>
            <button onClick={confirmDeleteHandler} >Supprimer</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardItem;
