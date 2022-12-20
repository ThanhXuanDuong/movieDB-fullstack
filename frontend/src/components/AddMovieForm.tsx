import NewMovie from "../types/NewMovie";
import {ChangeEvent} from "react";

export default function AddMovieForm(
{newMovie,
onChange,
onAdd
}:{
newMovie: NewMovie,
onChange: (newMovie:NewMovie) => void,
onAdd: (newMovie:NewMovie) => void }
){
    const change = (e: ChangeEvent<HTMLInputElement>) => {
       onChange({
            ...newMovie,
            [e.currentTarget.name]: e.currentTarget.value
        });
    };

    return (
        <form className={"AddMovieForm"} onSubmit= {async e => {
            e.preventDefault();
            onAdd(newMovie);
        }}>
            <div className={"input"}>
                <h3>Titel</h3>
                <input type = "text" name="title" value={newMovie.title} onChange={change}/>
            </div>

            <div className={"input"}>
                <h3>Poster URL</h3>
                <input type = "text" name="posterUrl" value={newMovie.posterUrl} onChange={change}/>

            </div>

            <div className={"input"}>
                <h3>Year</h3>
                <input type = "text" name="year" value={newMovie.year} onChange={change}/>
            </div>

            <div className={"add-button"}>
                <button>Add Movie</button>
            </div>

        </form>
    );
}