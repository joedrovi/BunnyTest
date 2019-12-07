const User = require('../models').User;

module.exports = {
  create(req, res) {
    if( typeof req.body.active !=='boolean'){req.body.active=true}
    return User
      .create({
        name: req.body.name,
        active: req.body.active,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return User
      .findAll()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return User
      .findByPk(req.params.userId, {})
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch(error => res.status(400).send(error));
  },


  update(req, res) {
    return User
      .update({        
        name: req.body.name,
      }, {
        where: {
          id: req.params.userId
       }, 
       returning: true,
        })
      .then(changes => {
        res.status(200).send({message : "User Updated"})
      })
      .catch((error) => res.status(400).send(error));
  },


  delete(req, res) {
    return User
      .update({        
        active: false,
      }, {
        where: {
          id: req.params.userId
       },
       returning: true,
        })
      .then(changes => {        
        return res.status(200).send({message : "User Deleted"})
      })
      .catch((error) => res.status(400).send(error));
  },


};