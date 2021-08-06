var express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

var PORT = 4333 || 2323;

var app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true, // enable GraphiQL
    pretty: true, // enable pretty print
  })
);

app.listen(4333, function () {
  console.log(`GraphQL Server running on http://localhost:${PORT}/graphql`);
});
