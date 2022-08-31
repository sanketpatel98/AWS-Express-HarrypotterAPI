// Created by Sanket Patel on 31st August 2022
// purpose : To learn AWS Dynamo db
// .env file can be found on your email.

const express = require ('express')
const { getCharacters, getCharactersById, addOrUpdateCharacter, deleteCharacter } = require('./dynamo')
const app = express()

app.use(express.json()); // mandatory for parsing data body from post requesy

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/characters', async (req, res) => {
    try {
        const characters = await getCharacters();
        res.json(characters)
    } catch (error) {
        console.error(error);
        res.status(500).json({err: 'Something Went Wrong'});
    }
})

app.get('/characters/:id', async (req, res) => {

    const id = req.params.id
    try {
        const characters = await getCharactersById(id);
        res.json(characters)
    } catch (error) {
        console.error(error);
        res.status(500).json({err: 'Something Went Wrong'});
    }
})

app.post('/character', async (req, res)=>{
    const character = req.body;
    try {
        const newCharacters = await addOrUpdateCharacter(character);
        res.json(newCharacters)
    } catch (error) {
        console.error(error);
        res.status(500).json({err: 'Something Went Wrong'});
    }
})

app.put('/character/:id', async (req, res)=>{
    const character = req.body;
    const {id} = req.params; // called as destructuring || similar to req.params.id
    character.id = id
    try {
        const newCharacters = await addOrUpdateCharacter(character);
        res.json(newCharacters)
    } catch (error) {
        console.error(error);
        res.status(500).json({err: 'Something Went Wrong'});
    }
})

app.delete('/character/:id', async (req, res)=>{
    
    const {id} = req.params; // called as destructuring || similar to req.params.id
    try {
        const deletedCharacters = await deleteCharacter(id);
        res.json(deletedCharacters)
    } catch (error) {
        console.error(error);
        res.status(500).json({err: 'Something Went Wrong'});
    }
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})