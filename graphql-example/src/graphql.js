"use strict";

import pkg from "graphql";
const { graphql, buildSchema } = pkg;
import expressGraphQL from "express-graphql";
const { graphqlHTTP } = expressGraphQL;


const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const resolvers = {
  hello: function () {
    return "Hello World"
  }
}

graphql(schema, `{ hello }`, resolvers).then(function (data) {
  console.log(data);
});

const gqlMiddleware = graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
});

export default gqlMiddleware;
