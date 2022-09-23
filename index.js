const express = require('express')

const fs = require('./helpers');

require('dotenv/config');

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.get('/users', async(req, res => {
    try {
        const users = await fs.read();
        return res.status(200).json(users);
    } catch (error) {
        console.log(error.message);
    }
}));

app.post('/users', async (req, res) => {
    try {
        const { name, state } = req.body;

        const newUser = {
            name,
            city,
            state,
        };

        const currentUser = await fs.read();

        newUser.id = currentUser.length + 1;

        const updateUser = { ...currentUser, newUser };

        await fs.write(updateUser);

        return res.status(201).json(newUser);
    } catch (error) {
        console.log(error.message);
    };
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}!`))