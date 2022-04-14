import { UnauthorizedException } from '@nestjs/common';
import { WrongPassword } from './messages';

export class WrongPasswordException extends UnauthorizedException {
  constructor() {
    super(WrongPassword);
  }
}
