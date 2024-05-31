import { User } from '../../models/user';
import { generateToken } from '../../helpers/generateToken';
import bcrypt from 'bcryptjs';

const userResolvers = {
    Query: {
        getUser: async (_, { id }) => {
            try {
                const user = await User.findByPk(id);
                if (!user) {
                    throw new Error('User not found');
                }
                return user;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        getUsers: async () => {
            try {
                const users = await User.findAll();
                return users;
            } catch (error) {
                throw new Error(error.message);
            }
        },
    },
    Mutation: {
        createUser: async (_, { username, email, password }) => {
            try {
                const hashedPassword = await bcrypt.hash(password, 10);
                const user = await User.create({ username, email, password: hashedPassword });
                return user;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        loginUser: async (_, { username, password }) => {
            try {
                const user = await User.findOne({ where: { username } });
                if (!user) {
                    throw new Error('User not found');
                }
                const valid = await bcrypt.compare(password, user.password);
                if (!valid) {
                    throw new Error('Incorrect password');
                }
                return generateToken(user);
            } catch (error) {
                throw new Error(error.message);
            }
        },
    },
};

module.exports = userResolvers;
