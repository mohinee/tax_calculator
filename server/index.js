const express = require('express')
const app = express();
var cors = require('cors');
const port = 8000
var constants = require('./data');

app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/getData', (req, res) => {
    console.log(constants);
    res.send(JSON.stringify(constants));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})