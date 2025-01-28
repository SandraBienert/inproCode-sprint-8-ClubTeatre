import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

private apiUrl = ' https://swapi.dev/api/starships';

  constructor(private http: HttpClient) {}

  public getStarshipsData(): Observable<any>{
return this.http.get<any>(this.apiUrl);
  }
}
