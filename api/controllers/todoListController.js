const mongoose = require('mongoose');

const Task = mongoose.model('Task');

exports.list_all_tasks = (req, res) => {
    Task.find({}, (err, task) => {
        err && res.send(err);
        res.json(task);
    });
};

exports.create_a_task = (req, res) => {
    const new_task = new Task(req.body);
    new_task.save((err, task) => {
        err && res.send(err);
        res.json(task);
    })
};

exports.read_a_task = (req, res) => {
    Task.findById(req.params.taskId, (err, task) => {
        err && res.send(err);
        res.json(task);
    })
};

exports.update_a_task = (req, res) => {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, (err, task) => {
        err && res.send(err);
        res.json(task);
    })
};

exports.delete_a_task = (req, res) => {
    Task.remove({_id: req.params.taskId}, (err) => {
        err && res.send(err);
        res.json({message: 'Task deleted'});
    })
}