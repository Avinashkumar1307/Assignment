import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { BlogModule } from './blog/blog.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [ FilesModule],
  providers: [PrismaService],
})
export class AppModule {}
