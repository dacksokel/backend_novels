
import { Schema } from 'mongoose';
import INovel from '../interfaces/INovel';
import { createModel } from '../utils/mongoose-util';


const chapterSchema = new Schema({
  novelName: {
    type: String,
    required: true
  },
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
  },
  author: {
    type: String,
    requiered: true
  }
}, { timestamps: true });

const model = createModel<INovel>('Novels', chapterSchema);
export default model;
export { model as Novels, INovel };


