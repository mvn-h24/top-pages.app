import {
  Body,
  Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UserRegisteredResponse } from "./dto/user-registered.response";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @Post('register')
  registerUser(@Body() dto: RegisterUserDto): Promise<UserRegisteredResponse> {
    return this.authService.registerUser(dto).then(({ email }) => ({email}));
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  loginUser(@Body() dto: LoginUserDto) {
    return this.authService
      .validateUser(dto)
      .then((user) => this.authService.createUserToken(user));
  }
}
