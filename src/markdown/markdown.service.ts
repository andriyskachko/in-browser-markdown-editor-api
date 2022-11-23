import { Model } from 'mongoose';
import { Injectable, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Markdown, MarkdownDocument } from './schemas/markdown.schema';
import { CreateMarkdownDto } from './dto/create-markdown.dto';
import { Request } from 'express';

@Injectable()
export class MarkdownService {
  constructor(
    @InjectModel(Markdown.name)
    private readonly markdownModel: Model<MarkdownDocument>,
  ) {}

  async create(createMarkdownDto: CreateMarkdownDto): Promise<Markdown> {
    const createdBook = new this.markdownModel(createMarkdownDto);
    return createdBook.save();
  }

  async find(@Req() req: Request) {
    const query = this.markdownModel.find();
    const page = parseInt(req.query.page as string) || 1;
    const limit = 10;
    const total = await this.markdownModel.count();
    const lastPage = Math.ceil(total / limit);

    if (page > lastPage) return [];

    const data = query
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ updatedAt: 1 })
      .exec();

    return data;
  }
}
