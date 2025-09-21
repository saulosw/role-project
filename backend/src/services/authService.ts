const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.login = async (email: string, password: string) => {
    const user = await User.findUserByEmail(email);

    if (!user) {
        const error = new Error('Invalid credentials.');
        throw error;
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
        const error = new Error('Invalid credentials.');
        throw error;
    }

    return user;
};

exports.signIn = async (name: string, email: string, password: string) => {
    const userExists = await User.findUserByEmail(email);

    if (userExists) {
        const error = new Error('User already exists.');
        throw error;
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = await User.createNewUser(name, email, hashPassword);

    return newUser;
};