const express = require('express')
//akes express library and runs it 
const app = express();
const cors = require('cors')

//Middle ware
app.use(cors())
app.use(express.json())

app.listen(3000, () => {
    console.log('Server has started on port 3000');
});
