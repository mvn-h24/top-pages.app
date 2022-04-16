import { AdvantageInterface } from '../advantage.interface';
import { IsString } from 'class-validator';

export class CreateAdvantageDto implements AdvantageInterface {
  @IsString()
  description!: string;

  @IsString()
  name!: string;
}
