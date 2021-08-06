const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const JobType = new GraphQLObjectType({
  name: 'Job',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});
