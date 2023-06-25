
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character, CharacterPage } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private apiUrl = 'https://www.swapi.tech/api/people';
  private planetsApiUrl = 'https://www.swapi.tech/api/planets';

  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1): Observable<CharacterPage> {
    return this.http.get<CharacterPage>(`${this.apiUrl}?page=${page}&limit=10`);
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }

  getPlanet(id: string): Observable<any> {
    return this.http.get<any>(`${this.planetsApiUrl}/${id}`);
  }

}
