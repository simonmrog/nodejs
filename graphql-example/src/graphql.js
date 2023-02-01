"use strict";

import pkg from "graphql";
const { graphql, buildSchema } = pkg;
import expressGraphQL from "express-graphql";
const { graphqlHTTP } = expressGraphQL;

// Data
import data from "./data.json" assert { type: "json" };
const { books } = data;

const schema = buildSchema(`
  type Query {
    book(id: Int!): Book
    books(topic: String): [Book]
  }

  type Book {
    id: Int
    title: String
    author: String
    topic: String
    url: String
  }
`);

const getBookById = (args) => {
  const id = args.id;
  return books.find((book) => book.id == id);
};

const getBooks = (topic) => {
  const filteredBooks = books.filter((book) => book.topic == topic);
  if (filteredBooks.length === 0) return books;
};

const resolvers = {
  book: getBookById,
  books: getBooks,
};

const gqlMiddleware = graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
});

export default gqlMiddleware;
