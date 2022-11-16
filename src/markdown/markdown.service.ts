import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Markdown, MarkdownDocument } from './schemas/markdown.schema';
import { CreateMarkdownDto } from './dto/create-markdown.dto';

@Injectable()
export class MarkdownService {
  constructor(
    @InjectModel(Markdown.name) private markdownModel: Model<MarkdownDocument>,
  ) {}

  async create(createMarkdownDto: CreateMarkdownDto): Promise<Markdown> {
    const createdBook = new this.markdownModel(createMarkdownDto);
    return createdBook.save();
  }

  async findAll(): Promise<Markdown[]> {
    return this.markdownModel.find().exec();
  }
}
