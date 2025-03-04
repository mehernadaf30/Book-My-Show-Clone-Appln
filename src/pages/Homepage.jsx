//importing React and useState in single line
import React, {useState} from 'react';

//Layout HOC
import DefaultLayoutHoc from '../layout/DefaultLayoutHoc';

//importing Components 
// And you can write anything of your choice whle importing but location should same i am taking some short cuts but cutting Component
import EntertainmentCard from '../components/Entertainment/EntertainmentCardComponent';
import HeroCarousel from '../components/HeroCarousel/HeroCarouselComponent';
import PosterSlider from '../components/PosterSlider/PosterSliderComponent';


const HomePage = () => {
    //state for storing information
    /*recommendedMovies -->variable name    setRecommendedMovies--->function-name    below is syntax of state
    since i get multiple recommendedMovies so i will store it in array see below []-square bracket */
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    /*premierMovies-->varaiable name setPremierMovies--->function name 
    since i get multiple premierMovies so i will store it in array see below []-square bracket */
    const [premierMovies, setPremierMovies] = useState([]);

    /*onlineStreamEvents--->variable name  setOnlineStreamEvents-->function name
    since i get multiple onlineStreamEvents so i will store it in array see below []-square bracket */
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  return(
  <>
    <HeroCarousel />     {/*calling HeroCarousel*/}
      {/*In React className is there but in html class is there*/}
      <div className="container mx-auto px-4 md:px-12 my-8">                          {/*mx-margin along x-axis,px-pixel,md-medium screen size,my-margin along y-axis*/}
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">             {/*xl-extra large,font-bold,sm:small screen*/}
            The best of Entertainment
        </h1>

          <EntertainmentCard />
      </div>

    <div className="container mx-auto px-4 md:px-12 my-8">
      <PosterSlider                                   /*PosterSlider component*/                                  /*This title,subject,posters,isDark are props which i am passing */
        title="Recommended Movies"                           
        subject="List of recommended movies"
        posters={recommendedMovies}
        isDark={false}     
      />                                                       {/*isDark is for background color means when i call component PosterSLider i want my background color as light not dark */}                 
    </div>

           
    <div className="bg-premier-800 py-12">            {/*bg-background*/}
      <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">         {/*mx:margin along x-axis*/}
        <div className="hidden md:flex">          
          <img
          src=""                                                                          /*this image is for rupay*/
          alt="Rupay"
          className="w-full h-full" />                                                     {/*w-width,h-height*/}
        </div>

        <PosterSlider                                              /*Calling PosterSlider component*/  /*This title,subject,posters,isDark are props which i am passing */
          title="Premiers"
          subject ="Brand new releases every Friday."
          posters={premierMovies}
          isDark={true}   />
      </div>
    </div>

    <div className="container mx-auto px-4 md:px-12 my-8">
      <PosterSlider
        title="Online Streaming Events"
        subject="Online Stream Events"
        posters={onlineStreamEvents}
        isDark={false} />
    </div>
  </>
  )
}

export default DefaultLayoutHoc(HomePage);