import { Controller, Get, Param } from '@nestjs/common';
import { RickAndMortyService } from './rick-and-morty.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Controller('rick-and-morty')
export class RickAndMortyController {
  constructor(private readonly rickAndMortyService: RickAndMortyService) {}

  @Get('characters')
  getCharacters(): Observable<AxiosResponse<any>> {
    return this.rickAndMortyService.getCharacters();
  }

  @Get('characters/:id')
  getCharacterById(@Param('id') id: number): Observable<AxiosResponse<any>> {
    return this.rickAndMortyService.getCharacterById(id);
  }
}
