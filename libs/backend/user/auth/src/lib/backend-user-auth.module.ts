import { DynamicModule, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtModuleAsyncOptions } from '@nestjs/jwt';
import { BackendUserMongoModule } from '@top-pages.app/backend/user/mongo';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './passport/jwt.strategy';
import { JwtConfigModule } from './jwt.config/jwt-config.module';

@Module({})
export class BackendUserAuthModule {
  static forRootAsync(opts: JwtModuleAsyncOptions): DynamicModule {
    return {
      module: BackendUserAuthModule,
      imports: [
        JwtConfigModule,
        JwtModule.registerAsync(opts),
        PassportModule,
        BackendUserMongoModule,
      ],
      controllers: [AuthController],
      providers: [AuthService, JwtStrategy],
    };
  }
}
