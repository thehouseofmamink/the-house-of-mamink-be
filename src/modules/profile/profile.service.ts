import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  // Karena profile biasanya 1 data, kita ambil yang pertama
  async findOne() {
    const data = await this.prisma.profile.findFirst();

    if (!data) {
      throw new NotFoundException('Profile not found');
    }

    return data;
  }

  // Optional: create pertama kali (kalau belum ada)
  async create(dto: CreateProfileDto) {
    return this.prisma.profile.create({
      data: dto,
    });
  }

  // Update profile (single record)
  async update(dto: UpdateProfileDto) {
    const existing = await this.prisma.profile.findFirst();

    if (!existing) {
      throw new NotFoundException('Profile not found');
    }

    return this.prisma.profile.update({
      where: { id: existing.id },
      data: dto,
    });
  }

  // Optional: reset / delete
  async remove() {
    const existing = await this.prisma.profile.findFirst();

    if (!existing) {
      throw new NotFoundException('Profile not found');
    }

    return this.prisma.profile.delete({
      where: { id: existing.id },
    });
  }
}
