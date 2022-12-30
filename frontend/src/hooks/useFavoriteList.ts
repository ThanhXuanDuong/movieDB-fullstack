import Movie from "../types/Movie";
import {useState} from "react";
import $ from "jquery";

export default function useFavoriteList(
    movies:Movie[])
    :
    [boolean, Movie[], () =>void]
{
    const [favoriteToggleOn, setFavoriteToggleOn]= useState(false);

    const onFavoriteList= () => {
        setFavoriteToggleOn(!favoriteToggleOn);
        if ($('.favorite-list-button').hasClass('active')) {
            $('.this').removeClass('active')
        } else {
            $('.this').addClass('active')
        }
    }

    const favorites =movies.filter(movie => movie.favoriteStatus);

    return [favoriteToggleOn, favorites, onFavoriteList];
}