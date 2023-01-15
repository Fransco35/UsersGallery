import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../../context/auth-context';

import "./Navigation.css"

function NavBar() {
 const AuthCtx = useContext(AuthContext)
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div >
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            PROFILES
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            {AuthCtx.isLoggedIn &&
            <li className="nav-item">
              <NavLink
                exact
                to="/favourites"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Favorites
              </NavLink>
            </li>
            }
            <li className="nav-item">
              {!AuthCtx.isLoggedIn && 
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Login
              </NavLink>
              }
              {AuthCtx.isLoggedIn && 
               <button className='btn' onClick={AuthCtx.onLogOut}>Logout</button>
              }
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}

export default NavBar;