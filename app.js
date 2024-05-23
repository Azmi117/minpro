const express = require('express');
const app = express();
const actorController = require('./routes/actor.routing')
const PORT = 3000;

app.use(express.json());
app.use(actorController);


app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`)
})