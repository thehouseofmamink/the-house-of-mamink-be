import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly service: ProfileService) {}

  @Get()
  findOne() {
    return this.service.findOne();
  }

  @Post()
  create(@Body() dto: CreateProfileDto) {
    return this.service.create(dto);
  }

  @Patch()
  update(@Body() dto: UpdateProfileDto) {
    return this.service.update(dto);
  }

  @Delete()
  remove() {
    return this.service.remove();
  }
}
