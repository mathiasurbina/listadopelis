import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiclientService {
  getDetallePelicula(movieId: any) {
    throw new Error('Method not implemented.');
  }
  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }
  
  apiURL = 'https://my-json-server.typicode.com/mathiasurbina/peliculas';

  constructor(private http:HttpClient) { }
  getPelicula(MovieId:any):Observable<any>{
    return this.http.get(this.apiURL+'/movies/'+MovieId).pipe(
      retry(3)
    );
  }
  getPeliculas():Observable<any>{
    return this.http.get(this.apiURL+'/movies/').pipe(
      retry(3)
    );
  }
}
