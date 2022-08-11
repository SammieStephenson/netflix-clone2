import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";
// "https://api.themoviedb.org/3";
// "https://image.tmdb.org/t/p/original/";

// props that allow us to fetch our data, make certain rows large and title
function Row({ title, fetchUrl, isLargeRow}) {
const [movies, setMovies] = useState([]);
const [trailerUrl, setTrailerUrl] = useState("");

//useEffect will store all the movie info from TMDB.
useEffect(() => {
 async function fetchData() {
        const request = await axios.get(fetchUrl)
        console.log(request);
        setMovies(request.data.results);
        return request;
 }
 fetchData();
}, [fetchUrl]);

    // console.log(movies);

    // trailer size configuration
    const opts ={
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

   

//    handleCLick will get movie title and then pass into the url so that we can get the trailer
    const handleClick = (movie) => {
        if(trailerUrl){
          setTrailerUrl("");
        }else{
          movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
          .then(url => {
            const urlParams = new URLSearchParams( new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
            // alert to tell user that
            // there is no trailer available.
          }).catch((error) => alert( "No Trailer Available"));
        }
          };
  return (
    <div className="row">
        <h2>{title}</h2>

        {/* map out all the movie info
such as image, name and movie id. For isLargeRow props we pass various styles */}
    <div className="row__posters">
        {movies.map(movie => (
             <img
             key={movie.id}
//              On click functionality so that given movie trailer will show 
             onClick={() => handleClick(movie)}
            className= {`row__poster ${isLargeRow &&"row__posterLarge"}`} 
             src= {`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`}
             alt={movie.name} />
        ))}
    
    </div>
    {/* videoId is the trailerUrl variable that
stores our url info to get the video for clicked movie. Opts is the configuration
for video window */}
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row