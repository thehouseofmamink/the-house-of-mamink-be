import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';

@Injectable()
export class GalleryService {
  constructor(private prisma: PrismaService) {}

  async create(createGalleryDto: CreateGalleryDto) {
    return this.prisma.gallery.create({
      data: createGalleryDto,
    });
  }

  async findAll() {
    return this.prisma.gallery.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const data = await this.prisma.gallery.findUnique({
      where: { id },
    });

    if (!data) {
      throw new NotFoundException('Gallery not found');
    }

    return data;
  }

  async update(id: number, updateGalleryDto: UpdateGalleryDto) {
    await this.findOne(id);

    return this.prisma.gallery.update({
      where: { id },
      data: updateGalleryDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.gallery.delete({
      where: { id },
    });
  }
}
