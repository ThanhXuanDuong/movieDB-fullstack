import Movie from "../types/Movie";
export default function MovieCard({movie}: {movie: Movie}){
    return (
        <div className={"MovieCard"}>
            <h4 className={"MovieCard-Title"}>
                {movie.title}
            </h4>
            <div className={"MovieCard-Poster"}>
                <img src={movie.posterUrl}/>
            </div>
        </div>
    );
}