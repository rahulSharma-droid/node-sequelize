const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('sequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

})

sequelize.authenticate()
.then(()=> {console.log('Database Connected');})
.catch((err)=>{console.error(err);});

module.exports = sequelize;