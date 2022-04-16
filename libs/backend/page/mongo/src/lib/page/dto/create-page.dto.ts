import { PageInterface } from '../page.interface';
import { IsArray, IsString, ValidateNested } from 'class-validator';
import { CreateCategoryDto } from '../../category/dto/create-category.dto';
import { Type } from 'class-transformer';
import { CreateAdvantageDto } from '../../advantage/dto/create-advantage.dto';

export class CreatePageDto implements PageInterface {
  @Type(() => CreateAdvantageDto)
  @ValidateNested()
  @IsArray()
  advantages!: Array<CreateAdvantageDto>;

  @IsString()
  alias!: string;

  @Type(() => CreateCategoryDto)
  @ValidateNested()
  page_category!: CreateCategoryDto;

  @IsString()
  product_category!: string;

  @IsString()
  seoText!: string;

  @IsArray()
  @IsString({ each: true })
  tags!: Array<string>;

  @IsString()
  tagsTitle!: string;

  @IsString()
  title!: string;
}
