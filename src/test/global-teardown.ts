import Book from '../modules/books/book.schema';

const globalTearDown = async (): Promise<void> => {
  await Book.deleteMany({});
};

export default globalTearDown;
