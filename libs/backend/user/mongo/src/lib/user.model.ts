import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserInterface } from './user.interface';
import { BaseModel } from '@top-pages.app/backend/mongo/monogo';

export type UserDocument = User & Document;

@Schema()
export class User extends BaseModel implements UserInterface {
  @Prop({ unique: true, required: true })
  email!: string;

  @Prop({ required: true })
  passwordHash!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
