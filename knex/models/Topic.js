const bookshelf = require('./bookshelf');

class Topic extends bookshelf.Model {
  //{return 'topics} <---topics is the name of the table
  get tableName() {return 'topics'}
  get hasTimestamps() {return true}

  User() {
    return this.belongsTo(User);
  }

  Messages() {
    return this.hasMany('topic_id');
  }

}





module.exports = Topic;