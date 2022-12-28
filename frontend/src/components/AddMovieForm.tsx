import NewMovie from "../types/NewMovie";
import {ChangeEvent, FormEvent} from "react";

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
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newMovie.title!=="" && newMovie.posterUrl!=="" && newMovie.year >0){
            onAdd(newMovie);
        } else {
            alert("Invalid Eingabe");
        }
        onChange({title:"",posterUrl:"",year:0});
    };

    return (
        <form className={"AddMovieForm"} onSubmit= {onSubmit}>
            <div className={"input"}>
                <label htmlFor="title">Title:</label>
                <input type = "text" id="title" name="title" value={newMovie.title} onChange={change} autoFocus/>
            </div>

            <div className={"input"}>
                <label htmlFor="posterUrl">Poster URL:</label>
                <input type = "url" id="posterUrl" name="posterUrl" value={newMovie.posterUrl} onChange={change}/>

            </div>

            <div className={"input"}>
                <label htmlFor="year">Year:</label>
                <input type = "number" id="year" name="year" value={newMovie.year} onChange={change}/>
            </div>

            <div className={"add-button"}>
                <button>Add Movie</button>
            </div>

        </form>
    );
}