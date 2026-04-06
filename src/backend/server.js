import express from "express";

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('backend is running!')
})

app.listen(port,'0.0.0.0', () => {
    console.log(`app is listening on port: http://localhost:${port}`)
})