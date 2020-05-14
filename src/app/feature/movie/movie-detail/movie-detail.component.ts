import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CreditService } from 'src/app/service/credit.service';
import { Credit } from 'src/app/model/credit.class';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  //displays all info about movie
  title: string = "Movie-Detail";
  movie: Movie = new Movie();
  movieId: number = 0;
  credits: Credit[] = [];

  constructor(private movieSvc: MovieService,
    private router: Router,
    private route: ActivatedRoute,
    private creditSvc: CreditService) { }

  ngOnInit(): void {
    //get id from the router
    this.route.params.subscribe(parms => this.movieId = parms['id']);
    //get movie for that movieId
    this.movieSvc.get(this.movieId).subscribe(
      jr => {
        this.movie = jr.data as Movie;
        console.log("Movie found!", this.movie);
      });
    // get the actor credits for this movie
    this.creditSvc.getAllActorsForMovie(this.movieId).subscribe(jr => {
      this.credits = jr.data as Credit[];
    });
  }


  delete() {
    this.movieSvc.delete(this.movieId).subscribe(jr => {
      if (jr.errors == null) {
        console.log(jr.data);
        this.router.navigateByUrl("/movie/list");
      }
      else {
        console.log("*****Error deleting movie.", this.movieId, jr.errors);
      }
    });
  }
}
