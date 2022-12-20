package com.example.backend.service;
import com.example.backend.model.Movie;
import com.example.backend.repo.MovieRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieService {
    private final MovieRepo repo;
    public List<Movie> getAllMovies() {
        return repo.getAllMovies();
    }

    public Movie addMovie(Movie newMovie) {
        newMovie.setId(idGenerator());
        return repo.addMovie(newMovie);
    }

    public String idGenerator() {
        return String.valueOf(repo.getAllMovies().size() +1);
    }
}
