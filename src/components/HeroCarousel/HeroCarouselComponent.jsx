//This file is for BannerSection 
import React, {useState} from 'react';
import HeroSlider from 'react-slick';      //you can take naything i am taking HeroSlider because it is easy to understand                 /* importing Heroslider  from react-slick package for Bannersection*/


//my file name is HeroCarouselComponent but in function i am taking HeroCarousel it your choice 
const HeroCarousel = () => {
  const [images,setImages] = useState([]);                                         //using state to store data as we get so many images we are storing it in array                   
  
  return(
    <>
    <div className="lg:hidden">                                {/*This div for small screen and medium screen  and lg-largescreen means hidden for large screen*/}
      <HeroSlider />                                           {/*calling HeroSlider*/}
      {                                                        //images are present in array and we are taking here*
        images.map((image) => {                              //event is image and mapping each and every element 
        <div className="w-full h-56 md:h-80 py-3">
          <img
            src=""
            alt="Hero Banner" 
            className="w-full h-full rounded-md object-cover"
             />
        </div>;
        })}
      </div>

      <div className="hidden lg:block"></div>                              {/*This is  for large screen */}
  </>
  )
}
export default HeroCarousel;

//but this function name[HeroCarousel] and exporting should same