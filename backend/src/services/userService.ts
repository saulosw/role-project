const User = require('../models/User');

exports.getUserProfile = async (userId: string) => {
    try {
        const user = await User.getUserProfile(userId);

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    } catch (error) {
        console.error('Error in getUserProfile service:', error);
        throw error;
    }
};

exports.getUserEvents = async (userId: string) => {
    try {
        const events = await User.getUserEvents(userId);
        return events;
    } catch (error) {
        console.error('Error in getUserEvents service:', error);
        throw error;
    }
};

exports.getUserParticipatingEvents = async (userId: string) => {
    try {
        const events = await User.getUserParticipatingEvents(userId);
        return events;
    } catch (error) {
        console.error('Error in getUserParticipatingEvents service:', error);
        throw error;
    }
};
