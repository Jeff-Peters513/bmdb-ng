import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent extends BaseComponent implements OnInit {
  title: string = "Movie-list"
  
  //movies will hold our list of movies from our backend
  //will be one way bound on our HTML to provide a table of movies
  movies: Movie[] = [];

  constructor(private movieSvc: MovieService) {
    super();
   }

  ngOnInit(): void {
    super.ngOnInit();
    //call our movie service to populate the list of movies
    this.movieSvc.list().subscribe(
      jr => {
        this.movies = jr.data as Movie[];
        console.log("List of Movies", this.movies);
      }
    );

  }

}
