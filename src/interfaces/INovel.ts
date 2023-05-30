import { Document } from 'mongoose';

export default interface INovel extends Document {
    novelName: string;
    title: string;
    chapter: string;
    created_at: Date;
    updated_at: Date;
  }