import './App.css';
import {Routes,Route} from 'react-router-dom';
//React Slick CSS statement
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Routes>
      <Route path="/" />
      <Route path="/movie/:id" />     {/*This route is for movies and id is for specific movie*/}
      <Route path="/plays" />          {/*This route is for entertainment section*/}

    </Routes>
  );
}

export default App;
