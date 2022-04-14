import { Module } from '@nestjs/common';
import { BackendCoreMongoModule,MongoDbConfigLibOpts } from '@top-pages.app/backend/mongo/monogo';
import { BackendUserAuthModule, JwtLibConfig } from '@top-pages.app/backend/user/auth';

@Module({
  imports: [BackendCoreMongoModule.forRootAsync(MongoDbConfigLibOpts), BackendUserAuthModule.forRootAsync(JwtLibConfig),],
})
export class AppModule {}
