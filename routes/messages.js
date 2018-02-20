const express = require('express');
const router = express.Router();
const Message = require('../knex/models/Message');


router.post('/', (req,res) => {
  console.log(req.body)
})















module.exports = router;