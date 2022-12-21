package com.example.backend.controller;

import com.example.backend.model.Movie;
import com.example.backend.service.MovieService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")

public class MovieController {
    private final MovieService service;

    public MovieController(MovieService service) {
        this.service = service;
    }

    @GetMapping
    public List<Movie> getAllMovies(){
        return service.getAllMovies();
    }

    @GetMapping("/{id}")
    public Movie getById(@PathVariable int id){
        return service.getById(id);
    }

    @PostMapping
    public Movie addMovie(@RequestBody Movie  newMovie){
        return service.addMovie(newMovie);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id){
        service.deleteMovie(id);
    }
}
