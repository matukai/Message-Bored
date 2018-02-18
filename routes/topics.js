const express = require('express');
const router = express.Router();
const Topic = require('../knex/models/Topic');

router.route('/')
.post((req, res) => {
  console.log(req.body);
  let topicName = req.body.name
  return new Topic({
    name: topicName,
    created_by: 1
  })
 .save()
  .then(topics => {
    //console.log(topics)
     topics = topics.toJSON();
     return res.json(topics);
  })
  .catch(err => {
    return res.json({message: err.message})
  })
})
.get((req, res) => {
  //console.log(req)
  return new Topic().fetchAll()
  //fetchAll returns array of objects
  .then(topics => {
    topics = topics.toJSON();
    //console.log(topics)
    res.json(topics);
  })
  .catch(err => {
    console.log(err.message)
  })
})

router.put('/:id', (req, res) => {
  //console.log(req.params.id)
  let id = req.params.id;
  let newName = req.body.name;
  //console.log(newName)
  return new Topic({'id': id})
  .save({
    name: newName
  })
  .then(request => {
    //console.log(request)
    return res.json(request)
  })
  .catch(err => {
    return res.json({message: err.message});
  })
})

















module.exports = router;