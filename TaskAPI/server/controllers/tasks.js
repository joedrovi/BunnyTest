const Task = require('../models').userTask;

module.exports = {
  create(req, res) {
    return Task
      .create({
        description: req.body.description,
        state : req.body.state,
        user_id: req.body.user_id,
      })
      .then(task => res.status(201).send(task))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Task
      .findAll()
      .then(tasks => res.status(200).send(tasks))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Task
      .findByPk(req.params.taskId, {})
      .then(task => {
        if (!task) {
          return res.status(404).send({
            message: 'Task Not Found',
          });
        }
        return res.status(200).send(task);
      })
      .catch(error => res.status(400).send(error));
  },


  update(req, res) {
    return Task
      .update({        
        description: req.body.description,
        state : req.body.state,
        user_id: req.body.user_id,
      }, {
        where: {
          id: req.params.taskId
       }
        })
      .then(changes => {
        if (!changes[0]) {
          return res.status(404).send({
            message: 'Task Not Found',
          });
        }
        res.status(200).send("Task Updated")
      })
      .catch((error) => res.status(400).send(error));
  },


  delete(req, res) {
    return Task
      .update({}, {
        where: {
          id: req.params.taskId
       }
        })
      .then(changes => {
        if (!changes[0]) {
          return res.status(404).send({
            message: 'Task Not Found',
          });
        }
        res.status(200).send("Task deleted")
      })
      .catch((error) => res.status(400).send(error));
  },
  getTaskForUser(req, res) {
    return Task
    .findAll({where:{user_id:req.params.userId}})
    .then(tasks => {
      if (!tasks) {
        return res.status(404).send({
          message: 'Task Not Found',
        });
      }
      return res.status(200).send(tasks);
    })
    .catch(error => res.status(400).send(error));
  },


};