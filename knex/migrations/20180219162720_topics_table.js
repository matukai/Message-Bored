
exports.up = function(knex, Promise) {
  return knex.schema.createTable('topics', function(table) {
    table.increments();
    table.string('name').unique().notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.integer('created_by').references('id').inTable('users');
    table.integer('topic_id').references('id').inTable('messages')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('topics', function(table) {
    table.dropTable('topics');
  })
};
