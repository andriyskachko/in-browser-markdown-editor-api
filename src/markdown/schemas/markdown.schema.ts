import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MarkdownDocument = HydratedDocument<Markdown>;

@Schema()
export class Markdown {
  @Prop({ required: true, minlength: 2, maxlength: 20 })
  name: string;

  @Prop({ required: true })
  body: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const MarkdownSchema = SchemaFactory.createForClass(Markdown);
