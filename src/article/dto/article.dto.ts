import { Transform } from "class-transformer";
import {IsString, IsNumber, IsEmpty} from 'class-validator'
export class ArticleDto {     
    @Transform(index => parseInt(index))
    readonly index : number;
    readonly category? : string = '';    
    readonly tag? : string;
    readonly id? : string;
    @Transform(type => parseInt(type))
    readonly type? : number;    
}