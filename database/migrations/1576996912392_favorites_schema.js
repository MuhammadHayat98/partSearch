'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FavoritesSchema extends Schema {
  up () {
    this.create('favorites', (table) => {
      table.increments()
      table.integer('user_id')
      table.string('title')
      table.string('link')
      table.string('thumbnail')
      table.string('price')
    })
  }

  down () {
    this.drop('favorites')
  }
}

module.exports = FavoritesSchema
