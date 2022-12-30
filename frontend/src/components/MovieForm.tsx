import NewMovie from "../types/NewMovie";
import {ChangeEvent, FormEvent} from "react";
import Movie from "../types/Movie";

export default function MovieForm(
{movie,
onChange,
onSave,
saveText
}:{
movie: NewMovie| Movie,
onChange: (movie: NewMovie| Movie) => void,
onSave: (movie: NewMovie| Movie) => void,
saveText: string}
){
    const change = (e: ChangeEvent<HTMLInputElement>) => {
       onChange({
            ...movie,
            [e.currentTarget.name]: e.currentTarget.value
        });
    };
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (movie.title!=="" && movie.posterUrl!=="" && movie.year >0){
            onSave(movie);
        } else {
            alert("Invalid Eingabe");
        }
        onChange({title:"",posterUrl:"",year:0});
    };

    return (
        <form className={"MovieForm"} onSubmit= {onSubmit}>
            <div className={"input"}>
                <label htmlFor="title">Title:</label>
                <input type = "text" id="title" name="title" value={movie.title} onChange={change} autoFocus/>
            </div>

            <div className={"input"}>
                <label htmlFor="posterUrl">Poster URL:</label>
                <input type = "url" id="posterUrl" name="posterUrl" value={movie.posterUrl} onChange={change}/>

            </div>

            <div className={"input"}>
                <label htmlFor="year">Year:</label>
                <input type = "number" id="year" name="year" value={movie.year} onChange={change}/>
            </div>

            <div className={"form-button"}>
                <button>{saveText}</button>
            </div>

        </form>
    );
}