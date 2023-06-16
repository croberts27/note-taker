const notes = require('express').Router();
const { readAndAppend, readFromFile, writeToFile } = require('../helper/helper')
const { v4: uuidv4 } = require('uuid');

notes.get('/', (req, res) =>{
readFromFile('./public/db/db.json').then((data) => res.json(JSON.parse(data)));
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
        readAndAppend(newNote,'./public/db/db.json')
        res.json('Task added Successfully')
    } else{
        res.error('Error in posting task')
    }
});

notes.delete("/:id", (req,res) => {

});

module.exports = notes;