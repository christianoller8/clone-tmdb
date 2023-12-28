import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { SimpleMovie } from "src/app/features/models/movies.interface";
import { ListMovies } from "src/app/features/models/movies.interface";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  private url = "https://api.themoviedb.org/3/movie/top_rated";
  private token = "7183dfb28906cedc11b651232fac310a";
  private language = "es-ES";

  params = new HttpParams()
    .set("api_key", this.token)
    .set("language", this.language);

  getMovies() {
    return this.http.get<any>(this.url, { params: this.params });
  }
}
