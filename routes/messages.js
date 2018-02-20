const express = require('express');
const router = express.Router();
const Message = require('../knex/models/Message');


router.post('/', (req,res) => {
  let insertBody = req.body.body;
  let insertAuthor = req.body.author_id;
  let insertTopic = req.body.topic_id;
  console.log('REEEEEQ' , req.body)
  console.log(insertBody);
  console.log(insertAuthor);
  console.log(insertTopic);
  return new Message ({
    body: insertBody,
    author_id: insertAuthor,
    topic_id: insertTopic
  })
  .save()
  .then(message => {
    //console.log('ROUTER MESSAGE POST' , message)
    //message = message.toJSON(message);
  })
  .catch(err => {
    console.log(err)
    console.log('error will robinson')
  })
})

router.get('/latest', (req, res) => {
  console.log('LATEST' , req.body)

})













module.exports = router;