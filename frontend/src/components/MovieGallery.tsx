import Movie from "../types/Movie";
import MovieCard from "./MovieCard";

export default function MovieGallery({movies}: {movies: Movie[]}){
    return (
        <div className={"MovieGallery"}>
            {movies.map(movie => <MovieCard key={movie.id} movie ={movie}/>)}
        </div>
    );
}