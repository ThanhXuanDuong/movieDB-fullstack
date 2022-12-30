import MovieGallery from "../components/MovieGallery";
import {FaFilter, FaHeart, FaPlus} from "react-icons/fa";
import useMovies from "../hooks/useMovies";
import useSearchedTitle from "../hooks/useSearchedTitle";
import useFavoriteList from "../hooks/useFavoriteList";
import useAddMovieForm from "../hooks/useAddMovieForm";
import React, {useState} from "react";
import useEditMovieForm from "../hooks/useEditMovieForm";
import axios from "axios";
import Popup from "../components/Popup";
import Movie from "../types/Movie";

export default function HomePage(){
    
    const [movies, setMovies] = useMovies([]);

    const [searchedMovies, setSearchedTitle] = useSearchedTitle(movies);
    const [favoriteToggleOn, favorites, onFavoriteList] =useFavoriteList(movies);
    const [onAddPopup,popupAddMovieForm] = useAddMovieForm(movies,setMovies,"Add");

    const [onEditPopup,popupEditMovieForm] = useEditMovieForm(movies,setMovies,"Edit");

    const onFavorite = (movie:Movie) =>{
        setMovies(movies.map(m => m.id === movie.id
            ? { ...m, favoriteStatus: movie.favoriteStatus}
            : { ...m}));
    };

    const [deletePopup, setDeletePopup] = useState<boolean>(false);
    const [deleteId, setDeleteId] = useState<number|undefined>(0);
    const onYes =() => {
            (async () => await axios.delete("/api/movies/"+ deleteId))();
            setMovies(movies.filter(m => m.id !== deleteId));
            setDeletePopup(false);
        };


    return (
        <div className={"HomePage-Wrapper"}>

            <div className={"HomePage-Header"}>
                    <h1>Movie DB</h1>
            </div>

            <div className={"HomePage-Main"}>
                <div className={"HomePage-Main-Bar"}>

                    <div className={"HomePage-Buttons"}>
                        <button className={"favorite-list-button"}
                                onClick={onFavoriteList}><FaHeart/></button>

                        <button className={"filter-button"}><FaFilter/></button>

                        <button className={"add-button"}
                                onClick={onAddPopup}>
                            <FaPlus/>
                        </button>
                    </div>

                    <div>{popupAddMovieForm}</div>

                    <div className={"HomePage-Searchbar"}>
                        <input placeholder={"Search movie ..."}
                               onChange={e => setSearchedTitle(e.target.value)}
                        />
                    </div>

                </div>

                <div className={"HomePage-Gallery"}>
                    {movies.length !== 0 ?
                        searchedMovies.length !== 0 ?
                            <MovieGallery
                                movies = {!favoriteToggleOn ? searchedMovies : favorites}
                                onDelete = {(id) => {
                                    setDeletePopup(true);
                                    setDeleteId(id);
                                }}
                                onFavorite = {onFavorite}
                                onEdit = {onEditPopup}
                            />
                            :
                            <div>No movie found</div>
                        : <div>No data yet</div>
                    }
                </div>

                <div>
                    {popupEditMovieForm}
                </div>

                <Popup trigger={deletePopup} setTrigger={setDeletePopup}>
                    <div className={"conformation-box"} >
                        <div>
                            <h2>Do you want to delete this movie?</h2>
                        </div>
                        <div>
                            <button className={"conformation-button"} onClick={onYes}>Yes</button>
                            <button className={"conformation-button"} onClick={() => setDeletePopup(false)}>No</button>
                        </div>
                    </div>
                </Popup>
            </div>

        </div>
    );
}