const {response} = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user.model');
const { validationResult } = require('express-validator');

const usersGet = (req, res =response) => {

    const {date} = req.query;
    res.json({
        msg: 'GET API - controller',
        date
    })
}

const usersPost = async(req, res) => {

    const  errors = validationResult(req);

    if(!errors.isEmpty() ) {
        return res.status(400).json(errors)
    }

    const { name, email, password, rol } = req.body;

    const user = new User({
        name,
        email,
        password,
        rol
    });

    // Email validation

    const userFind = await User.findOne({email});
    if(userFind) { 
        return res.status(400).json({
            msg: 'User already exits ',
        })
    }

    // Hash
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    res.status(201).json({
        msg: 'POST API -controller',
        user
    })
}

const usersPut = (req, res) => {
    const userId = req.params.id;

    res.json({
        msg: 'PUT API - controller',
        userId
    })
}

const usersDelete = (req, res) => {
    res.json({
        msg: 'DELETE API - controller'
    })
}

const usersPatch = (req, res) => {
    res.json({
        msg: 'PATCH API - controller'
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPatch
}