import { Body, Controller, Get, Post } from '@nestjs/common';
import { MarkdownService } from './markdown.service';
import { CreateMarkdownDto } from './dto/create-markdown.dto';
import { Markdown } from './schemas/markdown.schema';

@Controller('markdown')
export class MarkdownController {
  constructor(private markdownService: MarkdownService) {}

  @Get()
  async findAll(): Promise<Markdown[]> {
    return this.markdownService.findAll();
  }

  @Post()
  async createMarkdown(
    @Body() createMarkdownDto: CreateMarkdownDto,
  ): Promise<Markdown> {
    return this.markdownService.create(createMarkdownDto);
  }
}
