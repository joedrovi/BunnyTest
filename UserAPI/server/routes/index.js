const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the users API!',
  }));

  app.post('/api/users', usersController.create);
  app.get('/api/users', usersController.list);
  app.get('/api/users/:userId', usersController.retrieve);
  app.post('/api/users/:userId', usersController.update);
  app.post('/api/users/delete/:userId', usersController.delete);
};