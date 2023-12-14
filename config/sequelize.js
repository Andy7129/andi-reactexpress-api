const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'eduwork_crud_v2', 
  host: 'localhost',
  username: 'root',
  password: '',
  dialect: 'mysql'
});

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
};

testConnection();
module.export = sequelize;
