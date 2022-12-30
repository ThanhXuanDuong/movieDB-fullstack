import Movie from "../types/Movie";
import React, {ReactComponentElement, useState} from "react";
import axios from "axios";
import NewMovie from "../types/NewMovie";
import Popup from "../components/Popup";
import MovieForm from "../components/MovieForm";

export default function useAddMovieForm(
    movies: Movie[],
    setMovies:React.Dispatch<React.SetStateAction<Movie[]>>,
    saveText:string
)
    :
    [()=> void, ReactComponentElement<any>]
{
    const [newMovie, setNewMovie] = useState<NewMovie>({title:"",year:0,posterUrl:""});
    const [popupState, setPopupState]= useState(false);

    const onAdd = (newMovie:NewMovie) => {
        (async ()=>{
            const response = await axios.post("/api/movies",newMovie);
            setMovies([...movies,response.data]);
        })();
        setPopupState(false);
    };

    const onPopup = () => setPopupState(true);
    const popupMovieForm =
        <Popup trigger={popupState} setTrigger={setPopupState}>
                <MovieForm movie={newMovie}
                           onChange={setNewMovie}
                           onSave={onAdd}
                           saveText={saveText}/>
        </Popup>;

    return [onPopup,popupMovieForm];
}