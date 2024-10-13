import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { PrismaModule } from '../prisma.module'; // Import PrismaModule

@Module({
  imports: [PrismaModule],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}
