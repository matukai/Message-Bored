const bookshelf = require('./bookshelf');


class Message extends bookshelf.Model {
  // 'MESSAGES' IS THE TABLE NAME IN POSTGRESQL
  get tableName() {return 'messages'};
  get hasTimestamps() {return true};


  Topic() {
    return this.belongsTo('topic_id');
  }

  User() {
    return this.belongsTo('author_id');
  }



}



module.exports = Message;