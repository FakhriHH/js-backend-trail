const knex = require('../database/knex')

const Task = {
    create: (task) => knex('tasks').insert(task),
    findAll: () => knex('tasks').select('*'),
    findById: (id) => knex('tasks').where({ id }).first(),
    update: (id, task) => knex('tasks').where({ id }).update(task),
    delete: (id) => knex('tasks').where({ id }).del(),
}

module.exports = Task;