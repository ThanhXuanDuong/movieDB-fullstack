package com.example.backend.service;
import com.example.backend.model.Movie;
import com.example.backend.repo.MovieRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MovieService {
    private final MovieRepo repo;

    public List<Movie> getAllMovies() {
        return repo.getAllMovies();
    }

    public Movie getById(int id) {
        return repo.getById(id);
    }

    public Movie addMovie(Movie newMovie) {
        newMovie.setId(idGenerator());
        return repo.addMovie(newMovie);
    }

    public int idGenerator() {
        List<Integer> sortedIds= repo.getAllMovies().stream().map(movie -> movie.getId()).sorted().collect(Collectors.toList());
        return sortedIds.get(sortedIds.size()-1)+1;
    }

    public List<Movie> deleteMovie(int id) {
        return repo.deleteMovie(id);
    }


}
