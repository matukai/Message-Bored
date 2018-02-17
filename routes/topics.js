const express = require('express');
const router = express.Router();
const Topic = require('../knex/models/Topic');

router.route('/')
.post((req, res) => {
  //console.log(req.body);
  let topicName = req.body.name;
  return new Topic({
    name: topicName,
    created_by: 1
  })
 .save()
  .then(topics => {
    //console.log(topics)
     topics = topics.toJSON();
     res.json(topics);
  })
  .catch(err => {
    return res.json({message: err.message})
  })
})
.get((req, res) => {
  //console.log(req)
  return new Topic.fetchAll()
  //fetchAll returns array of objects
  .then(topics => {
    topics = topics.toJSON();
    //console.log(topics)
    res.json(topics);
  })
})


















module.exports = router;