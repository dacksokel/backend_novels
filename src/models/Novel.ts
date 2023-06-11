
import { Schema } from 'mongoose';
import INovel from '../interfaces/INovel';
import { createModel } from '../utils/mongoose-util';


const novelSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    requiered: true
  }
}, { timestamps: true });

const model = createModel<INovel>('Novel', novelSchema);
export default model;
export { model as Novel, INovel };


