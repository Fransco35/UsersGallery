import "./Button.css";
import AppContext from "../context/app-context";
import { useContext } from "react";

const Button  = (props) => {
    const toggleFavorite = useContext(AppContext).toggleFavorite;

    const toggleFavoriteHandler = () => {
        toggleFavorite(props.id)
    }
    

    return (
        <button onClick={toggleFavoriteHandler}
         className={ !props.isFav ? "btn btn--white btn-animated" 
         : "btn btn--black btn-animated"}>{ !props.isFav ? "Favorite" : "Un-Favorite"}</button>
    )
}

export default Button