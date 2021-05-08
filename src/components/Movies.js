import axios from "axios";
import { useState,useEffect } from "react";
import MovieList from "./MovieList";

const link = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`

const discover = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page-1`
const fetchURL = "https://api.themoviedb.org/3"

const movieList = `https://api.themoviedb.org/3/certification/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
const Movies = () => {
    const [movies,setMovies] = useState([]); 
    // const fetchCredits = async () => {
    //     const { data } = await axios.get(
    //       `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    //     );
    //     setCredits(data.cast);
    //   };    
    
    useEffect(() => {
        async function fetchData() {
            const  request  = await axios.get(discover);
            console.log(request);
            setMovies(request.data);
        }
        fetchData();
    }, [])

   
    // console.log(data);
    return (
        <div className="movies">
            {
               movies.length>0 && movies.map((movie) =>
                    <MovieList {...movie} key={movie.id}/>
                )
            }
        </div>
    )
}

export default Movies
