import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
];
const movieImage = [
  "https://www.thesun.co.uk/wp-content/uploads/2017/12/es-matrix-composite-twin-up-inset.jpg?strip=all&quality=100&w=750&h=500&crop=1",
  "http://metrograph.com/uploads/films/FullMetalJacketDeluxeEdition_85391186274_2-1525275736-726x388.png",
  "https://www.moviemaker.com/wp-content/uploads/New-Picture-36.bmp",
  "https://post-phinf.pstatic.net/MjAxNzA1MDJfMjEx/MDAxNDkzNzA3Nzg5Njgy.gKJhrTyKMPDMjwuTSVLkhxS3b-l08ayXSbK1EN3ZXdkg.OF_CQO1-OwkYm0uJl75KLCVlYnE6KuVGPhxUFckdNqEg.JPEG/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88%EB%8D%B0%EC%9D%B4.jpg?type=w1200"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImage[0]} />
        <Movie title={movieTitles[1]} poster={movieImage[1]} />
        <Movie title={movieTitles[2]} poster={movieImage[2]} />
        <Movie title={movieTitles[3]} poster={movieImage[3]} />
      </div>
    );
  }
}

export default App;
