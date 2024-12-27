exports.up = function (knex) {
    return knex.schema.createTable('tasks', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();  
      table.string('description');  
      table.date('deadline');  
      table.string('category'); 
      table.boolean('completed').defaultTo(false);  
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('tasks');
  };
  