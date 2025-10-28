import json = require('express');
import express = require('express');
const authService = require('../services/authService');

exports.signIn = async (req: express.Request, res: express.Response) => {
    console.log('=== SignIn Request Received ===');
    console.log('Body:', req.body);
    const { name, email, password } = req.body;

    try {
        console.log('Calling authService.signIn...');
        const user = await authService.signIn(name, email, password);
        console.log('User created successfully:', user);
        res.status(201).json({ success: true, message: 'User created successfully', user: user });
    } catch (error) {
        console.error('SignIn Error:', error);
        res.status(400).json({ success: false, message: error instanceof Error ? error.message : 'An error occurred' })
    }
};

exports.login = async (req: express.Request, res: express.Response) => {
    const { email, password } = req.body;

    try {
        const user = await authService.login(email, password);
        res.status(200).json({ success: true, message: 'User login successfully', user: user});
    } catch (error) {
        res.status(400).json({ success: false, message: error instanceof Error ? error.message : 'An error occurred' })
    }
};