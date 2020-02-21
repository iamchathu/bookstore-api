import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
  Id: string;
  isbn: string;
  name: string;
  year: string;
  retailPrice: number;
}

const BookSchema: Schema = new Schema(
  {
    isbn: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    year: { type: String, required: true },
    retailPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

export default mongoose.model<IBook>('Book', BookSchema);
