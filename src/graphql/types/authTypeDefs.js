import { gql } from 'apollo-server-express';

const authTypeDefs = gql`
  extend type Mutation {
    loginUser(username: String!, password: String!): String
  }
`;

module.exports = authTypeDefs;
