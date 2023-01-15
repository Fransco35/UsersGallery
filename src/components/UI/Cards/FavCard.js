import "./Card.css"

const FavCard = props => {

  

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
        </div>
      
       </div>
    )
}

export default FavCard;