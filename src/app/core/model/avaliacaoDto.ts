/**
 * Passaporte Clio
 * API REST que conecta pessoas a museus.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CriaAvaliacaoUserDto } from './criaAvaliacaoUserDto';
import { Link } from './link';
import { MuseusDto } from './museusDto';

export interface AvaliacaoDto { 
    id?: number;
    nota: number;
    avaliacao: string;
    museu: MuseusDto;
    autor?: CriaAvaliacaoUserDto;
    links?: Array<Link>;
}