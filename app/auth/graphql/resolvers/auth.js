import { AuthenticationError } from 'apollo-server-express';
import { generateToken } from '../../helpers/generateToken';
import bcrypt from 'bcryptjs';

import User from '../../users/models/user';

const authResolvers = {
    Mutation: {
        loginUser: async (_, { username, password }) => {
            const user = await User.findOne({ username });
            if (!user) {
                throw new AuthenticationError('User not found');
            }
            const valid = await bcrypt.compare(password, user.password);
            if (!valid) {
                throw new AuthenticationError('Incorrect password');
            }
            return generateToken(user);
        },
    },
};

module.exports = authResolvers;
