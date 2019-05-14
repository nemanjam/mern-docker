const express = require('express');
const router = express.Router();

const Todo = require('../models/Todo');

router.get('/message', (req, res) => {
	res.send({message: "Hello from Express Mongo backend."});
});

router.get('/todos', function(req, res) {
    Todo.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

router.get('/todos/:id', function(req, res) {
    const id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

router.post('/todos/add', function(req, res) {
    const todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

router.delete('/todos/delete/:id', function (req, res) {
    Todo.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('deleted successfully!');
    })
});

router.post('/todos/update/:id', function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todoDescription = req.body.todoDescription;
            todo.todoResponsible = req.body.todoResponsible;
            todo.todoPriority = req.body.todoPriority;
            todo.todoCompleted = req.body.todoCompleted;

            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

module.exports = router;
