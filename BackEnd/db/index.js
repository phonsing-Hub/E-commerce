const db = require("knex")({
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST || "localhost",
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER || "root",
      password: process.env.DB_PWD || "992132",
      database: process.env.DB_NAME || "E-commerce",
    },
  });
  
  const status = () => {
      db.raw("SELECT 1")
    .then(() => {
      console.log("database connection success: ", process.env.DB_PORT || "localhost");
    })
    .catch((err) => {
      console.error("Connection failed:", err);
    });
  
  }
  module.exports = {db, status};