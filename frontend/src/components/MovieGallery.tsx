import Movie from "../types/Movie";
import MovieCard from "./MovieCard";

export default function MovieGallery({
movies,
onDelete,
onFavorite
}:{
movies: Movie[],
onDelete: (id: number) =>void,
onFavorite: (movie : Movie) =>void
})
{
    return (
        <div className={"MovieGallery-Wrapper"}>
            <div className={"MovieGallery"}>
                {movies.map(movie => <MovieCard
                    key={movie.id}
                    movie ={movie}
                    onDelete ={onDelete}
                    onFavorite ={onFavorite}
            />)}
            </div>
        </div>
    );
}