import { gql } from 'apollo-server-express';

const userTypeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  extend type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  extend type Mutation {
    createUser(username: String!, email: String!, password: String!): User
  }
`;

module.exports = userTypeDefs;
