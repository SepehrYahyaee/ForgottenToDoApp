import { Controller, Get, Post, Put, Patch, Delete, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dtos/createUserDTO';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() createUserDTO: CreateUserDTO) {
    return this.userService.createUser(createUserDTO);
  }

  @Get('all')
  all() {
    return this.userService.findAll();
  }
}
