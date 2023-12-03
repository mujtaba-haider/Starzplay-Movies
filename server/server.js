const express = require('express');
const apiRoute = require('./src/routes/apiRoute')
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', apiRoute)

const port = 4000;

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})