const mongoose = require('mongoose');

// User Schema
const UserSchema = mongoose.Schema({
    email: String,
    password: String,
    profile:{
        name: String,
    },
    tasks:{
        task_id: String,
        task: String,
        date_created: String,
        done: Boolean
    },
    taskChild:{
        task_id: String,
        task: String,
        date_created: String,
        done: Boolean
    }
});

module.exports = mongoose.model('Users', UserSchema);