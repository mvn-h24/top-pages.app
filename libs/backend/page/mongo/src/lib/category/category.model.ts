import { BaseModel } from '@top-pages.app/backend/mongo/monogo';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  CategoryInterface,
  SecondLevelCategory,
  TopLevelCategory,
} from './category.interface';

export type CategoryDocument = Category & Document;

@Schema()
export class Category extends BaseModel implements CategoryInterface {
  @Prop({ required: true, type: Number })
  firstLevel!: TopLevelCategory;
  @Prop({ type: Number })
  secondLevel?: SecondLevelCategory;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
