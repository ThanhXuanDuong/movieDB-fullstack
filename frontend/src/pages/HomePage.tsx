import MovieGallery from "../components/MovieGallery";
import {useEffect, useState} from "react";
import Movie from "../types/Movie";
import axios from "axios";
import AddMovieForm from "../components/AddMovieForm";
import NewMovie from "../types/NewMovie";
import {useNavigate} from "react-router-dom";

export default function HomePage(){
    const [movies, setMovies] = useState<Movie[]>([]);
    const [searchedTitle, setSearchedTitle ] = useState<string>("");
    const [newMovie, setNewMovie] = useState<NewMovie>({title:"",year:0,posterUrl:""});
    const navigate =useNavigate();

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

    const onDelete =(id:number) =>{
        (async () => await axios.delete("/api/movies/"+ id))();
        setMovies(movies.filter(m => m.id !== id));
    }

    const [favorites, setFavorites] = useState<Movie[]>([]);
    const onFavorite = (id:number) =>{
        const movie = movies.find(movie => movie.id === id);
        movie? setFavorites( [...favorites, movie]) : setFavorites( [...favorites]);
        console.log(favorites);
    }

    return (
        <div className={"HomePage-Wrapper"}>
            <div className={"HomePage-Header"}>
                <header>
                    <h1>Movie DB</h1>
                </header>

            </div>

            <div className={"HomePage-Main"}>
                <div className={"HomePage-Main-Bar"}>
                    <div className={"HomePage-Searchbar"}>
                        <input placeholder={"Search movie ..."}
                               onChange={e => setSearchedTitle(e.target.value)}
                        />
                    </div>
                </div>

                <div className={"HomePage-AddMovieForm"}>
                    <AddMovieForm newMovie={newMovie}
                                  onChange={setNewMovie}
                                  onAdd={onAdd} />
                </div>

                <button className={"favorite-list-button"}
                        onClick={() =>{navigate("/movie/favorite",{state:{favorites}})}}>Favorites</button>

                <div className={"HomePage-Gallery"}>
                    {movies.length!==0 ?
                        searchedMovies.length!==0 ?
                            <MovieGallery
                                movies ={searchedMovies}
                                onDelete ={onDelete}
                                onFavorite = {onFavorite}
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