import { BadRequestException } from '@nestjs/common';
import { UserExists } from './messages';

export class UserExistsException extends BadRequestException {
  constructor() {
    super(UserExists);
  }
}
