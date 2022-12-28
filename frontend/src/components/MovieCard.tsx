import Movie from "../types/Movie";
import MoviePage from "../pages/MoviePage";
import $ from "jquery";
import { FaHeart,FaMinus} from 'react-icons/fa';
import {RiEdit2Fill} from "react-icons/ri";

export default function MovieCard({
movie,
onDelete,
onFavorite
}: {
movie: Movie,
onDelete: (id : number) =>void
onFavorite: (movie : Movie) =>void
})
{
    const onClick= () => {
        onFavorite({ ...movie, favoriteStatus: !movie.favoriteStatus})
        if ($('.favorite-button'+ movie.id).hasClass('active')) {
            $('.favorite-button'+ movie.id).removeClass('active')
        } else {
            $('.favorite-button'+ movie.id).addClass('active')
        }
    }

    return (
        <div className={"MovieCard"}>
            <div className={"MovieCard-buttons"}>
                <button  onClick={() => onDelete(movie.id)}><FaMinus/></button>
                <button  className={"edit-button" + movie.id}><RiEdit2Fill/></button>
                <button  className={"favorite-button" + movie.id} onClick={onClick}><FaHeart/></button>
            </div>
            <h4 className={"MovieCard-Title"}>
                {movie.title} ({movie.year})
            </h4>
            <div className={"MovieCard-Poster"}>
                <a href={"/movie/"+ movie.id}  onClick={() => <MoviePage/>}>
                    <img src={movie.posterUrl}/>
                </a>
            </div>
        </div>
    );
}