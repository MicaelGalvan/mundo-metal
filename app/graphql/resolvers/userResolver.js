import userService from '../../services/userService.js';

const userResolver = {
    Query: {
        users: async () => await userService.getAllUsers(),
        user: async (_, { id }) => await userService.getUserById(id),
    },
    Mutation: {
        createUser: async (_, { email, name, password }) => {
            const userData = { email, name, password };
            return await userService.createUser(userData);
        },
    },
};

export default userResolver;
