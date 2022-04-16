import { Module } from '@nestjs/common';
import { BackendCoreMongoModule,MongoDbConfigLibOpts } from '@top-pages.app/backend/mongo/monogo';
import { BackendUserAuthModule, JwtLibConfig } from '@top-pages.app/backend/user/auth';
import {BackendPageHttpAppModule} from "@top-pages.app/backend/page/http-app";

@Module({
  imports: [
    BackendCoreMongoModule.forRootAsync(MongoDbConfigLibOpts),
    BackendUserAuthModule.forRootAsync(JwtLibConfig),
    BackendPageHttpAppModule
  ],
})
export class AppModule {}
