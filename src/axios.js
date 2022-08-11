import axios from "axios";

//make HTTP requests from the browser and handle the transformation of request and response data.

 const instance = axios.create({
     baseURL: "https://api.themoviedb.org/3",
//  base_URL: "https://image.tmdb.org/t/p/original/",
});

export default instance; 
