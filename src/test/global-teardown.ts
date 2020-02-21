import Book from '../modules/books/book.schema';

const globalTearDown = () => {
  // await Book.deleteMany({});
};

export default globalTearDown;
