import { Container, Grid } from "@material-ui/core";
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
    async function fetchData() {
        const  request  = await axios.get(discover);
        console.log(request.data);
        setMovies(request.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

   
    // console.log(data);
    return (
      <Container>
        <Grid container>
            {
               movies.length>0 && movies.map((movie) =>
                <Grid item>
                    <MovieList movie={movie}/>
                </Grid>
                )
            }
        </Grid>
      </Container>
    )
}

export default Movies
