import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";


class App extends Component {
  state = {
  }
componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies:[
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
          },
          {
            title : "Transformar",
                poster : "https://i.ytimg.com/vi/vGbyF94LKsc/maxresdefault.jpg"
          }
        ]
      })
    }, 4000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie,index) =>{
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }
//Loading 데이터가 있는지 검사하고 생길때 까지 기다림
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies(): 'Loading'}
      </div>
    );
  }
}

export default App;
