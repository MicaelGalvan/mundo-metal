import User from '../../models/user.js';
import { tokenSign } from '../../../helpers/generateToken.js';
import bcrypt from 'bcryptjs';

const userResolvers = {
    Query: {
        getUser: async (_, { id }) => {
            return await User.findById(id);
        },
        getUsers: async () => {
            return await User.find();
        },
    },
    Mutation: {
        createUser: async (_, { username, email, password }) => {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ username, email, password: hashedPassword });
            await user.save();
            return user;
        },
        loginUser: async (_, { username, password }) => {
            const user = await User.findOne({ username });
            if (!user) {
                throw new Error('User not found');
            }
            const valid = await bcrypt.compare(password, user.password);
            if (!valid) {
                throw new Error('Incorrect password');
            }
            return tokenSign(user);
        },
    },
};

export default userResolvers;
