import userResolvers from '../../users/graphql/resolvers/user.js';
import authResolvers from '../../auth/graphql/resolvers/auth.js';

const resolvers = {
    Query: {
        ...userResolvers.Query,
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...authResolvers.Mutation,
    },
};


export default resolvers;