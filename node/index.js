const express = require('express');
const { faker } = require('@faker-js/faker');


const app = express();
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

app.get('/', (req, res) => {
    const name = faker.person.firstName();
    connection.query(`INSERT INTO people (nome) values('${name}')`);
    console.log(`${name} foi inserido no banco.`);


    connection.query(`SELECT nome FROM people`, (error, results, fields) => {
        let table = '<table>';
        table += '<tr><th>#</th><th>Nome</th></tr>';

        for (let people of results) {
            table += `<tr><td></td><td>${people.nome}</td></tr>`;
        }
        table += '</table>';

        res.send('<h1>Full Cycle Rocks!</h1>' + table);
    });

});

app.listen(port, () => {
    console.log('Rodando na porta: ' + port);
});
