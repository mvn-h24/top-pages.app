import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { UserInterface, UserService } from '@top-pages.app/backend/user/mongo';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UserTokenData } from './dto/user-token.data';
import { UserTokenResponse } from './dto/user-token.response';
import { UserNotFoundException } from './exception/user-not-found.exception';
import { WrongPasswordException } from './exception/wrong-password.exception';
import { UserExistsException } from './exception/user-exists.exception';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  registerUser({ email, password }: RegisterUserDto) {
    return this.userService.findUserByEmail(email).then((user) => {
      if (user) {
        throw new UserExistsException();
      }
      return this.userService.createUser({
        email: email,
        passwordHash: hashSync(password, genSaltSync(8)),
      });
    });
  }

  validateUser({ email, password }: LoginUserDto) {
    return this.userService.findUserByEmail(email).then((user) => {
      if (!user) {
        throw new UserNotFoundException();
      }
      const isPassCorrect = compareSync(password, user.passwordHash);
      if (!isPassCorrect) {
        throw new WrongPasswordException();
      }
      return user;
    });
  }

  private static createUserTokenData(user: UserInterface): UserTokenData {
    return {
      email: user.email,
    };
  }
  createUserToken(user: UserInterface): Promise<UserTokenResponse> {
    return this.jwtService
      .signAsync(AuthService.createUserTokenData(user))
      .then((access_token) => ({ access_token }));
  }
}
