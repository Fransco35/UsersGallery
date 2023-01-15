import { useState, useMemo, useRef, useContext } from 'react';
import AppContext  from "../context/app-context";
import './HomePage.css';
import Card from '../components/UI/Cards/Card'; 
import LoadingSpinner from '../components/UI/Utilities/LoadingSpinner';
import Pagination from "../components/UI/Pagination/Pagination";

let pageSize  = 9

 const HomePage = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const [filteredValue, setFilteredValue] = useState('')
   const ctx = useContext(AppContext)

   const inputRef = useRef();


   const handleSearch = event => {
    event.preventDefault();

    let result = inputRef.current.value
    let resultCheck = result.trim().length > 1

    if(resultCheck) {
      setFilteredValue(result)
     inputRef.current.value = ''
    } else {
      return;
    }
   
  }

   const newData = ctx.users.filter((profile) => {
      return profile.login.username.toLowerCase().includes(filteredValue.toLowerCase());
    })
    

   const currentPageData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return filteredValue ? newData.slice(firstPageIndex, lastPageIndex) : ctx.users.slice(firstPageIndex, lastPageIndex)
   }, [currentPage, newData, filteredValue, ctx])

   

   if(ctx.isLoading) {
     return <div className="home-container"> 
     <div className='loading'>
     <LoadingSpinner />
     </div>
     </div>
   }

   if(ctx.isError) {
     return <div className="home-container loading">{ctx.error}</div>
   }

  
   if(!ctx.isLoading && !ctx.isError) {
    return (
      <div className="home-container">      
        <div className="home-input">
        <form onSubmit={handleSearch} className="search" >
                    <input type="text" className="search__input" placeholder="search username" ref={inputRef} />
                    <button type='submit' className="search__button">
                        Go
                    </button>
          </form>
        </div>
        
       <div className="home-content">
         {newData.length < 1 && <h1 style={{color:"#4b6faf"}}>Username does not exist, try another.</h1>}
        {currentPageData.map((profile, index) => (
          <Card 
          key = {index}
          id = {profile.id}
          image = {profile.picture.large}
          username = {profile.login.username}
          title = {profile.name.title} 
          first = {profile.name.first}
          last = {profile.name.last}
          nationality = {profile.location.country}
           age = {profile.dob.age}
          state = {profile.location.state}
          isFav={profile.isFavorite}
          />
        ))}
        
       </div>
       <div className="home-page">
       <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={filteredValue ? newData.length : ctx.users.length}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
        key={currentPage}
       />
       </div>
      </div>
    );
  }
  };

  export default HomePage