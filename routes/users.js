const express = require('express');
const router = express.Router();
const User = require('../knex/models/User');

router.route('/')
.post((req,res) => {
  console.log(req.body);
  let newUser = req.body.name;
  return new User({
    name: newUser
  })
  .save()
  .then(users => {
    users = users.toJSON();
    return res.json(users);
  })
  .catch(err => {
    return res.json({message: err.message});
  })
})
.get((req, res) => {
  return new User()
  .fetchAll()
  .then(users => {
    users = users.toJSON();
    res.json(users);
  })
  .catch(err => {
    return res.json({message: err.message});
  })
})

router.get('/:id', (req, res) => {
  let id = req.params.id;
  return new User({'id': id})
  .fetch()
  .then(user => {
    user = user.toJSON();
    res.json(user);
  })
  .catch(err => {
    return res.json({message: err.message});
  })
})

















module.exports = router;