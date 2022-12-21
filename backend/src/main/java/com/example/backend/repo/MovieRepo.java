package com.example.backend.repo;
import com.example.backend.model.Movie;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class MovieRepo {
    private List<Movie>  movies = new ArrayList<Movie>(List.of(
            new Movie(1, "Parasite", 2019, "https://posters.movieposterdb.com/21_12/2019/6751668/l_6751668_a2120261.jpg"),
            new Movie(2, "Bird box", 2018, "https://posters.movieposterdb.com/20_01/2018/2737304/l_2737304_a54951b0.jpg"),
            new Movie(3, "Joker", 2019, "https://posters.movieposterdb.com/20_10/2019/7286456/l_7286456_97fee279.jpg"),
            new Movie(4, "Avatar", 2009, "https://posters.movieposterdb.com/09_11/2009/499549/l_499549_db0e85bb.jpg"),
            new Movie(5, "Inception", 2010, "https://posters.movieposterdb.com/10_06/2010/1375666/l_1375666_07030c72.jpg"),
            new Movie(6, "Countdown", 2019, "https://posters.movieposterdb.com/21_07/2019/10039344/l_10039344_ec395e04.jpg"),
            new Movie(7, "The imitation game", 2014, "https://posters.movieposterdb.com/14_09/2014/2084970/l_2084970_899fb82b.jpg"),
            new Movie(8, "Tangled", 2010, "https://posters.movieposterdb.com/10_09/2010/398286/l_398286_8dadcf77.jpg"),
            new Movie(9, "Frozen", 2013, "https://posters.movieposterdb.com/13_09/2013/2294629/l_2294629_7342c9bf.jpg"),
            new Movie(10, "Skyfall", 2012, "https://posters.movieposterdb.com/21_06/2012/1074638/l_1074638_b578360d.jpg")
    ));

    public List<Movie> getAllMovies() {
        return movies;
    }

    public Movie getById(int id) {
        Movie movie =null;
            for (Movie m : movies){
                if (m.getId()==id){
                    movie =m;
                    continue;
                };
            };

        return movie;
    }
    public Movie addMovie(Movie newMovie) {
        movies.add(newMovie);
        return newMovie;
    }

    public List<Movie> deleteMovie(int id) {
       //movies.stream().filter(movie -> movie.getId()!=id).collect(Collectors.toList());
        movies.removeIf(movie ->(movie.getId()==id));
        return movies;
    }


}
