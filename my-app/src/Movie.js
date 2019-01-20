import React, { Component } from "react";
import "./Movie.css";
import PropTypes from "prop-types";
class Movie extends Component {

  //props 데이터 타입 검사
  static propTypes ={
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <MoviePoster poster={this.props.poster} />
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {

  static propTypes ={
    poster: PropTypes.string.isRequired
  }
  render() {
    return <img src={this.props.poster} />;
  }
}

export default Movie;
