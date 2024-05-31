import authResolvers from '../../auth/graphql/resolvers/auth';
import userResolvers from '../../users/graphql/resolvers/user';

const resolvers = {
    Query: {
        ...userResolvers.Query,
    },
    Mutation: {
        ...authResolvers.Mutation,
        ...userResolvers.Mutation,
    },
};

module.exports = resolvers;
