import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { Credit } from '../model/credit.class';

const url: string = "http://localhost:8080/credits/";

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private http: HttpClient) { }

  list(): Observable<JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }
  get(id:number): Observable<JsonResponse> {
    return this.http.get(url+id) as Observable<JsonResponse>;
  }
  create(credit: Credit): Observable<JsonResponse> {
    return this.http.post(url, credit) as Observable<JsonResponse>;
  }
  edit(credit: Credit): Observable<JsonResponse> {
    return this.http.put(url, credit) as Observable<JsonResponse>;
  }
  delete(id:number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }
  //2 new methods to sort by movieId and ActorId
  getAllMoviesForActor(id:number): Observable<JsonResponse> {
    return this.http.get(url+"by-movie-id/"+id) as Observable<JsonResponse>;
  }
  getAllActorsForMovie(id:number): Observable<JsonResponse> {
      return this.http.get(url+"by-actor-id/"+id) as Observable<JsonResponse>;
  }




}
