const express = require('express');

const app = express()

app.use('/', (req, res) => {
    resizeBy.send('Hello Holberton School!')
})

app.listen(1245);

module.exports = app;