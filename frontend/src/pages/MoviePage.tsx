import useMovie from "../hooks/useMovie";

export default function MoviePage(){

    const movie = useMovie();

    return (
        <div className={"MoviePage"}>
            { movie?
                <div>
                    <h1>Title: {movie.title}</h1>
                    <h2>Year: {movie.year}</h2>
                    <img src={movie.posterUrl}/>
                </div>
                :
                <div>
                    <h1>No data found</h1>
                </div>
            }
        </div>
    );
}