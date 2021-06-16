const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: {type: String, required: [true, 'Name is required']},
    email: {type: String, required: [true, 'Email is required'], unique:true},
    password: {type: String, required: [true, 'Password is required']},
    img: {type: String},
    rol: {type: String, required: true, enum: ['ADMIN_ROLE', 'USER_ROLE']},
    status: {type: Boolean, default: true},
    google: {type: Boolean , default: false},
});

module.exports= model('User', userSchema );