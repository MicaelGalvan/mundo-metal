import userResolvers from '../users/resolvers/userResolvers';

module.exports = {
    Query: {
        ...userResolvers.Query,
    },
    Mutation: {
        ...userResolvers.Mutation,
    },
};