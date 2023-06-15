//DEPENDENCIES
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

//MIDDLEWARE
app.use(express.static('public'));

//ROUTES
app.get('/', (req, res) => res.send('Navigate to /notes'));

app.get('/api/notes', (req, res) => res.json());



app.get('/notes', (req, res)=>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);