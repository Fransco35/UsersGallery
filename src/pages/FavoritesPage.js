import { useContext } from "react";
import AppContext  from "../context/app-context";
import FavCard from '../components/UI/Cards/FavCard'; 



const FavoritesPage = () => {
  const favoriteUsers = useContext(AppContext).users.filter(u => u.isFavorite)

  let content = <h1 style={{color: '#4b6faf'}}> You have no favorite users yet!</h1>

  if(favoriteUsers.length > 0) {
    content = (
    <div className="home-container">
    <div className="home-content">
      {favoriteUsers.map((user) => (
        <FavCard 
        key = {user.id}
        id = {user.id}
        image = {user.picture.large}
        username = {user.login.username}
        title = {user.name.title} 
        first = {user.name.first}
        last = {user.name.last}
        nationality = {user.location.country}
         age = {user.dob.age}
        state = {user.location.state}
        />
      ))}
    </div>
    </div>
    )
  }

    return content
  };

  export default FavoritesPage;