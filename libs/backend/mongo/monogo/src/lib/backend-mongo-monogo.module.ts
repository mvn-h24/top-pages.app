import {DynamicModule, Module} from '@nestjs/common';
import {MongooseModule, MongooseModuleAsyncOptions} from "@nestjs/mongoose";

@Module({
})
export class BackendCoreMongoModule {
  static forRootAsync(opts: MongooseModuleAsyncOptions): DynamicModule {
    return {
      module: BackendCoreMongoModule,
      imports: [MongooseModule.forRootAsync(opts)],
    };
  }
}
