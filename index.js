const express = require('express')

const fs = require('./helpers');

require('dotenv/config');

const { PORT } = process.env;

const app = express()

app.get ('/users', async (req, res => {
    try{
        const users = await fs.read();
        return res.status(200).json(users);
    } catch (error) {
        console.log(error.message);
    }
}));

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}!`))