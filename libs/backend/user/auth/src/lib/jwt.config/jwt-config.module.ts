import { Module, Provider } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const JwtConfigTokenSecretKey = 'JwtConfig.SecretKey';
const JwtConfigProviderSecretKey: Provider = {
  provide: JwtConfigTokenSecretKey,
  inject: [ConfigService],
  useFactory: (cs: ConfigService) => cs.get('JWT_SECRET'),
};
@Module({
  imports: [ConfigModule],
  providers: [JwtConfigProviderSecretKey],
  exports: [JwtConfigProviderSecretKey],
})
export class JwtConfigModule {}
