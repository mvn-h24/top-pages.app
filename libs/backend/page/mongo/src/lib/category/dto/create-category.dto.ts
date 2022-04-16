import {
  CategoryInterface,
  SecondLevelCategory,
  TopLevelCategory,
} from '../category.interface';
import { IsEnum, IsOptional } from 'class-validator';

export class CreateCategoryDto implements CategoryInterface {
  @IsEnum(TopLevelCategory)
  firstLevel!: TopLevelCategory;

  @IsEnum(SecondLevelCategory)
  @IsOptional()
  secondLevel?: SecondLevelCategory;
}
