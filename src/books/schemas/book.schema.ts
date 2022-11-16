import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  text: string;

  @Prop({ required: false })
  author: string;

  // TODO
  // add translations
  // add author
  // add versioning
}

export const BookSchema = SchemaFactory.createForClass(Book);
