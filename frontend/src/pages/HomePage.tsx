import MovieGallery from "../components/MovieGallery";
import {useEffect, useState} from "react";
import Movie from "../types/Movie";
import axios from "axios";
import AddMovieForm from "../components/AddMovieForm";
import NewMovie from "../types/NewMovie";

export default function HomePage(){
    const [movies, setMovies] = useState<Movie[]>([]);
    const [searchedTitle, setSearchedTitle ] = useState<string>("");
    const [newMovie, setNewMovie] = useState<NewMovie>({title:"",year:0,posterUrl:""});

    useEffect(()=>{
        (async ()=>{
            const response = await axios.get("/api/movies");
            setMovies(response.data);
        })();
        }
    ,[]);

    const searchedMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchedTitle));

    const onAdd = () => {
        (async ()=>{
            const response = await axios.post("/api/movies",newMovie);
            setMovies([...movies,response.data]);
        })();
    };

    return (
        <div className={"HomePage-Wrapper"}>
            <div className={"HomePage-Header"}>
                <header>
                    <h1>Movie DB</h1>
                </header>

            </div>

            <div className={"HomePage-Main"}>
                <div className={"HomePageSearchbar"}>
                    <input placeholder={"Search movie ..."}
                           onChange={e => setSearchedTitle(e.target.value)}
                    />
                </div>

                <div className={"HomePage-AddMovieForm"}>
                    <AddMovieForm newMovie={newMovie} onChange={setNewMovie} onAdd={onAdd} />
                </div>

                <div className={"HomePage-Gallery"}>
                    {movies.length!==0 ?
                        searchedMovies.length!==0 ?
                            <MovieGallery
                                movies={searchedMovies}
                            />
                            :
                            <div>No movie found</div>
                        :
                        <div>No data yet</div>
                    }
                </div>

            </div>
        </div>
    );
}