const sequelize = require('sequelize');
const database = require('../config/db');

const query = 'INSERT INTO Bank (Code, Name, File) VALUES (:code, :name, :file)';
const parameters = { code: clean_cpf }; 

const result = await db.query(query, {
    replacements: parameters,
    type: sequelize.QueryTypes.SELECT
})