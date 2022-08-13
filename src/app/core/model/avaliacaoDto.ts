import { CriaAvaliacaoUserDto } from './criaAvaliacaoUserDto';
import { MuseusDto } from './museusDto';

export class AvaliacaoDto { 
    id: number = 0;
    nota: number = 0;
    avaliacao: string = '';
    museu: MuseusDto = new MuseusDto;
    autor: CriaAvaliacaoUserDto = new CriaAvaliacaoUserDto;
}