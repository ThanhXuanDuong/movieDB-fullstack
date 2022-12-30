import Movie from "../types/Movie";
import MovieCard from "./MovieCard";

export default function MovieGallery({
movies,
onDelete,
onFavorite,
onEdit
}:{
movies: Movie[],
onDelete: (id: number | undefined) =>void,
onFavorite: (movie : Movie) =>void
onEdit: (movie : Movie) =>void
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
                    onEdit = {onEdit}
            />)}
            </div>
        </div>
    );
}