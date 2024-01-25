import MoviesCard from "./MovieCard";




const MoviesList = ({ moviesList }) => {
    return (
    <div>
     { moviesList.map((el)=>(
            <MoviesCard movie={el} />
        ))}
        
    </div>
    );
};

export default MoviesList;
    