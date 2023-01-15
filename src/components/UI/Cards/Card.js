import "./Card.css"
import AppContext from "../../../context/app-context";
import { useContext } from "react";

const Card = props => {

  const toggleFavorite = useContext(AppContext).toggleFavorite;

  const toggleFavoriteHandler = () => {
      toggleFavorite(props.id)
  }

    return (
      <div className="card">
        <div className="card__side card__side--front">
        <figure>
         <img src={props.image} alt="A nice house" />
         <figcaption>{props.username}</figcaption>
       </figure>
      <div className="card-info">
        <ul className="cardlist">
          <li className="card-item">Name: {props.title} {props.first} {props.last}</li>
          <li className="card-item">Age: {props.age}</li>
          <li className="card-item">Country: {props.nationality}</li>
          <li className="card-item">State: {props.state}</li>
        </ul>
      </div>
        </div>

        <div className=" card__side card__side--back">
          <div className="card__cta">
          <button onClick={toggleFavoriteHandler}
         className={ !props.isFav ? "btn btn--white btn-animated" 
         : "btn btn--black btn-animated"}>{ !props.isFav ? "Favorite" : "Un-Favorite"}</button>
          </div>
        </div>
      
       </div>
    )
}

export default Card;