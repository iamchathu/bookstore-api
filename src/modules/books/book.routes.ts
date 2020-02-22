import express from 'express';
import config from '../../config';
import { getBooks, getBookById, addBook } from './book.controller';

const routes = (app: express.Application): void => {
  app
    .route(`${config.app.apiBase}/books`)
    .get(getBooks)
    .post(addBook);
  app.route(`${config.app.apiBase}/books/:bookId`).get(getBookById);
};

export default routes;
