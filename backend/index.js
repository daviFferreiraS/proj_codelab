'use strict'
const express = require('express');
const db = require('./database');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const port = 3000;

app.get('/', (req, res) => {
    res.send({
        title: 'CodeLab Todo-List API',
        version: '0.0.1'
    });
})

app.get('/:user', (req, res) => {
    const user = req.params['user'];
    db.all("SELECT * FROM TODOS WHERE USER = ?", [user], (err, result) => {
        if(err){
            res.send(err.message);
        }
        res.send(result);
    });
})

app.post('/:user', (req, res) => {
    const data = req.body;
    const id = data.id;
    const tarefa = data.tarefa;
    const user = data.user;
    //db.run("INSERT INTO TODOS(ID, TAREFA, USER) VALUES(?, ?, ?)")
    res.send('Data Received: ' + JSON.stringify(data));
})

app.listen(port, () => console.log(`Server Listening to Port ${port}`))