import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PageModelToken } from "./tokens";
import { PageSchema } from "./page/page.model";
import { PageService } from "./page/page.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PageModelToken, schema: PageSchema }]),
  ],
  providers: [PageService],
  exports: [PageService]
})
export class BackendPageMongoModule {}
