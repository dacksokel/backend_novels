
import mongoose, { Schema } from 'mongoose';
import IChapter from '../interfaces/IChapter';
import { createModel } from '../utils/mongoose-util';


const chapterSchema = new Schema({
  novel: { type: mongoose.Schema.Types.ObjectId, ref: 'Novel' },
  title: {
    type: String,
    required: true,
    unique: true
  },
  chapter: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  chapterNumber: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const model = createModel<IChapter>('Chapters', chapterSchema);
export default model;
export { model as Chapter, IChapter };


