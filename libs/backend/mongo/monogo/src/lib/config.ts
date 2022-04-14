import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose/dist/interfaces/mongoose-options.interface';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';

const ConfigFactory = async (
  confService: ConfigService
): Promise<MongooseModuleOptions> => {
  return {
    uri: getMongoUriString(confService),
    ...getConnectOptions(),
  };
};

const getMongoUriString = (confService: ConfigService) =>
  `mongodb://${confService.get('MONGO_LOGIN')}:${confService.get(
    'MONGO_PASSWORD'
  )}@${confService.get('MONGO_HOST')}:${confService.get('MONGO_PORT')}/${confService.get(
    'MONGO_DB'
  )}`;

const getConnectOptions = () => ({});

export const MongoDbConfigLibOpts: MongooseModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: ConfigFactory,
};
