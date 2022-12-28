import {useEffect, useState} from "react";
import Movie from "../types/Movie";
import axios from "axios";
import {useParams} from "react-router-dom";

export default function useMovie(){
    const {id} = useParams<{id:string}>();
    const [movie, setMovie] = useState<Movie>({id: 0,title:"",year:0,posterUrl:"",favoriteStatus:false});

    useEffect( () =>{
        (async () =>{
            const response = await axios.get("/api/movies/" +id);
            setMovie(response.data);
        })()
    },[id]);

    return movie;
}
