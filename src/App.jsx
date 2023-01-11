import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Nav from "./components/Nav";

// movies `https://www.omdbapi.com/?apikey=91703714&s=${title}`
// moviedetails `https://www.omdbapi.com/?apikey=91703714&i=${imdbID}`

function App() {
  return (
    <Router>
      <div className="App">
        <Nav /> 
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path='/search/:landingSearch' exact element={<Movies />}/>
          <Route path="/search/details/:imdbID" exact element={<MovieDetails />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
