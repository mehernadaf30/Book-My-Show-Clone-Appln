//you create the below structure with "rafce"
import React from 'react'
import NavbarComponent from '../components/Navbar/NavbarComponent';


const DefaultLayoutHoc  = (Component) => ({...props}) =>
{
  return (
 
    <div>
      <NavbarComponent />
      <Component {...props} />
      </div>
  )
}

export default DefaultLayoutHoc;