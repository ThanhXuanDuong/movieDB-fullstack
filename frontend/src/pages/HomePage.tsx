import MovieGallery from "../components/MovieGallery";
import {useEffect, useState} from "react";
import Movie from "../types/Movie";
import axios from "axios";
import NewMovie from "../types/NewMovie";
import $ from 'jquery';
import Popup from "../components/Popup";
import AddMovieForm from "../components/AddMovieForm";
import {FaFilter, FaHeart, FaPlus} from "react-icons/fa";

export default function HomePage(){
    const [movies, setMovies] = useState<Movie[]>([]);
    const [searchedTitle, setSearchedTitle ] = useState<string>("");
    const [newMovie, setNewMovie] = useState<NewMovie>({title:"",year:0,posterUrl:""});
    const [toggleOn, setToggleOn]= useState(false);
    const [popupState, setPopupState]= useState(false);

    useEffect(()=>{
        (async ()=>{
            const response = await axios.get("/api/movies");
            const data: Movie[] =response.data;
            setMovies(data);
        })();
        }
    ,[]);

    const searchedMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchedTitle));

    const onAdd = (newMovie:NewMovie) => {
        (async ()=>{
            const response = await axios.post("/api/movies",newMovie);
            setMovies([...movies,response.data]);
        })();
        setPopupState(false);
    };

    console.log(movies);
    const onDelete =(id:number) =>{
        (async () => await axios.delete("/api/movies/"+ id))();
        setMovies(movies.filter(m => m.id !== id));
    }

    const onFavorite = (movie:Movie) =>{
        setMovies(movies.map(m => m.id === movie.id
            ? { ...m, favoriteStatus: movie.favoriteStatus}
            : { ...m}));
    }

    const favorites =movies.filter(movie => movie.favoriteStatus);

    const onFavoriteList= () => {
        setToggleOn(!toggleOn);
        if ($('.favorite-list-button').hasClass('active')) {
            $('.favorite-list-button').removeClass('active')
        } else {
            $('.favorite-list-button').addClass('active')
        }
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
                    <div className={"HomePage-Buttons"}>
                        <div className={"HomePage-Favorites"}>
                            <button className={"favorite-list-button"}
                                    onClick={onFavoriteList}><FaHeart/></button>
                        </div>
                        <div className={"HomePage-Filter"}>
                            <button className={"filter-button"}><FaFilter/></button>
                        </div>

                        <button className={"add-button"}
                                onClick={() => setPopupState(true)}>
                            <FaPlus/>
                        </button>
                    </div>

                    <div className={"HomePage-Searchbar"}>
                        <input placeholder={"Search movie ..."}
                               onChange={e => setSearchedTitle(e.target.value)}
                        />
                    </div>
                </div>

                <Popup trigger={popupState} setTrigger={setPopupState}>
                    <AddMovieForm newMovie={newMovie}
                                  onChange={setNewMovie}
                                  onAdd={onAdd}/>
                </Popup>

                <div className={"HomePage-Gallery"}>
                    {movies.length !== 0 ?
                        searchedMovies.length !== 0 ?
                            <MovieGallery
                                movies={!toggleOn ? searchedMovies : favorites}
                                onDelete={onDelete}
                                onFavorite={onFavorite}
                            />
                            :
                            <div>No movie found</div>
                        : <div>No data yet</div>
                    }
                </div>
            </div>
        </div>
    );
}