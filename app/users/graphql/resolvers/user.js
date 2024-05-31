import bcrypt from 'bcryptjs';
import { generateToken } from '../../helpers/generateToken';
import User from '../../models/user';

const userResolvers = {
    Query: {
        getUser: async (_, { id }) => {
            try {
                const user = await User.findById(id);
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
                const users = await User.find();
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
                const user = new User({ username, email, password: hashedPassword });
                await user.save();
                return user;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        loginUser: async (_, { username, password }) => {
            try {
                const user = await User.findOne({ username });
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
