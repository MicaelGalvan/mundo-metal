import { getAllUsers, getUserById, createUser } from '../../services/userService.js';

export const userResolver = {
    Query: {
        users: async () => await getAllUsers(),
        user: async (_, { id }) => await getUserById(id),
    },
    Mutation: {
        createUser: async (_, { email, name, password }) => {
            const userData = { email, name, password };
            return await createUser(userData);
        },
    },
};
