import Movie from "../types/Movie";
import React, {ReactComponentElement, useState} from "react";
import axios from "axios";
import Popup from "../components/Popup";
import MovieForm from "../components/MovieForm";

export default function useEditMovieForm(
    movies: Movie[],
    setMovies:React.Dispatch<React.SetStateAction<Movie[]>>,
    saveText:string
)
    :
    [(movie:Movie) => void , ReactComponentElement<any>]
{
    const [editedMovie, setEditedMovie] = useState<Movie>({id: 0,title:"",year:0,posterUrl:"",favoriteStatus:false});
    const [editPopupState, setEditPopupState]= useState(false);

    const onEdit = (movie:Movie) => {
        (async () => await axios.put("/api/movies/"+ movie.id, movie))();
        setMovies(movies.map(m => m.id === movie.id
            ? { ...movie}
            : { ...m}));
        setEditPopupState(false);
    };


    const onEditPopup = (movie:Movie) => {
        setEditPopupState(true);
        setEditedMovie(movie);
    };

    const popupEditMovieForm =
            <Popup trigger={editPopupState} setTrigger={setEditPopupState}>
                <MovieForm movie={editedMovie}
                    onChange={setEditedMovie}
                    onSave={onEdit}
                    saveText={saveText}/>
            </Popup>
    ;

    return [onEditPopup,popupEditMovieForm];
}