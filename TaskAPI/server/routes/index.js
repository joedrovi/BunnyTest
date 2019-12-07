const tasksController = require('../controllers').tasks;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the users API!',
  }));

  
  app.get('/api/tasks', tasksController.list);
  app.get('/api/tasks/:taskId', tasksController.retrieve);  
  app.get('/api/tasks/byUser/:userId', tasksController.getTasksFromUser);

  app.post('/api/tasks', tasksController.create);
  app.post('/api/tasks/:taskId', tasksController.update);
  app.post('/api/tasks/delete/:taskId', tasksController.delete);
  app.post('/api/tasks/byUser/delete/:userId', tasksController.deleteTasksFromUser);
};