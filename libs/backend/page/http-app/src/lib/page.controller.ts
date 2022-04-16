import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { JwtGuard } from "@top-pages.app/backend/user/auth";
import { CreatePageDto, PageService } from "@top-pages.app/backend/page/mongo";

@Controller('page')
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @UseGuards(JwtGuard)
  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() dto: CreatePageDto) {
    return this.pageService.createOne(dto);
  }
}
