const express = require('express')
const app = express()

app.get('/', async (req, res) => {
    res.send({message: 'This message is from Jenkins PoC'})
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));