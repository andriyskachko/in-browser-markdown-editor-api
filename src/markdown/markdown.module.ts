import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MarkdownService } from './markdown.service';
import { MarkdownController } from './markdown.controller';
import { Markdown, MarkdownSchema } from './schemas/markdown.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Markdown.name, schema: MarkdownSchema },
    ]),
  ],
  providers: [MarkdownService],
  controllers: [MarkdownController],
})
export class MarkdownModule {}
