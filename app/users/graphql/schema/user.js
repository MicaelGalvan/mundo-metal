import { gql } from 'apollo-server-express';

const userSchema = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  extend type Query {
    getUser(id: ID!): User
    getUsers: [User!]
  }

  extend type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
    loginUser(username: String!, password: String!): String!
  }
`;

export default userSchema;