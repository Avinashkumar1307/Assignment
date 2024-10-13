// src/files/files.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FilesService } from './files.service';
import { File } from '@prisma/client';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  async create(@Body() body: { name: string; parentId?: number }): Promise<File> {
    return this.filesService.create(body);
  }

  @Get()
  async findAll(): Promise<File[]> {
    return this.filesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<File> {
    return this.filesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: { name?: string; parentId?: number }): Promise<File> {
    return this.filesService.update(id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<File> {
    return this.filesService.remove(id);
  }
}
