import { UnauthorizedException } from '@nestjs/common';
import { UserNotFound } from './messages';

export class UserNotFoundException extends UnauthorizedException {
  constructor() {
    super(UserNotFound);
  }
}
