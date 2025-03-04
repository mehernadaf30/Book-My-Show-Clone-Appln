import './App.css';

// for Routers
import {Routes,Route} from 'react-router-dom';

//React Slick CSS statement
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages import here
import HomePage from './pages/Homepage.jsx';
import MoviePage from './pages/Moviepage.jsx';
import PlayPage from './pages/Playpage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/movie/:id" element={<MoviePage/>} />     {/*This route is for movies and id is for specific movie*/}
      <Route path="/plays" element={<PlayPage/>} />          {/*This route is for entertainment section*/}

    </Routes>
  );
}

export default App;
