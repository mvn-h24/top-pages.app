import { JwtModuleOptions } from '@nestjs/jwt';
import { JwtConfigModule, JwtConfigTokenSecretKey } from './jwt-config.module';
import { JwtModuleAsyncOptions } from '@nestjs/jwt/dist/interfaces/jwt-module-options.interface';

export const JwtLibConfig: JwtModuleAsyncOptions = {
  imports: [JwtConfigModule],
  inject: [JwtConfigTokenSecretKey],
  useFactory: (secret: string): JwtModuleOptions => ({
    secret,
  }),
};
