import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class RickAndMortyService {
  private readonly apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private httpService: HttpService) {}

  getCharacters(): Observable<AxiosResponse<any>> {
    return this.httpService.get(`${this.apiUrl}/character`);
  }

  getCharacterById(id: number): Observable<AxiosResponse<any>> {
    return this.httpService.get(`${this.apiUrl}/character/${id}`);
  }
}
