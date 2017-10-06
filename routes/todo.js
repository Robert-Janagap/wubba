const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// Schema
const Users = require('../models/users');

router.post('/task', ( req, res, next ) => {
    Users.update({"_id": req.body.user_id} , { $push: { "tasks": req.body }}, ( err, data ) => {
        if( err ) throw err;
        res.json(data);
    })
});

router.get('/:id', ( req, res, next ) => {
    Users.findById({"_id": req.params.id}, ( err, data ) => {
        if( err ) throw err;
        res.json(data.tasks);
    });
});

router.put('/:id', ( req, res, next ) => {
    const updatedTask = {
        task_id: req.body.task_id,
        task: req.body.task,
        done: false
    };
    Users.update({"_id": req.params.id, "tasks.task_id": req.body.task_id} , {$pull:{tasks:{task_id:req.body.task_id}}}, ( err, data ) => {
        if( err ) throw err;
    });

    Users.update({"_id": req.params.id} , { $push: { "tasks": updatedTask }}, ( err, data ) => {
        if( err ) throw err;
        res.json(data);
    });
});

router.put('/delete/:id', function(req, res, next) {
    Users.update({"_id": req.params.id, "tasks.task_id": req.body.task_id} , {$pull:{tasks:{task_id:req.body.task_id}}}, ( err, data ) => {
        if( err ) throw err;
        res.json(data);
    });
});

module.exports = router;