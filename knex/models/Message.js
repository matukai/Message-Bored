const bookshelf = require('./bookshelf');


class Message extends bookshelf.Model {
  get tableName() {return 'message'};
  get hasTimestamps() {return true};


  Topic() {
    return this.belongsTo('topic_id');
  }

  User() {
    return this.belongsTo('author_id');
  }



}



module.exports = Message;