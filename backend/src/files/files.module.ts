// src/files/files.module.ts
import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { PrismaModule } from '../prisma.module'; // Adjust the path as needed

@Module({
  imports: [PrismaModule], // Import PrismaModule here
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
