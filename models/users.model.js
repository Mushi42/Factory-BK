const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String
    },
    factory: {
        type: String
    },
    empId: {
        type: String
    },
    address: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date
    },
    updatedBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    }
});

const USERS = mongoose.model('users', usersSchema);
module.exports = USERS;