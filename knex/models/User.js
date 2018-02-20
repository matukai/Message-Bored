const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() {return 'users'}
  get hasTimestamps() {return true}


  Topic() {
    return this.hasMany('created_by');
  }

  Message() {
    return this.hasMany('author_id');
  }


}







module.exports = User;