import request, { SuperTest, Test } from 'supertest';
import { Server } from 'http';
import config from '../../config';

import app from '../../server';
import bookSchema from './book.schema';

let agent: SuperTest<Test>;
let server: Server | undefined;

beforeAll(async () => {
  server = await app();
  agent = request(server);
});

afterAll(async () => {
  if (server) await server.close();
});

describe('Books endpoint', () => {
  it('should return all books', async () => {
    const res = await agent.get(`${config.app.apiBase}/books`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('data');
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data).toHaveLength(1);
    expect(res.body.data[0]).toMatchObject({
      name: 'The Quest',
      isbn: '9780751553246',
      retailPrice: 1200.0,
      year: '1975',
    });
  });
  it('should return one book for id', async () => {
    let newBook = new bookSchema({
      name: 'Angels and Demons',
      isbn: '9780743486224',
      retailPrice: 1600.0,
      year: '2001',
    });
    newBook = await newBook.save();
    const res = await agent.get(`${config.app.apiBase}/books/${newBook._id}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('data');
    expect(typeof res.body.data).toBe('object');
    expect(res.body.data).toMatchObject({
      name: 'Angels and Demons',
      isbn: '9780743486224',
      retailPrice: 1600.0,
      year: '2001',
    });
  });

  it('should add new book', async () => {
    const res = await agent.post(`${config.app.apiBase}/books/`).send({
      name: 'Davinci Code',
      isbn: '9780385504201',
      retailPrice: 1500.0,
      year: '2003',
    });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('data');
    expect(typeof res.body.data).toBe('object');
    expect(res.body.data).toHaveProperty('_id');
    expect(res.body.data).toHaveProperty('createdAt');
    expect(res.body.data).toHaveProperty('updatedAt');
    expect(res.body.data).toMatchObject({
      name: 'Davinci Code',
      isbn: '9780385504201',
      retailPrice: 1500.0,
      year: '2003',
    });
  });
});
