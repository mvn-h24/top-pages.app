import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserTokenData } from '../dto/user-token.data';
import { JwtConfigTokenSecretKey } from '../jwt.config/jwt-config.module';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(JwtConfigTokenSecretKey) jwtSecret: string) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: jwtSecret,
    });
  }
  async validate({ email }: UserTokenData) {
    return email;
  }
}
