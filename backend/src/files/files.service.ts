// src/files/files.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { File } from '@prisma/client';

@Injectable()
export class FilesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { name: string; parentId?: number }): Promise<File> {
    return this.prisma.file.create({
      data,
    });
  }

  async findAll(): Promise<File[]> {
    return this.prisma.file.findMany({
      include: { children: true }, // Include children in the response
    });
  }

  async findOne(id: number): Promise<File> {
    const file = await this.prisma.file.findUnique({
      where: { id },
      include: { children: true },
    });

    if (!file) {
      throw new NotFoundException(`File with ID ${id} not found`);
    }

    return file;
  }

  async update(id: number, data: { name?: string; parentId?: number }): Promise<File> {
    const file = await this.prisma.file.update({
      where: { id },
      data,
    });

    return file;
  }

  async remove(id: number): Promise<File> {
    const file = await this.prisma.file.delete({
      where: { id },
    });

    return file;
  }
}
