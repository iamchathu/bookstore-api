import Book from '../modules/books/book.schema';

// eslint-disable-next-line import/prefer-default-export
export const runSeed = async (): Promise<void> => {
  await Book.insertMany([
    {
      name: 'The Quest',
      isbn: '9780751553246',
      retailPrice: 1200.0,
      year: '1975',
    },
  ]);
};
