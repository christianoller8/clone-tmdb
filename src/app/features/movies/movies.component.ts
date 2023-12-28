import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/shared/implementations/movies.service";
import { ListMovies } from "../models/movies.interface";
import { map } from "rxjs/operators";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesComponent implements OnInit {
  // movie: SimpleMovie = {
  //   title: "",
  //   overview: "",
  // };

  movies: ListMovies[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    // this.moviesService.getAllMovies().then((data) => {
    //   this.movie = data;
    // });

    this.moviesService
      .getMovies()
      .pipe(map((data) => data.results))
      .subscribe((data) => {
        console.log(data);
        this.movies = data;
      });
  }
}
