import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModelToken } from './tokens';
import { UserDocument } from './user.model';
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModelToken) private userModel: Model<UserDocument>
  ) {}
  createUser(dto: CreateUserDto) {
    return this.userModel.create(dto);
  }
  findUserByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }
}
