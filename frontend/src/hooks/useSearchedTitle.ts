import Movie from "../types/Movie";
import React, {useState} from "react";

export default function useSearchedTitle(
    movies:Movie[])
    :
    [Movie[], React.Dispatch<React.SetStateAction<string>>]
{
    const [searchedTitle, setSearchedTitle ] = useState<string>("");
    const searchedMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchedTitle));

    return [searchedMovies, setSearchedTitle];
}