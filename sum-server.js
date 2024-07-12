const express = require('express')
const app = express()

app.get('/sum', function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    const sum = parseInt(a) + parseInt(b);
    res.send(sum.toString())
})

app.listen(3000)