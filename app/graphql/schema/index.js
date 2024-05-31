import { gql } from 'apollo-server-express';
import userSchema from '../users/schema/userSchema';

const rootSchema = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

module.exports = [rootSchema, userSchema];