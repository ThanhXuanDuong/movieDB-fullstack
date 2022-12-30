import React, {useEffect, useState} from "react";
import Movie from "../types/Movie";
import axios from "axios";

export default function useMovies(initialState:Movie[]) : [Movie[], React.Dispatch<React.SetStateAction<Movie[]>>]{
    const [movies, setMovies] = useState<Movie[]>(initialState);

    useEffect(()=>{
            (async ()=>{
                const response = await axios.get("/api/movies");
                const data: Movie[] =response.data;
                setMovies(data);
            })();
        }
        ,[]);

    return [movies, setMovies];
}