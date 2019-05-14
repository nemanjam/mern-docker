const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todoDescription: {
        type: String
    },
    todoResponsible: {
        type: String
    },
    todoPriority: {
        type: String
    },
    todoCompleted: {
        type: Boolean
    }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
