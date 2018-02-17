const bookshelf = require('./bookshelf');


class Message extends bookshelf.Model {
  get tableName() {return 'message'}
  get hasTimestamps() {return true}
}



module.exports = Message;