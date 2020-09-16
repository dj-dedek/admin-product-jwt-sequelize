module.exports = {
  HOST: "localhost",
  USER: "dedek",
  PASSWORD: "password",
  DB: "node_complete",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
