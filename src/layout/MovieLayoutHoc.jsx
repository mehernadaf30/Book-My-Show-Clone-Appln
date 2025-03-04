//you create the below structure with "rafce"
import React from 'react'
import MovieNavbarComponent from '../components/Navbar/MovieNavbarComponent';

//props means if we have any parameters then props is used
const MovieLayoutHoc = (Component) => ({...props}) =>
  {
    return (
    <div>
      <MovieNavbarComponent />
      <Component {...props} />
      
    </div>
  )
}

export default MovieLayoutHoc;