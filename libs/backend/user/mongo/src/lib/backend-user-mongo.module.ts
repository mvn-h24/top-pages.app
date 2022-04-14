import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import { UserSchema} from "./user.model";
import {UserService} from "./user.service";
import {UserModelToken} from "./tokens";

@Module({
  imports: [MongooseModule.forFeature([{ name: UserModelToken, schema: UserSchema }])],
  providers: [UserService],
  exports: [UserService]
})
export class BackendUserMongoModule {}
