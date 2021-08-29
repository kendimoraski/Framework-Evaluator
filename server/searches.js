const { DataTypes } = require('sequelize')
const db = require('./db')
const Sequelize = require('sequelize')

const Searches = db.define('searches', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  library: {
    type: DataTypes.STRING,
    defaultValue: '',
    allowNull: '',
  },
  framework: {
    type: DataTypes.STRING,
    defaultValue: '',
    allowNull: '',
  },
  searchCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: '',
  },
})

module.exports = Searches
