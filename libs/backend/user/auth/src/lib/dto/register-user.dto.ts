import { CreateUserDto } from '@top-pages.app/backend/user/mongo';
import { IsString } from 'class-validator';

export class RegisterUserDto implements Omit<CreateUserDto, 'passwordHash'> {
  @IsString()
  email!: string;

  @IsString()
  password!: string;
}
