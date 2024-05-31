import authTypeDefs from '../../auth/graphql/types/auth';
import userTypeDefs from '../../users/graphql/types/user';

const typeDefs = `
  ${authTypeDefs}
  ${userTypeDefs}
`;

module.exports = typeDefs;
