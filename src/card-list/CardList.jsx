import CardItem from "../card-item/CardItem";
import "./CardList.css";

const CardList = (props) => {
  return (
    <div className="card-list" >
      {props.oeuvres.map((o) => (
        <CardItem key={o.id} oeuvre={o} />
      ))}
    </div>
  );
};

export default CardList;
