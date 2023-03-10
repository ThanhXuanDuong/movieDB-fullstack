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

    public Movie getById(int id) {
        return repo.getById(id);
    }

    public Movie addMovie(Movie newMovie) {
        newMovie.setId(idGenerator());
        return repo.addMovie(newMovie);
    }

    public int idGenerator() {
        List<Integer> sortedIds= repo.getAllMovies().stream().map(Movie::getId).sorted().toList();
        return sortedIds.get(sortedIds.size()-1)+1;
    }

    public List<Movie> deleteMovie(int id) {
        return repo.deleteMovie(id);
    }

    public Movie updateMovie(Movie movie) {
        return repo.updateMovie(movie);
    }
}
