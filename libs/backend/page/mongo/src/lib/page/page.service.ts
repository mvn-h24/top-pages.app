import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PageModelToken } from '../tokens';
import { PageDocument } from './page.model';
import { CreatePageDto } from './dto';

@Injectable()
export class PageService {
  constructor(
    @InjectModel(PageModelToken) private readonly model: Model<PageDocument>
  ) {}

  createOne(dto: CreatePageDto) {
    return this.model.create(dto);
  }
}
