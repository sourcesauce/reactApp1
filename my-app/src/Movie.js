import React from "react";
import "./Movie.css";
import PropTypes from "prop-types";
import LinesEllipsis from 'react-lines-ellipsis';

function Movie({title,poster,genres,synopsis}){
  return(
    <div className="Movie">
      <div className="Movie__Columns">
      <MoviePoster poster = {poster} alt={title} /> 
      </div>
      
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre,index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <div className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
           basedOn='letters'  
          />
        </div>
        
      </div>
    </div>
  )
}

//poster 이미지 태그 넣기
function MoviePoster({poster, alt}) {
  return ( 
    <img src = {poster} alt = {alt} title = {alt} className="Movie__Poster" />
  )
}
//장르 span 으로 넣기
function MovieGenre({genre}){
  return (
    <span className="Movie__Genre">{genre}</span>
  )
}

//props 데이터 검사
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres : PropTypes.array.isRquired,
  synopsis : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt : PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

export default Movie;
