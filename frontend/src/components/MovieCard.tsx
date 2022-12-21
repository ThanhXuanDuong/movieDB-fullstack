import Movie from "../types/Movie";
import MoviePage from "../pages/MoviePage";

export default function MovieCard({
movie,
onDelete,
onFavorite
}: {
movie: Movie,
onDelete: (id : number) =>void
onFavorite: (id : number) =>void
})
{
    return (
        <div className={"MovieCard"}>
            <div className={"MovieCard-buttons"}>
                <button  onClick={e => onDelete(movie.id)}> – </button>
                <button  onClick={e => onFavorite(movie.id)}>♡️</button>
            </div>
            <h4 className={"MovieCard-Title"}>
                {movie.title} ({movie.year})
            </h4>
            <div className={"MovieCard-Poster"}>
                <a href={"/movie/"+ movie.id}  onClick={e => <MoviePage/>}>
                    <img src={movie.posterUrl}/>
                </a>
            </div>
        </div>
    );
}