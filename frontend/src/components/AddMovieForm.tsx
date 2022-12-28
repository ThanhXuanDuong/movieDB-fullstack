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
    };

    return (
        <form className={"AddMovieForm"} onSubmit= {onSubmit}>
            <div className={"input"}>
                <h3>Title</h3>
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