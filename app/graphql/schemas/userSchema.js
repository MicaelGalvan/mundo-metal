import { gql } from 'apollo-server-express';

const userSchema = gql`
  type User {
    id: ID!
    email: String!
    name: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(email: String!, name: String!, password: String!): User
  }
`;

export default userSchema;
