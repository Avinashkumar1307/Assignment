import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BlogPost } from '@prisma/client';

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { title: string; content: string; author: string }): Promise<BlogPost> {
    return this.prisma.blogPost.create({
      data,
    });
  }

  async findAll(): Promise<BlogPost[]> {
    return this.prisma.blogPost.findMany();
  }

  async findOne(id: number): Promise<BlogPost | null> {
    return this.prisma.blogPost.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Partial<{ title: string; content: string; author: string }>): Promise<BlogPost> {
    return this.prisma.blogPost.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<BlogPost> {
    return this.prisma.blogPost.delete({
      where: { id },
    });
  }
}
