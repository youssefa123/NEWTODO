const express = require('express')
//akes express library and runs it 
const app = express();
const cors = require('cors')
const pool = require('./db')


//ROUTES//

//create a todo

//get all todos

//get a todo

//update a todo

//delete a todo


//Middle ware
app.use(cors())
app.use(express.json())

app.listen(3000, () => {
    console.log('Server has started on port 3000');
});
