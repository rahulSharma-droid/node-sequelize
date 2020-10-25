const {Sequelize} = require('sequelize');
const sequelize = require('../database/sequelize');

const First = sequelize.define('first',{
    title: Sequelize.STRING,
    technologies: Sequelize.STRING,
    budget: Sequelize.STRING,
    description: Sequelize.STRING,
    contact_email: Sequelize.STRING
})

module.exports = First;