import { BaseModel } from '@top-pages.app/backend/mongo/monogo';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AdvantageInterface } from './advantage.interface';

export type AdvantageDocument = Advantage & Document;

@Schema()
export class Advantage extends BaseModel implements AdvantageInterface {
  @Prop({ required: true })
  description!: string;
  @Prop({ required: true })
  name!: string;
}

export const AdvantageSchema = SchemaFactory.createForClass(Advantage);
