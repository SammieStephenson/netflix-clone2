import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import "./banner.css";

// state variable called movie that is going to store the random movie we fetch from TMDB
function Banner() {
    const [movie, setMovie] = useState([]);

    // useEffect that is going to fetch a given movie from TMDB. W
    useEffect(() => {
//         async function which will allows us to make a request and only when the request is successful
// can we proceed
        async function fetchData(){
const request = await axios.get(requests.fetchNetflixOriginals);
//  use random math method to create function that gets a random movie from the list.
// This will allow the app to show a different movie every time we refresh the webapp.
setMovie(
    request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1 )
    ]
);
return request;

        }
        fetchData();
    }, []);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
  return (
    <header className='banner'
    // style centers and cover the whole screen. Call base url and our backdrop banner path
    style = {{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
    }}
  
    >
        <div className="banner__contents">
        <h1 className='banner__title'>
        {/* protects us from any error that may happen */}
        {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner__buttons'>
            <button className="banner__button">Play</button>
            <button className='banner__button'>Pirate List</button>
        </div>

        {/* movie description with word count */}
        <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>
        </div>
        {/* classic image fade */}
   <div className='banner--fadeBottom'></div>
    </header>
  )
}

export default Banner