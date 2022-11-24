import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { MarkdownService } from './markdown.service';
import { CreateMarkdownDto } from './dto/create-markdown.dto';
import { Markdown } from './schemas/markdown.schema';
import { Request } from 'express';

@Controller('markdown')
export class MarkdownController {
  constructor(private markdownService: MarkdownService) {}

  @Get()
  async find(@Req() req: Request): Promise<Markdown[]> {
    const page = parseInt(req.query.page as string) || 1;
    const data = await this.markdownService.find(page);
    return data;
  }

  @Post()
  async createMarkdown(
    @Body() createMarkdownDto: CreateMarkdownDto,
  ): Promise<Markdown> {
    return this.markdownService.create(createMarkdownDto);
  }
}
