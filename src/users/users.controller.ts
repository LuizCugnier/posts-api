import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUser } from './use-cases/create-user.service';
import { UpdateUserInfo } from './use-cases/update-user.service';
import { FindAllUsers } from './use-cases/find-all-users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUser: CreateUser,
    private readonly updateUserInfo: UpdateUserInfo,
    private readonly findAllUsers: FindAllUsers,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUser.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.findAllUsers.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.updateUserInfo.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    //return this.usersService.remove(+id);
  }
}
