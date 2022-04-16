import { Module } from "@nestjs/common";
import { PageController } from "./page.controller";
import { BackendPageMongoModule } from "@top-pages.app/backend/page/mongo";

@Module({
  imports: [BackendPageMongoModule],
  controllers: [PageController],
})
export class BackendPageHttpAppModule {}
