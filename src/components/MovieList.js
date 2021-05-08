const MovieList = ({ title,poster_path,overview,vote_average }) => {
   console.log(overview);
    return (
        <div className="movieList">
            <h1>{title}</h1>
        </div>
    )
}

export default MovieList
