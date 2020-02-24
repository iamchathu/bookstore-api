# Book Store API
Book Store API for the Workshop

## Introduction

This repository built using `TypeScript` and `ESLint` and `Jest` and some other Open source technologies to teach how to create Web APIs using Node.js.

### Requirements

* [Node.js LTS](https://nodejs.org)
* [Yarn 1.x](https://classic.yarnpkg.com/en/docs/install)
* VSCode (Optional)
* MongoDB 

### How to start

* Clone the repository

```bash
git clone https://github.com/iamchathu/bookstore-api.git
```

* Install the dependencies.

```bash
yarn
```

* Create a account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
* Create a cluster of AWS provider in Singapore region.
* Allow the `0.0.0.0/0` IP for development.
* Get the user and password and get your connection URL.
* Copy `.env.example` and paste with name `.env`.
* Update the `MONGODB_URI`'s `<username>`,`<password>`,`<your-string>` with your connection parameters.
  
```env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0-<your_string>.mongodb.net/library?retryWrites=true&w=majority
```

* Copy `.env.test.example` and paste with name `.env.test` for tests.
* Update the `MONGODB_URI`'s `<username>`,`<password>`,`<your-string>` with your connection parameters.

```env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster0-<your_string>.mongodb.net/library-test?retryWrites=true&w=majority
```

* Run tests

```bash
yarn test
```

* Complete `src/modules/books/book.controller.ts` accordingly as following so the tests will pass.

### Things to complete.

* List all books endpoint should return all books from database.
* Get one book endpoint will be able to return one book which match to id.
* Add book endpoint should be able to add a new book to database.



