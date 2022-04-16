import { BaseModel } from '@top-pages.app/backend/mongo/monogo';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PageInterface } from './page.interface';
import { Category } from '../category/category.model';
import { Advantage, AdvantageSchema } from '../advantage/advantage.model';

export type PageDocument = Page & Document;

@Schema()
export class Page extends BaseModel implements PageInterface {
  @Prop({ type: [AdvantageSchema], default: [] })
  advantages!: Array<Advantage>;
  @Prop({ required: true })
  alias!: string;
  @Prop({ type: Category })
  page_category!: Category;
  @Prop({ required: true })
  product_category!: string;
  @Prop({ required: true })
  seoText!: string;
  @Prop([String])
  tags!: Array<string>;
  @Prop({ required: true })
  tagsTitle!: string;
  @Prop({ required: true })
  title!: string;
}

export const PageSchema = SchemaFactory.createForClass(Page).index({
  title: 'text',
  seoText: 'text',
});
