const notes = require('express').Router();
const { readAndAppend, readFromFile, writeToFile } = require('../helper/helper')
const { v4: uuidv4 } = require('uuid');

notes.get('/', (req, res) =>{
readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.get('/:id',(req,res)=>{
    res.json(JSON.parse(data)[req.params.id]);
})

notes.post('/', (req, res) => {
    const { title, text } = req.body
    if(req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        }
        readAndAppend(newNote,'db/db.json')
        res.json('Note created successfully')
    } else{
        res.error('Error in creating note')
    }
});

module.exports = notes;