import { gql } from 'apollo-server-express';
import userSchema from '../../users/graphql/schema/user.js';

const rootSchema = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }
`;

export default [rootSchema, userSchema];