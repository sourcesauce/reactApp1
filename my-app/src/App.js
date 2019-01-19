import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";


const movies = [
  {
    title : "Matrix",
    poster : "https://www.thesun.co.uk/wp-content/uploads/2017/12/es-matrix-composite-twin-up-inset.jpg?strip=all&quality=100&w=750&h=500&crop=1"
  },
  {
    title : "Full Metal Jacket",
    poster : "http://metrograph.com/uploads/films/FullMetalJacketDeluxeEdition_85391186274_2-1525275736-726x388.png"
  },
  {
    title : "Oldboy",
    poster : "https://www.moviemaker.com/wp-content/uploads/New-Picture-36.bmp"
  },
  {
    title : "Star Wars",
    poster : "http://metrograph.com/uploads/films/FullMetalJacketDeluxeEdition_85391186274_2-1525275736-726x388.png"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movies =>{
          return <Movie title={movies.title} poster={movies.poster}/>
        })}
      </div>
    );
  }
}

export default App;
