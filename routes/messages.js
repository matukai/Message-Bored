const express = require('express');
const router = express.Router();
const Message = require('../knex/models/Message');


router.post('/', (req,res) => {
  let body = req.body.body;
  console.log(body)
  return new Message ({
    body: body
    //author_id: 
    //topic_id:
  })
  .save()
  .then(message => {
    console.log('ROUTER MESSAGE POST' , message)
    message = message.toJSON(message);
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