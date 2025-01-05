const knex = require('../database/knex')

const task = {
    create: (task) => knex('task').insert(task),
    findAll: () => knex('tasks').select('*'),
    findById: (id) => knex('tasks').where({ id }).first(),
    update: (id, task) => knex('tasks').where({ id }).update(task),
    delete: (id) => knex('tasks').where({ id }).del(),
}

module.exports = task;