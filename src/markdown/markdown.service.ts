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

  async find(page: number): Promise<MarkdownDocument[]> {
    const query = this.markdownModel.find();
    const limit = 10;
    const total = await this.markdownModel.count();
    const lastPage = Math.ceil(total / limit);

    if (page > lastPage) return [];

    const data = await query
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ updatedAt: 1 })
      .exec();

    return data;
  }

  async update(
    id: string,
    updates: Partial<MarkdownDocument>,
  ): Promise<MarkdownDocument> {
    const query = await this.markdownModel.find().exec();
  }
}
