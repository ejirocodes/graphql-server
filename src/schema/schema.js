const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const JobType = new GraphQLObjectType({
  name: 'Job',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    jobs: {
      type: JobType,
      args: { id: { type: GraphQLString } },
      resolve(root, args) {},
    },
  },
});

module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
});
