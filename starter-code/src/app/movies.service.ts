import { Injectable } from '@angular/core';
import { Movie } from './interfaces/movie';

@Injectable()
export class MoviesService {

  movies: Movie[];

  constructor() { }

  getMovies(){
    return this.movies;
  }

  getMovieId(id){
    const result = this.movies.filter((movie)=>{
      return movie.id === id
    });

    return result[0]

  }

}
