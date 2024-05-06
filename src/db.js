"use strict";

const mysql = require('mysql');


const connection = mysql.createConnection({
    connectionLimit: 30,
        waitForConnections: true,
        charset: "utf8mb4",
        host: process.env.mysqlhost,
        port: parseInt(process.env.mysqlport),
        user: process.env.mysqluser,
        password: process.env.mysqlpassword,
        database: process.env.mysqldatabase
});

connection.connect((error)=>{
    if(error) throw error;
    console.log(`Conectado ao banco de dados: ${process.env.process.env.DB_NAME}`)
});

module.exports = connection;