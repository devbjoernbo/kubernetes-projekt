const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: () => ({
    id: { type: GraphQLString },
    username: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLString }
  })
});

module.exports = UserType;
