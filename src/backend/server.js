import express from "express";

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('backend is running!')
})

app.listen(PORT, () => {
    console.log(`app is listening on port: http://localhost:${PORT}`)
})