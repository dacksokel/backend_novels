import { Document } from 'mongoose';

export default interface IChapters extends Document {
    novelName: string;
    title: string;
    chapter: string;
    created_at: Date;
    updated_at: Date;
    lang: string,
    source: string,
    chapterNumber: number
  }