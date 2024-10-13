import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogPost } from '@prisma/client';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  create(@Body() createBlogPostDto: { title: string; content: string; author: string }): Promise<BlogPost> {
    return this.blogService.create(createBlogPostDto);
  }

  @Get()
  findAll(): Promise<BlogPost[]> {
    return this.blogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<BlogPost | null> {
    return this.blogService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBlogPostDto: Partial<{ title: string; content: string; author: string }>): Promise<BlogPost> {
    return this.blogService.update(Number(id), updateBlogPostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<BlogPost> {
    return this.blogService.remove(Number(id));
  }
}
