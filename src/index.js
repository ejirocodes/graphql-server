var express = require('express');
const { graphqlHTTP } = require('express-graphql');

var PORT = 4333 || 2323;

var app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    // schema: MyGraphQLSchema,
    graphiql: true,
  })
);

app.listen(4333, function () {
  console.log(`Server running on http://localhost:${PORT}`);
});
