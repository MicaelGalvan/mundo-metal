import { gql } from 'apollo-server-express';
import typeDefs from '../types';

const schema = gql`
  ${typeDefs}
`;

module.exports = schema;
