import './App.css';
import React, { Suspense} from "react"
import {Switch, Route } from 'react-router-dom'
import LoadingSpinner from './components/UI/Utilities/LoadingSpinner';
import HomePage from './pages/HomePage'
import NavBar from "./components/UI/Nav/Navigation"
import './pages/HomePage.css';


const FavoritesPage = React.lazy(() => import('./pages/FavoritesPage'))
const AuthPage = React.lazy(() => import('./pages/AuthPage'))

function App() {
  return (
    <div className="App">
        <NavBar />

        <Suspense  fallback = {
          <div className="home-container"> 
            <div className='loading'>
              <LoadingSpinner />
           </div>
          </div>
        }
        >
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/favourites" component={FavoritesPage} />
            <Route path="/login" component={AuthPage} />
          </Switch>
          </Suspense>
        
    </div>
  );
}

export default App;
