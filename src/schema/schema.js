const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const jobs = [
  {
    id: '1',
    title: 'Job 1',
    description: 'Job 1 description',
  },
  {
    id: '2',
    title: 'Job 2',
    description: 'Job 2 description',
  },
  {
    id: '3',
    title: 'Job 3',
    description: 'Job 3 description',
  },
];

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
      resolve: (root, args) => {
        return _.find(jobs, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
